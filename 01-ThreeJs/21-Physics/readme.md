# Introduction
  
Physics can be one of the coolest features you can add to a WebGL experience. People enjoy playing with objects, see them collide, collapse, fall and bounce like in my portfolio: https://bruno-simon.com/

There are many ways of adding physics to your project, and it depends on what you want to achieve. You can create your own physics with some mathematics and solutions like Raycaster, but if you wish to get realistic physics with tension, friction, bouncing, constraints, pivots, etc. and all that in 3D space, you better use a library.

# Theory
  
The idea is simple. We are going to create a physics world. This physics world is purely theoretical, and we cannot see it. But in this world, things fall, collide, rub, slide, etc.

When we create a Three.js mesh, we will also create a version of that mesh inside the physics world. If we make a Box in Three.js, we also create a box in the physics world.

Then, on each frame, before rendering anything, we tell the physics world to update itself; we take the coordinates (position and rotation) of the physics objects and apply them to the corresponding Three.js mesh.

And that's all. What is most difficult is to organize our code in a decent structure. That is a part where paths separate. Each developer will have its habits, and it also depends on what you want to do and how complex the physics can become.

To begin with, we will simply create spheres and boxes.

# Libraries
  
There are multiple available libraries. First, you must decide if you need a 3D library or a 2D library. While you might think it has to be a 3D library because Three.js is all about 3D, you might be wrong. 2D libraries are usually much more performant, and if you can sum up your experience physics up to 2D collisions, you better use a 2D library.

One example is if you want to create a pool game. The balls can collide and bounce on the walls, but you can project everything on a 2D plane. You can design balls as circles in the physics world, and the walls are simple rectangles. Indeed, you won't be able to do tricks hitting the bottom of the ball so that it can jump over the other balls.

An excellent example of a project done like this is Ouigo Let's play by Merci Michel. They used a 2D physics library because every collision and animation can be represented in a 2D space.

## 3D physics  
For 3D physics, there are three main libraries:

## Ammo.js  
Website: http://schteppe.github.io/ammo.js-demos/
Git repository: https://github.com/kripken/ammo.js/
Documentation: No documentation
Direct JavaScript port of Bullet (a physics engine written in C++)
A little heavy
Still updated by a community
## Cannon.js  
Website: https://schteppe.github.io/cannon.js/
Git repository: https://github.com/schteppe/cannon.js
Documentation: http://schteppe.github.io/cannon.js/docs/
Lighter than Ammo.js
More comfortable to implement than Ammo.js
Mostly maintained by one developer
Hasn't been updated for many years
There is a maintained fork
## Oimo.js  
Website: https://lo-th.github.io/Oimo.js/
Git repository: https://github.com/lo-th/Oimo.js
Documentation: http://lo-th.github.io/Oimo.js/docs.html
Lighter than Ammo.js
Easier to implement than Ammo.js
Mostly maintained by one developer
Hasn't been updated for 2 years
## 2D Physics  
For 2D physics, there are many libraries, but here's the most popular:

## Matter.js  
Website: https://brm.io/matter-js/
Git repository: https://github.com/liabru/matter-js
Documentation: https://brm.io/matter-js/docs/
Mostly maintained by one developer
Still kind of updated
## P2.js  
Website: https://schteppe.github.io/p2.js/
Git repository: https://github.com/schteppe/p2.js
Documentation: http://schteppe.github.io/p2.js/docs/
Mostly maintained by one developer (Same as Cannon.js)
Hasn't been update for 2 years
## Planck.js  
Website: https://piqnt.com/planck.js/
Git repository: https://github.com/shakiba/planck.js
Documentation: https://github.com/shakiba/planck.js/tree/master/docs
Mostly maintained by one developer
Still updated nowadays
## Box2D.js  
Website: http://kripken.github.io/box2d.js/demo/webgl/box2d.html
Git repository: https://github.com/kripken/box2d.js/
Documentation: No documentation
Mostly maintained by one developer (same as Ammo.js)
Still updated nowadays
We won't use a 2D library in this lesson, but the 2D library code would be very similar to a 3D library code. The main difference is the axes you have to update.

There are already solutions that try to combine Three.js with libraries like Physijs. Still, we won't use any of those solutions to get a better learning experience and better understand what's going on.

While Ammo.js is the most used library and particularly with Three.js, as you can see in the examples, we will go for Cannon.js. The library is more comfortable to implement in our project and easier to use.

# Import Cannon.js
  
To add Cannon.js to our project, we first need to add the dependency.

In your terminal, on the project folder, run this command npm install --save cannon.

We can now import Cannon.js in our JavaScript with a classic import:
```javascript
import CANNON from 'cannon' 
```
Everything we need is available in the CANNON variable.

# Setup
  
Our starter is composed of one sphere on a plane, and shadows are already enabled for aesthetic reasons.

