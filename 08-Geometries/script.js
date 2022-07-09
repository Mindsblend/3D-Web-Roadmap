import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
// Object
// const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2)

// **********
// First and Most Simple Example
// const positionsArray = new Float32Array([
//     0, 0, 0, // First vertex
//     0, 1, 0, // Second vertex
//     1, 0, 0,  // Third vertex
// ])

// const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)

// const geometry = new THREE.BufferGeometry()
// geometry.setAttribute('position', positionsAttribute)



// **********
// Second examples with random points
const count = 50
// We want 50 triangles with 3 vertices composed by 3 positions
const positionsArray = new Float32Array(count * 3 * 3)
for (let i = 0; i < count * 3 * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 4
}
const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
const geometry = new THREE.BufferGeometry()
geometry.setAttribute('position', positionsAttribute)
// If you what better performance use index


const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
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

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
