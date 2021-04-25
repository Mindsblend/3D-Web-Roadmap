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
    width: 1000,
    height: 800
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
renderer.render(scene, camera)