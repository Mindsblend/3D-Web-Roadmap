import { OrbitControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js"

// Canvas
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



// Axes
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Sizes
const sizes = {
    width: 2000,
    height: 1000
}

// Camera
/* const newCamera = new THREE.OrthographicCamera(-1 * aspectRation, 1 * aspectRation, 1, -1, 0.1, 100) */
const aspectRatio = sizes.width / sizes.height
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100)
camera.position.z = 3
scene.add(camera)


// Cursor
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height - 0.5)
})


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


const clock = new THREE.Clock()
let time = Date.now()

// Animation
gsap.to(cubeB.position, { duration: 1, delay: 1, x: 2 })
gsap.to(cubeB.position, { duration: 1, delay: 2, x: 0 })

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

    // Camera Animations
    /* const cameraAnimations = {
            closePerespectiveX: cursor.x * 3,
            closePerespectiveY: cursor.y * 3,
            widePrespectiveTwoX: cursor.x * 10,
            widePerespectiveTwoY: cursor.y * 10,
            roundPerespectiveX: Math.cos(cursor.x * 10) * 3,
            roundPerespectiveZ: Math.sin(cursor.x * 10) * 3,
            naturalRoundPerespectiveX: Math.cos(cursor.x * Math.PI * 2) * 3,
            naturalRoundPerespectiveZ: Math.sin(cursor.x * Math.PI * 2) * 3,
            upDownPerespectiveY: cursor.y * 5
        } */

    // Update Camera
    /* camera.position.x = cameraAnimations.naturalRoundPerespectiveX
        camera.position.y =  cameraAnimations.upDownPerespectiveY
        camera.position.z =  cameraAnimations.naturalRoundPerespectiveZ
        camera.lookAt(new THREE.Vector3()) */

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.target.set(0, 0, 0);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.rotateSpeed = 0.004;

    // Render
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()
