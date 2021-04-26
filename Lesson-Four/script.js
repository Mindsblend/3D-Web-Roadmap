const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const group = new THREE.Group()
scene.add(group)

const cubeA = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cubeA.position.x = 2
group.add(cubeA)

const cubeB = new THREE.Mesh (
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cubeB.position.x = 0
group.add(cubeB)

const cubeC = new THREE.Mesh (
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00fff0 })
)
cubeC.position.x = -2
group.add(cubeC)


// Axes
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Sizes
const sizes = {
    width: 2000,
    height: 1000
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
let time = Date.now()

// Animation
const tick = () => {

    // Time
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    // Clock
    /* const elapsedTime = clock.getElapsedTime() */

    // Update Objects
    cubeA.rotation.x += 0.001 * deltaTime
    cubeB.rotation.y += 0.001 * deltaTime
    cubeC.rotation.x += 0.001 * deltaTime
    /* cubeB.position.x = Math.cos(elapsedTime)
        cubeB.position.y = Math.sin(elapsedTime)
        camera.lookAt(cubeB.position)*/

    // Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
