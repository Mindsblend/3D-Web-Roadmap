# Introduction 

We already know enough basics to create some content. For our first project, we will re-create what ilithya did with her cool portfolio https://www.ilithya.rocks/ and have a big 3D text in the middle of the scene with objects floating around.

This portfolio is an excellent example of what you can do quite early when learning Three.js. It simple, efficient, and it looks great.

Three.js already supports 3D text geometries with the TextGeometry class. The problem is that you must specify a font, and this font must be in a particular json format called typeface.

We won't talk about licenses, but you must have the right to use the font unless it's for personal usage.

# How to get a typeface font
  
There are many ways of getting fonts in that format. First, you can convert your font with converters like this one: https://gero3.github.io/facetype.js/. You have to provide a file and click on the convert button.

You can also find fonts in the Three.js examples located in the /node_modules/three/examples/fonts/ folder. You can take those fonts and put them in the /static/ folder, or you can import them directly in your JavaScript file because they are json and .json files are supported just like .js files in Webpack:
```javascript
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
```
We will mix those two techniques by opening the /node_modules/three/examples/fonts/, taking the helvetiker_regular.typeface.json and LICENSE files, and putting these in the /static/fonts/ folder (that you need to create).

The font is now accessible just by writing /fonts/helvetiker_regular.typeface.json at the end of the base URL.

# Load the font
  
To load the font, we must use a new loader class called FontLoader.

This class is not available in the THREE variable. We need to import it like we did with the OrbitControls class earlier in the course:

```javascript
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
```
This loader works like the TextureLoader. Add the following code after the textureLoader part (if you are using another font, don't forget to change the path):
```javascript
/**
 * Fonts
 */
const fontLoader = new FontLoader()

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) =>
    {
        console.log('loaded')
    }
)
```
You should get 'loaded' in you console. If not, check the previous steps and search for potential errors in the console.

We now have access to the font by using the font variable inside the function. Unlike the TextureLoader, we have to write the rest of our code inside that success function.

