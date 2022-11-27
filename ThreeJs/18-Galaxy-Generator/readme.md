# Introduction 

Now that we know how to use particles, we could create something cool like a Galaxy. But instead of producing just one galaxy, let's do a galaxy generator.

For that, we're going to use Dat.GUI to let the user tweak the parameters and generate a new galaxy on each change.

# Setup

The starter is only composed of a cube in the middle of the scene. It ensures that everything is working.



# Base particles
  
First, remove the cube and create a generateGalaxy function. Each time we call that function, we will remove the previous galaxy (if there is one) and create a new one.

We can call that function immediately:
```javascript
/**
 * Galaxy
 */
const generateGalaxy = () =>
{
    
}

generateGalaxy()
```
We can create an object that will contain all the parameters of our galaxy. Create this object before the generateGalaxy function. We will populate it progressively and also add each parameter to Dat.GUI:
```javascript
const parameters = {}
```
In our generateGalaxy function, we're going to create some particles just to make sure that everything is working. We can start with the geometry and add the particles count to the parameters:
```javascript
const parameters = {}
parameters.count = 1000

const generateGalaxy = () =>
{
    /**
     * Geometry
     */
    const geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(parameters.count * 3)

    for(let i = 0; i < parameters.count; i++)
    {
        const i3 = i * 3

        positions[i3    ] = (Math.random() - 0.5) * 3
        positions[i3 + 1] = (Math.random() - 0.5) * 3
        positions[i3 + 2] = (Math.random() - 0.5) * 3
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
}
generateGalaxy()
```
That's the same code as before, but we handled the loop a little differently.

We can now create the material by using the PointsMaterial class. This time again, we can add tweaks to the parameters object:
```javascript
parameters.size = 0.02

const generateGalaxy = () =>
{
    // ...

    /**
     * Material
     */
    const material = new THREE.PointsMaterial({
        size: parameters.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    })
}
```
Finally, we can create the points by using the Points class and add it to the scene:
```javascript
const generateGalaxy = () =>
{
    // ...

    /**
     * Points
     */
    const points = new THREE.Points(geometry, material)
    scene.add(points)
}
```


You should see few points floating around.
