# Introduction
  
As we saw in the previous lesson, adding lights is as simple as adding meshes. You instantiate a light using the proper class, and you add it to the scene.

There are multiple types of lights, and we already discovered the AmbientLight and the PointLight.

In this lesson, we will see all the different classes in detail and how to use them.

# Setup
  
A scene is already set up in the starter (complete with a sphere, a cube, a torus, and a plane as the floor), but feel free to try this yourself if you want to practice.

Because we are going to use lights, we must use a material that reacts to lights. We could have used MeshLambertMaterial, MeshPhongMaterial or MeshToonMaterial, but instead we will use the MeshStandardMaterial because it's the most realistic one as we saw in the previous lesson. We also reduced the roughness of the material to 0.4 to see the reflections of the lights.



Once the starter is working remove the AmbientLight and the PointLight to start from scratch. You should get a black render with nothing visible in it.

# AmbientLight
  
The AmbientLight applies omnidirectional lighting on all geometries of the scene. The first parameter is the color and the second parameter is the intensity. As for the materials, you can set the properties directly when instantiating or you can change them after:
```javascript
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

// Equals
const ambientLight = new THREE.AmbientLight()
ambientLight.color = new THREE.Color(0xffffff)
ambientLight.intensity = 0.5
scene.add(ambientLight)
```


And like we did for the materials, you can add the properties to the Debug UI. We won't do that in the rest of the lesson but feel free to add tweaks if you want to ease the testing:
```javascript
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
```
If all you have is an AmbientLight you'll have the same effect as for a MeshBasicMaterial because all faces of the geometries will be lit equally.

In real life, when you light up an object, the sides of the objects at the opposite of the light won't be totally black because light bounces on the walls and other objects. Light bouncing is not supported in Three.js for performance reasons, but you can use a dim AmbientLight to fake this light bounce.

# DirectionalLight
  
The DirectionalLight will have a sun-like effect as if the sun rays were traveling in parallel. The first parameter is the color and the second parameter is the intensity:
```javascript
const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3)
scene.add(directionalLight)
```


By default, the light will seems to come from above. To change that, you must move the whole light by using the position property like if it were a normal object.
```javascript
directionalLight.position.set(1, 0.25, 0)
```


The distance of the light doesn't matter for now. The rays come from an infinite space and travel in parallel to the infinite opposite.

