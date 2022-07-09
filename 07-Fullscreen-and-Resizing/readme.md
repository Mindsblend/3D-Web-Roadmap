# Introduction
  
Our canvas currently has a fixed resolution of 800x600. You don't necessarily need your WebGL to fit the whole screen, but if you want an immersive experience, it might be better.

First, we would like to have the canvas take all available space. Then, we need to make sure that it still fits if the user resizes their window. Finally, we need to give the user a way to experiment with the experience in fullscreen.

# Setup
  
The starter contains what we finished within the previous lesson. We have our cube in the center, and we can drag and drop to move the camera.

# Fit in the viewport
  
To make the canvas fit perfectly in the viewport, instead of using fixed numbers in the sizes variable, use the window.innerWidth and window.innerHeight:
```javascript
// ...

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// ...
```
You can see that the canvas now has the width and height of the viewport. Unfortunately, there is a white margin and a scroll bar (try to scroll if you don't see any scrollbar).

The problem is that browsers all have default stylings like more significant titles, underlined links, space between paragraphs, and paddings on the page. There are many ways of fixing that, and it might depend on the rest of your website. If you have other content, try not to break any of those while doing this.

We will keep things simple and fix the position of the canvas using CSS.

Our template is already linked to a CSS file in src/style.css. It might look strange if you are not used to Webpack, but the CSS file is directly imported from script.js on the first line:

```javascript
import './style.css'
```
You can write standard CSS just like you're used to, and the page will automatically reload.

A good thing to do first would be to remove any type of margin or padding on all elements by using a wildcard *:

```css
*
{
    margin: 0;
    padding: 0;
}
```
Then, we can fix the canvas on the top left using its webgl class to select it:
```css
.webgl
{
    position: fixed;
    top: 0;
    left: 0;
}
```
You don't need to specify width or height on the canvas because Three.js is already taking care of that when you call the renderer.setSize(...) method.

This is a good opportunity to fix a small problem on our canvas. Maybe you've noticed a blue outline on it when drag and dropping. This mostly happens on latest versions of Chrome. To fix that, we can simply add an outline: none; on the .webgl:

```css
.webgl
{
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
}
```
If you want to remove any type of scrolling even on touch screens, you can add an overflow: hidden on both html and body:
```css
html,
body
{
    overflow: hidden;
}
```
