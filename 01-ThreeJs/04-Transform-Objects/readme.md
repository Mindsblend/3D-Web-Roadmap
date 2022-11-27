# Introduction
  
Now that we have everything in place, we can explore Three.js functionalities.

Before animating our scene, we need to know how to transform objects in our scene. We've already done that with the camera by moving it backward using the camera.position.z = 3.

There are 4 properties to transform objects in our scene

* position (to move the object)
* scale (to resize the object)
* rotation (to rotate the object)
* quaternion (to also rotate the object; more about that later)
* All classes that inherit from the Object3D class possess those properties like PerspectiveCamera or Mesh and classes that we haven't covered yet.

You can see from what classes inherit each class on top of the Three.js documentation.

Those properties will be compiled in what we call matrices. Matrices are used internally by Three.js, by the WebGL, and by the GPU to transform things. Fortunately, you don't have to handle matrices by yourself and you can just modify the previously-mentioned properties.

# Setup
  
In the starter, all we have is the project how we left it in the previous lesson with the cube in the center of the view.

# Move objects
  
The position possesses 3 essential properties, which are x, y, and z. Those are the 3 necessary axes to position something in a 3D space.

The direction of each axis is purely arbitrary, and it can vary according to the environment. In Three.js, we usually consider that the y axis is going upward, the z axis is going backward, and the x axis is going to the right.

As for the meaning of 1 unit, it's up to you. 1 can be 1 centimeter, 1 meter, or even 1 kilometer. I recommend that you adapt the unit to what you want to build. If you're going to create a house, you probably should think of 1 unit as 1 meter.

You can play around with the position property of your mesh and try to guess where the cube will get (try to keep it in the screen).

Make sure to do that before you call the render(...) method or you will render the mesh before moving it.

```javascript
mesh.position.x = 0.7
mesh.position.y = - 0.6
mesh.position.z = 1
```

The position property is not any object. It's an instance of the Vector3 class. While this class has an x, a y, and a z property, it also has many useful methods.

You can get the length of a vector:
```javascript
console.log(mesh.position.length()
```
You can get the distance from another Vector3 (make sure to use this code after creating the camera):
```javascript
console.log(mesh.position.distanceTo(camera.position))
```
You can normalize its values (meaning that you will reduce the length of the vector to 1 unit but preserve its direction):

```javascript
console.log(mesh.position.normalize())
```
To change the values, instead of changing x, y and z separately, you can also use the set(...) method:

```javascript
mesh.position.set(0.7, - 0.6, 1)
```
