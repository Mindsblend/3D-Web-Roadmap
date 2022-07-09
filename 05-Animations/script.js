import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

gsap.to(mesh.position, { duration: 10, delay: 1, x: 2 })

// Animation
function tick() {
    // Just will call a function in the next frame
    const elapsetTime = clock.getElapsedTime()

    // Update Objects
    // mesh.rotation.y = elapsetTime * Math.PI / 2
    // mesh.rotation.x = elapsetTime * Math.PI / 2
    // camera.position.y = Math.sin(elapsetTime)
    // camera.position.x = Math.cos(elapsetTime)

    // camera.lookAt(mesh.position)

    // Render our objects
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()
