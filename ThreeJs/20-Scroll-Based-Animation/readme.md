# Introduction 
  
Having an experience composed of only WebGL is great, but sometimes, you'll want the experience to be part of a classic website.

The experience can be in the background to add some beauty to the page, but then, you'll want that experience to integrate properly with the HTML content.

In this lesson, we will learn how to use Three.js as a background of a classic HTML page. We will make the camera translate to follow the scroll. We will discover some tricks to make this scroll more immersive. We will add a cool parallax animation based on the cursor position. And finally, we will trigger some animations when arriving at the corresponding sections.

# Setup
  
This lesson is a good opportunity to practice many of the techniques we've already learned. Instead of having the environment already set up, we will do most of the work ourselves.

The OrbitControls has been removed because we want the camera to move according to the scroll and to not let the user rotate about as in prior lessons.

Dat.GUI is already available and one color as been created to be used later:
```javascript
/**
 * Debug
 */
const gui = new dat.GUI()

const parameters = {
    materialColor: '#ffeded'
}

gui.addColor(parameters, 'materialColor')
```
Some very simple HTML content has been setup already. Currently, you can only see one title but there are two sections right below. We can't see them because the scroll is blocked.



# HTML Scroll
  
Activate the scroll  
Earlier in the course, we deactivated the scroll using this CSS:
```css
html,
body
{
    overflow: hidden;
}
```
To reactivate it, remove the overflow line in /src/style.css.

You should be able to scroll and see the two other sections below.

Fix the elastic scroll  
In some environments, you might notice that, if you scroll too far, you get a kind of elastic animation when the page goes beyond the limit.

While this is a cool feature, by default, the back of the page is white and doesn't match our experience.

To fix that, we could have set the background-color of the page to the same color as the clearColor of the renderer . Instead, we are going to make the clearColor transparent and only set the background-color on the page.

To do that, in /src/script.js, you need to set the alpha property to true on the WebGLRenderer:
```javascript
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
JavaScript
By default, the clear alpha value is 0 which is why we didn't have to set it ourselves. Telling the renderer to handle alpha is enough. But if you want to change that value, you can do it with setClearAlpha:

renderer.setClearAlpha(0)
```


We can now see the back of the page which is white.

In /src/style.css, add a background-color to the html in CSS:
```css
html
{
    background: #1e1a20;
}
```
We get a nice uniform background color and the elastic scroll isn't an issue anymore.

# Objects
  
We are going to create an object for each section to illustrate each of them.

To keep things simple, we will use Three.js primitives, but you can create whatever you want. And later in the course, you'll learn how to import custom models into the scene.

In /src/script.js, remove the code for the cube. In its place, create three Meshes using a TorusGeometry, a ConeGeometry and a TorusKnotGeometry:
```javascript
/**
 * Objects
 */
// Meshes
const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)

scene.add(mesh1, mesh2, mesh3)
```


All the objects are, of course, on top of each other. We will fix that later.

Again, in order to keep things simple, our code will be a bit redundant. But don't hesitate to use arrays or other code structuring solutions if you have more sections.

# Material  
Base material  
We are going to use the MeshToonMaterial on all three Meshes.

As in the Materials lesson, we are going to create one instance of the material and use it for all three Meshes.

When creating the MeshToonMaterial, use the parameters.materialColor for the color property and apply it to all 3 Meshes:
```javascript
// Material
const material = new THREE.MeshToonMaterial({ color: parameters.materialColor })

// Meshes
const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    material
)
const mesh2 = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    material
)
const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    material
)

scene.add(mesh1, mesh2, mesh3)
```


Unfortunately, it seems that the objects are now black.

The reason is that the MeshToonMaterial is one of the Three.js materials that appears only when there is light.

# Light  
Add one DirectionalLight to the scene:
```javascript
/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)
```


You should now see your objects.

We are using the color stored in the parameters object, but changing this value with the Tweaker doesn't change the material itself.

To fix that, we can listen to the change event on the already existing tweak and update the material accordingly:
```javascript
gui
    .addColor(parameters, 'materialColor')
    .onChange(() =>
    {
        material.color.set(parameters.materialColor)
    })
```

# Gradient texture  
As we saw in the Materials lesson, by default, the MeshToonMaterial will have one color for the part in the light and one darker color for the part in the shade.

We can improve that by providing a gradient texture.

Two gradient images are provided in the /static/textures/gradients/ folder.

Instantiate the TextureLoader before instantiating the material. Then load the textures/gradients/3.jpg texture:
```javascript
// Texture
const textureLoader = new THREE.TextureLoader()
const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
JavaScript
Use it in the gradientMap property of the material:

// Material
const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
})
```


Not the toon effect we were expecting.

The reason is that the texture is a very small image composed of 3 pixels going from dark to bright. By default, instead of picking the nearest pixel on the texture, WebGL will try to interpolate the pixels. That's usually a good idea for the look of our experiences, but in this case, it creates a gradient instead of a toon effect.

To fix that, we need to set the magFilter of the texture to THREE.NearestFilter so that the closest pixel is used without interpolating it with neighbor pixels:
```javascript
const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter
```


Much better, but we still need to position the meshes properly.

