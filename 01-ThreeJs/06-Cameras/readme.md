# Introduction 
  
We already created a PerspectiveCamera, but there are other types of cameras, as you can see in the documentation.

### Camera  
The Camera class is what we call an abstract class. You're not supposed to use it directly, but you can inherit from it to have access to common properties and methods. Some of the following classes inherit from the Camera class.

### ArrayCamera  
The ArrayCamera is used to render your scene multiple times by using multiple cameras. Each camera will render a specific area of the canvas. You can imagine this looking like old school console multiplayer games where we had to share a split-screen.

### StereoCamera  
The StereoCamera is used to render the scene through two cameras that mimic the eyes in order to create what we call a parallax effect that will lure your brain into thinking that there is depth. You must have the adequate equipment like a VR headset or red and blue glasses to see the result.

### CubeCamera  
The CubeCamera is used to get a render facing each direction (forward, backward, leftward, rightward, upward, and downward) to create a render of the surrounding. You can use it to create an environment map for reflection or a shadow map. We'll talk about those later.

### OrthographicCamera  
The OrthographicCamera is used to create orthographic renders of your scene without perspective. It's useful if you make an RTS game like Age of Empire. Elements will have the same size on the screen regardless of their distance from the camera.

### PerspectiveCamera  
The PerspectiveCamera is the one we already used and simulated a real-life camera with perspective.

We are going to focus on the OrthographicCamera and the PerspectiveCamera.

# PerspectiveCamera 
  
As we saw earlier, the PerspectiveCamera class needs some parameters to be instantiated, but we didn't use all the possible parameters. Add the third and fourth parameters:

```javascript
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100)
```

# Field of view  
The first parameter called field of view corresponds to your camera view's vertical amplitude angle in degrees. If you use a small angle, you'll end up with a long scope effect, and if you use a wide-angle, you'll end up with a fish eye effect because, in the end, what the camera sees will be stretched or squeezed to fit the canvas.

# Aspect ratio  
The second parameter is called aspect ratio and corresponds to the width divided by the height. While you might think that it's obviously the canvas width by the canvas height and Three.js should calculate it by itself, it's not always the case if you start using Three.js in very specific ways. But in our case, you can simply use the canvas width and the canvas height.

I recommend saving those values in an object because we are going to need them multiple times:
```javascript
const sizes = {
    width: 800,
    height: 600
}
```
# Near and far  
The third and fourth parameters called near and far, correspond to how close and how far the camera can see. Any object or part of the object closer to the camera than the near value or further away from the camera than the far value will not show up on the render.

You can see that like in those old racing games where you could see the trees pop up in the distance.

While you might be tempted to use very small and very large values like 0.0001 and 9999999 you might end up with a bug called z-fighting where two faces seem to fight for which one will be rendered above the other.

https://twitter.com/FreyaHolmer/status/799602767081848832

https://twitter.com/Snapman_I_Am/status/800567120765616128

Try to use reasonable values and increase those only if you need it. In our case, we can use 0.1 and 100.



