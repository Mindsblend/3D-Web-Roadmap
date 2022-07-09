# Introduction 
If you are here, you probably already know what Three.js is but let's talk about it and see why we need this library. <br />
Three.js is a 3D JavaScript library that enables developers to create 3D experiences for the web. It works with WebGL, but you can make it work with SVG <br /> and CSS as well. Those two are quite limited, and we won't cover them in this course.

# Showcase 
Here's a preview of what you can achieve with Three.js: <br />
<br />
https://bruno-simon.com <br />
https://go.pioneer.com/cornrevolution <br />
https://richardmattka.com <br />
https://lusion.co <br />
https://www.oculus.com/medal-of-honor/ <br />
http://letsplay.ouigo.com <br />
https://zen.ly <br />
https://prior.co.jp/discover <br />
https://www.midwam.com <br />
https://heraclosgame.com <br />
https://chartogne-taillet.com <br />
https://live.vanmoof.com/site <br />
Before going further, we need to know what WebGL is exactly.

# What is WebGL? 
WebGL is a JavaScript API that renders triangles in a canvas at a remarkable speed. It's compatible with most modern browsers, and it's fast because it <br /> uses the Graphic Processing Unit (GPU) of the visitor. <br />
WebGL can draw more than triangles and can also be used to create 2D experiences, but we will focus on 3D experiences using triangles for the course's sake.<br />
The GPU can do thousands of parallel calculations. Imagine that you want to render a 3D model and this model is constituted of 1000 triangles—which, come <br /> to think about it, is not that many. Each triangle includes 3 points. When we want to render our model, the GPU will have to calculate the position <br /> of these 3000 points. Because the GPU can do parallel calculations, it will handle all the triangles points in one raw. <br />
Once the model's points are well placed, the GPU needs to draw each visible pixel of those triangles. Yet again, the GPU will handle the thousands and thousands of pixels calculations in one go.
The instructions to place the points and draw the pixels are written in what we call shaders. And let me tell you, shaders are hard to master. We also need to provide data to these shaders. For example: how to place the points according to the model transformations and the camera's properties. These are called matrices. We also need to provide data to help colorize the pixels. If there is a light and the triangle is facing that light, it should be brighter than if the triangle isn't.
And this is why native WebGL is so hard. Drawing a single triangle on the canvas would take at least 100 lines of code. Good luck if you want to add perspective, lights, models, and animate everything in that case.
But native WebGL benefits from existing at a low level, very close to the GPU. This enables excellent optimizations and more control.

# Three.js to the rescue 
Three.js is a JavaScript library under MIT license that works right above WebGL. The library's goal is to drastically simplify the process of handling all of what we just stated. You'll have an animated 3D scene in just a few code lines, and you won't have to provide shaders and matrices.
Because Three.js is right above WebGL, we can still interact with it in some ways. At some point, we will get to writing shaders and create matrices.
Ricardo Cabello, aka Mr.doob (Website, Twitter), is the developer who created Three.js. He is still working on it, but now he's helped by a large community. You can check the list of contributors here: https://github.com/mrdoob/three.js/graphs/contributors
Currently, the library gets an update every month and you can see what's changed in the releases page here: https://github.com/mrdoob/three.js/releases
You can discover many exceptional projects using Three.js on the website's homepage: https://threejs.org/
There is also some well-maintained documentation that we will use a lot: https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
And you can find hundreds of examples with public code here: https://threejs.org/examples/#webgl_tonemapping

If you want to follow updates and discover exceptional projects, I advise you to follow the Mr.doob and Three.js twitter accounts:

https://twitter.com/mrdoob
https://twitter.com/threejs

# What about other libraries? 
Three.js is the most popular WebGL library for good reasons that we already covered. It's very stable, it provides many features, the documentation is remarkable, the community is working hard on updates, and it's still close enough to native WebGL.
That's why it's probably better to learn Three.js.
But there are many other libraries, and some of them are amazing as well. Be curious, try them out, and experience their strength for yourself. You might even learn things that will be useful for your Three.js projects.
