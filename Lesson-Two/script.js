

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
/* mesh.position.x = 1
   mesh.position.y = 1
   mesh.position.z = 1
   mesh.position.set(0.7, - 0.6, 1)
   console.log(mesh.position.length()) */
/* mesh.scale.x = 2
    mesh.scale.y = 0.5
    mesh.scale.z = 0.5
    mesh.scale.set(2, 0.5, 0.5) */

// Rotation
/* mesh.rotation.reorder('YXZ') */
/* mesh.rotation.x = Math.PI * 2
    mesh.rotation.y = Math.PI
    mesh.rotation.z = Math.PI */

// Sizes
const sizes = {
    width: 1000,
    height: 800
}

// Scene
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
console.log(mesh.position.distanceTo(camera.position))
/* mesh.position.normalize(camera.position)
   mesh.postion.normalize() */
camera.position.z = 3
scene.add(camera)
scene.add(mesh)

/* const myvector = new THREE.Vector3(3, 0, 0)
    camera.lookAt(myvector) */

// Axes Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
