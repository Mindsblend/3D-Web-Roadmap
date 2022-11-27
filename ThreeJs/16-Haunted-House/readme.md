# Introduction

Let's use what we've learned to create a haunted house. We will only use Three.js primitives as geometries, the textures in the /static/textures/ folder, and one or two new features.

We will create an elementary house composed of walls, a roof, a door, and some bushes. We will also produce graves in the garden. Instead of visible ghosts made of sheets, we will simply use multicolor lights floating around and passing through the walls and the floor.

# Tips for measurements
  
One beginner mistake we always make when creating something using primitives is using random measures. One unit in Three.js can mean anything you want.

Suppose you are creating a considerable landscape to fly above. In that case, you might think of one unit as one kilometer. If you are building a house, you might think of one unit as one meter, and if you are making a marble game, you might think of one unit as one centimeter.

Having a specific unit ratio will help you create geometries. Let's say you want to make the door. You know that a door is slightly taller than you, so it should reach around 2 meters.

For those using imperials units, you'll have to do the conversion.

# Setup
  
The starter is only composed of a floor, a sphere, some lights (way too intense for a haunted house), and shadows aren't even working.

We will have to create the house all by ourselves, tweak the current lights for a better ambiance, add the shadows, and the rest.



# The house
  
First, let's remove the sphere and create a tiny house. We can leave the floor.



Instead of putting every object composing that house in the scene, we will first create a container just in case we want to move or scale the whole thing:
```javascript
// House container
const house = new THREE.Group()
scene.add(house)
```
Then we can create the walls with a simple cube and add it to the house. Don't forget to move the walls up on the y axis; otherwise it will be half inside the floor:
```javascript
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5, 4),
    new THREE.MeshStandardMaterial({ color: '#ac8e82' })
)
walls.position.y = 1.25
house.add(walls)
```


We chose 2.5 for the height because it would seem like a normal height for the ceiling. We also chose '#ac8e82' for the color, but it's temporary, and we will replace those colors with textures later.

For the roof, we want to make a pyramid shape. The problem is that Three.js doesn't have this kind of geometry. But if you start from a cone and reduce the number of sides to 4, you'll get a pyramid. Sometimes you just have to deflect basic features usages:
```javascript
// Roof
const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, 1, 4),
    new THREE.MeshStandardMaterial({ color: '#b35f45' })
)
roof.rotation.y = Math.PI * 0.25
roof.position.y = 2.5 + 0.5
house.add(roof)
```


Finding the right position and the right rotation might be a little hard. Take your time, try to figure out the logic behind the values, and don't forget that Math.PI is your friend.

As you can see, we left 2.5 + 0.5. We could have written 3 but it's sometime better to visualize the logic behind the value. 2.5, because the roof walls are 2.5 units high and 0.5 because the cone is 1 unit high (and we need to move it up to half its height).

