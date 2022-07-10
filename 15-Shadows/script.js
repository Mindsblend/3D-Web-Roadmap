import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

/**
 * Texture
 */
const textureLoader = new THREE.TextureLoader()
const bakedShadow = textureLoader.load('/textures/bakedShadow.jpg')
const simpleShadow = textureLoader.load('/textures/simpleShadow.jpg')

/**
 * Base
 */
// Debug
const gui = new dat.GUI()
gui.width = 400

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001).name('Ambient Light Intensity')
scene.add(ambientLight)

// Directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4)
directionalLight.position.set(2, 2, - 1)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.width = 1024 * 2
directionalLight.shadow.mapSize.height = 1024 * 2

directionalLight.shadow.camera.near = 1
directionalLight.shadow.camera.far = 6

directionalLight.shadow.camera.top = 2
directionalLight.shadow.camera.right = 2
directionalLight.shadow.camera.bottom = - 2
directionalLight.shadow.camera.left = - 2
directionalLight.shadow.radius = 10

const directionalLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
directionalLightShadowHelper.visible = false
scene.add(directionalLightShadowHelper)

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
scene.add(directionalLightHelper)

gui.add(directionalLight, 'intensity').min(0).max(1).step(0.001).name('Directional Light Intensity')
gui.add(directionalLight.position, 'x').min(- 5).max(5).step(0.001).name('Directional Light Position X')
gui.add(directionalLight.position, 'y').min(- 5).max(5).step(0.001).name('Directional Light Position Y')
gui.add(directionalLight.position, 'z').min(- 5).max(5).step(0.001).name('Directional Light Position Z')
gui.add(directionalLightShadowHelper, 'visible').name('directionalLightShadowHelper')

scene.add(directionalLight)

// Spot Light
const spotLight = new THREE.SpotLight(0xffffff, 0.4, 10, Math.PI * 0.3)

spotLight.castShadow = true

spotLight.position.set(0, 2, 2)

spotLight.shadow.mapSize.width = 1024 * 2
spotLight.shadow.mapSize.height = 1024 * 2
spotLight.shadow.camera.fov = 30

spotLight.shadow.camera.near = 1
spotLight.shadow.camera.far = 4

scene.add(spotLight)
scene.add(spotLight.target)

const sportLightCameraHelper =  new THREE.CameraHelper(spotLight.shadow.camera)
sportLightCameraHelper.visible = false

scene.add(sportLightCameraHelper)

gui.add(sportLightCameraHelper, 'visible').name('sportLightCameraHelper')


// Point light
const pointLight = new THREE.PointLight(0xffffff, 0.3)

pointLight.position.set(- 1, 1, 0)
scene.add(pointLight)

const pointLightCameraHelper = new THREE.CameraHelper(pointLight.shadow.camera)
pointLightCameraHelper.visible = false
gui.add(pointLightCameraHelper, 'visible').name('pointLightCameraHelper')
scene.add(pointLightCameraHelper)

pointLight.castShadow = true

pointLight.shadow.mapSize.width = 1024 * 2
pointLight.shadow.mapSize.height = 1024 * 2

pointLight.shadow.camera.near = 0.1
pointLight.shadow.camera.far = 5

/**
 * Materials
 */
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.7
gui.add(material, 'metalness').min(0).max(1).step(0.001)
gui.add(material, 'roughness').min(0).max(1).step(0.001)

/**
 * Objects
 */
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    material
)

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
    // new THREE.MeshBasicMaterial({ map: bakedShadow }),
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.5

sphere.castShadow = true

plane.receiveShadow = true

scene.add(sphere, plane)

const sphereShadow = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1.5, 1.5),
    new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        alphaMap: simpleShadow,
    })
)
sphereShadow.rotation.x = - Math.PI * 0.5
sphereShadow.position.y = plane.position.y + 0.01
scene.add(sphereShadow)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update the Sphere
    sphere.position.x = Math.cos(elapsedTime) * 1.5
    sphere.position.z = Math.sin(elapsedTime) * 1.5
    sphere.position.y = Math.abs(Math.sin(elapsedTime * 3))

    // Update the shadow
    sphereShadow.position.x = sphere.position.x
    sphereShadow.position.z = sphere.position.z
    sphereShadow.material.opacity = (1 - sphere.position.y) * 0.3

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
