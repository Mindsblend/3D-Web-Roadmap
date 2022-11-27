# Introduction
  
As the name suggests, a Raycaster can cast (or shoot) a ray in a specific direction and test what objects intersect with it.



You can use that technique to detect if there is a wall in front of the player, test if the laser gun hit something, test if something is currently under the mouse to simulate mouse events, and many other things.

# Setup
  
In our starter, we have 3 red spheres, and we are going to shoot a ray through and see if those spheres intersect.



# Create the Raycaster
  
Instantiate a Raycaster:
```javascript
/**
 * Raycaster
 */
const raycaster = new THREE.Raycaster()
```
To change the position and direction where ray will be cast, we can use the set(...) method. The first parameter is the position and the second parameter is the direction.

Both are Vector3, but the direction has to be normalized. A normalized vector has a length of 1. Don't worry, you don't have to do the mathematics by yourself, and you can call the normalize() method on the vector:
```javascript
const rayOrigin = new THREE.Vector3(- 3, 0, 0)
const rayDirection = new THREE.Vector3(10, 0, 0)
rayDirection.normalize()

raycaster.set(rayOrigin, rayDirection)
```
This example of a normalized vector isn't very relevant because we could have set 1 instead of 10, but if we change the values, we will still have the normalize() method making sure that the vector is 1 unit long.

Here, the ray position supposedly start a little on the left in our scene, and the direction seems to go to the right. Our ray should go through all the spheres.



# Cast a ray
  
To cast a ray and get the objects that intersect we can use two methods, intersectObject(...) (singular) and intersectObjects(...) (plural).

intersectObject(...) will test one object and intersectObjects(...) will test an array of objects:
```javascript
const intersect = raycaster.intersectObject(object2)
console.log(intersect)

const intersects = raycaster.intersectObjects([object1, object2, object3])
console.log(intersects)
```
If you look at the logs, you'll see that intersectObject(...) returned an array of one item (probably the second sphere) and intersectObjects(...), returned an array of three items (probably the 3 spheres).
