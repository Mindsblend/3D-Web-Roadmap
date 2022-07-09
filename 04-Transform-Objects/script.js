import './style.css'
import {
    Group, Scene, BoxGeometry, Mesh, AxesHelper, PerspectiveCamera, WebGLRenderer, MeshBasicMaterial
} from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new Scene()

/**
 * Objects
 */
const group = new Group()
scene.add(group)

const cubeOne = new Mesh(
    new BoxGeometry(1,1,1),
    new MeshBasicMaterial({ color: 0xff0000 }),
)
group.add(cubeOne)

const cubeTwo = new Mesh(
    new BoxGeometry(1,1,1),
    new MeshBasicMaterial({ color: 0x00ff00 }),
)
cubeTwo.position.x = 2
group.add(cubeTwo)

const cubeThree = new Mesh(
    new BoxGeometry(1,1,1),
    new MeshBasicMaterial({ color: 0x0000ff }),
)
cubeThree.position.x = -2
group.add(cubeThree)


// Position
group.position.set(0, 1, 0)

// Scale
group.scale.set(1, 2, 1)

// Rotation
// This is an Euler Sfere, you move it using PI tems, 180deg will be 1 PI
// We can use reorder to change the order the transitions are aplied,
// its diferent to move first the X and then the Y, than move the Y and then the X
// group.rotation.reorder('YXZ')
// group.rotation.x = Math.PI * 0.25
group.rotation.y = Math.PI * 0.25

scene.add(group)

// Axex Helper
const axexHelper = new AxesHelper()
scene.add(axexHelper)

// This is the distance from the center of the scene to our object
console.log('The distance to the center is:', group.position.length())

// This will reduce the length of the vector to 1
// console.log('', group.position.normalize())
// console.log('This will be one:', group.position.length())

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 6

// We tell the camera to look at some specific position
// camera.lookAt(group.position)

scene.add(camera)

// This is the distance from our object to the camera
console.log('The distance to the cameera is: ', group.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
