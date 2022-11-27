# Introduction
  
Materials are used to put a color on each visible pixel of the geometries.

The algorithms that decide on the color of each pixel are written in programs called shaders. Writing shaders is one of the most challenging parts of WebGL and Three.js, but don't worry; Three.js has many built-in materials with pre-made shaders.

We will discover how to create our own shaders in a future lesson. For now, let's use Three.js materials.

# Setup
  
The starter doesn't contain any object. This is an excellent occasion to revise the basics of creating Meshes.

# Prepare our scene
  
To test the materials, we should prepare a lovely scene and load some textures.

Create 3 Meshes composed of 3 different geometries (a sphere, a plane, and a torus) and use the same MeshBasicMaterial on all of the 3. Yes, you can use one material on multiple meshes. Move the sphere on the left and the torus on the right to separate them.

The add(...) method support adding multiple objects at once:
```javascript
/**
 * Objects
 */
const material = new THREE.MeshBasicMaterial()

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    material
)
sphere.position.x = - 1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 16, 32),
    material
)
torus.position.x = 1.5

scene.add(sphere, plane, torus)
```

We can now rotate our objects on our tick function as we did on the Animation lesson:
```javascript
/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = 0.1 * elapsedTime
    plane.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = 0.15 * elapsedTime
    plane.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime

    // ...
}

tick()
```
You should see your 3 objects spinning slowly.

The materials we are going to discover are using textures in many different ways. Let's load some textures using the TextureLoader as we did on the Textures lesson.

All the texture images are located in the /static/textures/ folder. For now, we will load all the door textures located in the /static/textures/door/ folder, the first matcap texture located in the /static/textures/matcaps/ folder and the first gradient texture located in the /static/textures/gradients/ folder.

Make sure to do that before instantiating the material:
```javascript
/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('/textures/matcaps/1.png')
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg')
```

To ensure that all the textures are well loaded, you can use them on your material with the map property, as we saw in the Textures lesson.
```javascript
const material = new THREE.MeshBasicMaterial({ map: doorColorTexture })
```
Until now, we only used the MeshBasicMaterial, which applies a uniform color or a texture on our geometry.

If you search for "material" on the Three.js documentation, you'll see that there are many classes we can use. Let's try them.

# MeshBasicMaterial
  
MeshBasicMaterial is probably the most "basic" material... But there are multiple properties that we haven't cover yet.

You can set most of those properties while instancing the material in the object we send as a parameter, but you can also change those properties on the instance directly:
```javascript
const material = new THREE.MeshBasicMaterial({
    map: doorColorTexture
})
```
// Equals
```javascript
const material = new THREE.MeshBasicMaterial()
material.map = doorColorTexture
```
We will use the second method, but feel free to do as you like.

# Map  
The map property will apply a texture on the surface of the geometry:

```javascript
material.map = doorColorTexture
```

# Color  
The color property will apply a uniform color on the surface of the geometry. When you are changing the color property directly, you must instantiate a Color class. You can use many different formats:

```javascript
material.color = new THREE.Color('#ff0000')
material.color = new THREE.Color('#f00')
material.color = new THREE.Color('red')
material.color = new THREE.Color('rgb(255, 0, 0)')
material.color = new THREE.Color(0xff0000)
```

Combining color and map will tint the texture with the color:

```javascript
material.map = doorColorTexture
material.color = new THREE.Color('#ff0000')
```

# Wireframe  
The wireframe property will show the triangles that compose your geometry with a thin line of 1px regardless of the distance of the camera:
```javascript
material.wireframe = true
```

# Opacity  
The opacity property controls the transparency but, to work, you should set the transparent property to true to inform Three.js that this material now supports transparency:
```javascript
material.transparent = true
material.opacity = 0.5
```

# AlphaMap  
Now that the transparency is working, we can use the alphaMap property to control the transparency with a texture:
```javascript
material.transparent = true
material.alphaMap = doorAlphaTexture
```

# Side  
The side property lets you decide which side of a face is visible. By default, the front side is visible (THREE.FrontSide), but you can show the backside instead (THREE.BackSide) or both (THREE.DoubleSide):
```javascript
material.side = THREE.DoubleSide
```

