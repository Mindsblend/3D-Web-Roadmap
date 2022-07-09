# Introduction
  
An essential aspect of every creative project is making debugging easy and tweaking your code. The developer (you) and other actors working on the project (like designers or even the client) must be able to change as many parameters as possible.

You have to take this into account for them to find the perfect color, speed, quantity, etc. for the best experience. You might even get unexpected results that look great.

First, we need a debug UI.

While you can create your own debug UI using HTML / CSS / JS, there are already multiple libraries:

* dat.GUI
* control-panel
* ControlKit
* Uil
* Tweakpane
* Guify
* Oui
All of these can do what we want, but we will use the most popular one, which is dat.GUI. Feel free to try the other ones.

# Dat.GUI vulnerabilities  
Dat.GUI hasn't been updated for a long time and some vulnerabilities warnings might show up if we add the library to our project.

Fortunately, there is an alternative library named lil-gui that can be used as a "drop-in replacement for dat.gui". Meaning that we can use it the same way we would have use dat.gui.

The course has been mostly written and recorded with dat.gui and the texts, screenshots and videos will refer to dat.gui, but you should install and use lil-gui instead (which is what we are going to do right below).

The next lesson's starters files will be using lil-gui.

# Example 
  
You can find a pretty good example of debug UI on this portfolio. This UI only shows up when you add #debug to the URL.

https://bruno-simon.com/#debug

You can tweak the gravity, the colors, the speed, the elements position, etc.

While it took me a lot of time to create all those tweaks, the game would appear less balanced without it.

# Setup
  
In the starter, we have our cube, but the dependencies don't include Dat.GUI. We will add it and create some tweaks.

# How to implement Dat.GUI
  
To add Dat.GUI to our Webpack project, we can use the dependency manager provided with Node.js called NPM (just like we did for GSAP in a previous lesson).

In your terminal (while the server is not running or by using another terminal window on the same folder) run npm install --save lil-gui

As mentioned earlier, we are installing lil-gui instead of dat.gui, but we will refer to it as dat.gui in the rest of the course.

Dat.GUI is now available in the /node_modules/ folder and we can import it in our script.js. Don't forget to relaunch the server:
```javascript
import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'lil-gui'

// ...
```

You can now instantiate Dat.GUI:
```javascript
/**
 * Debug
 */
const gui = new dat.GUI()
```

This will result in an empty panel on the top right corner of the screen.

There are different types of elements you can add to that panel:

* Range —for numbers with minimum and maximum value
* Color —for colors with various formats
* Text —for simple texts
* Checkbox —for booleans (true or false)
* Select —for a choice from a list of values
* Button —to trigger functions
* Folder —to organize your panel if you have too many elements
Let's see some of those.

Add elements  
To add an element to the panel, you must use gui.add(...). The first parameter is an object and the second parameter is the property of that object you want to tweak. You need to set it after you created the concerned object:
```javascript
gui.add(mesh.position, 'y')
```
A range should appears in the panel. Try to change it and watch the cube moving accordingly.

To specify the minimum value, the maximum value and the precision, you can set them in the parameters:
```javascript
gui.add(mesh.position, 'y', - 3, 3, 0.01)
```
Or you can use the methods min(...), max(...) and step(...) by chaining directly after the add(...) method:

gui.add(mesh.position, 'y').min(- 3).max(3).step(0.01)
JavaScript
If you don't like having too many methods chained in one line, you can simply add line breaks:
```javascript
gui
    .add(mesh.position, 'y')
    .min(- 3)
    .max(3)
    .step(0.01)
```
To change the label, use the the name(...) method:
```javascript
gui
    .add(mesh.position, 'y')
    .min(- 3)
    .max(3)
    .step(0.01)
    .name('elevation')
```
