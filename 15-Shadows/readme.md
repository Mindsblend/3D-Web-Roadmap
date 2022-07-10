# Introduction
  
Now that we have lights, we want shadows. The back of the objects are indeed in the dark, and this is called the core shadow. What we are missing is the drop shadow, where objects create shadows on the other objects.

Shadows have always been a challenge for real-time 3D rendering, and developers must find tricks to display realistic shadows at a reasonable frame rate.

There are many ways of implementing them, and Three.js has a built-in solution. Be aware, this solution is convenient, but it's far from perfect.

# How it works
  
We won't detail how shadows are working internally, but we will try to understand the basics.

When you do one render, Three.js will first do a render for each light supposed to cast shadows. Those renders will simulate what the light sees as if it was a camera. During these lights renders, MeshDepthMaterial replaces all meshes materials.

The results are stored as textures and named shadow maps.

You won't see those shadow maps directly, but they are used on every material supposed to receive shadows and projected on the geometry.

Here's an excellent example of what the directional light and the spotlight see: https://threejs.org/examples/webgl_shadowmap_viewer.html

# Setup
  
Our starter is composed of one simple sphere on a plane with one directional light and one ambient light.

You can control these lights and the material metalness and roughness in Dat.GUI.



How to activate shadows 
  
First, we need to activate the shadow maps on the renderer:
```javascript
renderer.shadowMap.enabled = true
```
Then, we need to go through each object of the scene and decide if the object can cast a shadow with the castShadow property, and if the object can receive shadow with the receiveShadow property.

Try to activate these on as few objects as possible:

sphere.castShadow = true
```javascript
// ...
plane.receiveShadow = true
```
Finally, activate the shadows on the light with the castShadow property.

Only the following types of lights support shadows:

PointLight
DirectionalLight
SpotLight
And again, try to activate shadows on as few lights as possible:
```javascript
directionalLight.castShadow = true
```


You should get a shadow of the sphere on the plane.

Sadly, that shadow looks terrible. Let's try to improve it.

