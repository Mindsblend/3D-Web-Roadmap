# Introduction
  
Particles are precisely what you expect from that name. They are very popular and can be used to achieve various effects such as stars, smoke, rain, dust, fire, and many other things.

The good thing with particles is that you can have hundreds of thousands of them on screen with a reasonable frame rate. The downside is that each particle is composed of a plane (two triangles) always facing the camera.

Creating particles is as simple as making a Mesh. We need a BufferGeometry, a material that can handle particles (PointsMaterial), and instead of producing a Mesh we need to create a Points.

# Setup
  
The starter is only composed of a cube in the middle of the scene. That cube ensures that everything is working.

# First particles
  
Let's get rid of our cube and create a sphere composed of particles to start.

# Geometry  
You can use any of the basic Three.js geometries. For the same reasons as for the Mesh, it's preferable to use BufferGeometries. Each vertex of the geometry will become a particle:
```javascript
/**
 * Particles
 */
// Geometry
const particlesGeometry = new THREE.SphereGeometry(1, 32, 32)
```

# PointsMaterial  
We need a special type of material called PointsMaterial. This material can already do a lot, but we will discover how to create our own particles material to go even further in a future lesson.

The PointsMaterial has multiple properties specific to particles like the size to control all particles size and the sizeAttenuation to specify if distant particles should be smaller than close particles:
```javascript
// Material
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    sizeAttenuation: true
})
```
As always, we can also change those properties after creating the material:
```javascript
const particlesMaterial = new THREE.PointsMaterial()
particlesMaterial.size = 0.02
particlesMaterial.sizeAttenuation = true
JavaScript
Points  
Finally, we can create the final particles the same way we create a Mesh, but this time by using the Points class. Don't forget to add it to the scene:

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)
```
