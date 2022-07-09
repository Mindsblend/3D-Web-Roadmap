# Introduction
  
The way we loaded Three.js in the previous lesson is the easiest. Unfortunately, it has some limitations. It doesn't include some of the Three.js classes because the file would be too heavy. But we need a way to load those hidden classes. We are also going to need to run a server to load and manipulate images. To do that and because of security reasons, we need to run a local server.

There are many ways of handling those issues, but the simplest is to use a bundler.

# What is a bundler
  
A bundler is a tool in which you send assets like JavaScript, CSS, HTML, images, TypeScript, Stylus, and other languages. The bundler will handle those assets, apply potential modifications, and output a "bundle" composed of web friendly files like HTML, CSS, images, JavaScript

You can see that like a pipe in which you send non-web-friendly assets and, at the end of the tube, you get web-friendly assets.

Bundler can do even more. You can use a bundler to create a local server, manage dependencies, improve compatibility, support modules, optimize images, deploy on a server, minify the code, etc.

# Webpack
  
Webpack is currently the most popular bundler. It can handle most of your needs and provide extensive documentation and a constructive community.

Unfortunately, Webpack is quite challenging to configure. Don't worry; I'll provide you a simple template, and I'll explain what it does and how to use it.

Each following lesson will start with a zip file that you'll have to download and unzip. Then you'll have to launch the commands that I'll show you to run the project.

While you might see this as a limitation, Webpack is so popular and useful that it's a must for web developers. And if you didn't know about Webpack, that's the perfect occasion to learn a new tool.

# How to use the template
  
Download Node.js (any modern "LTS" version will do) and install it on your computer with default settings.
Download and unzip the starter zip file (right below the player). If you are on macOS or Linux, open the Terminal. If you are on Windows, then use the Command Prompt (or CMD). If you are using Visual Studio Code, I recommend you to use the integrated terminal. Press CMD + J (on Mac) or CTRL + J (on Windows) to open the integrated terminal. If you do so, the following commands will be the same regardless of your OS.
In your terminal, navigate to the template you've just unzip. You can use cd followed by the name of the folder to go in it. You can also use cd (with a space at the end), and drag and drop the folder. You can test where you are with pwd and list the files in the current folder with ls.
Now that you are in the project folder, use the command npm install to install dependencies (like Three.js) using NPM. NPM is the a dependencies manager installed with Node.js.
Once you've completed the install, use the command npm run dev to launch the local server. Your browser should open on an URL looking like http://192.168.1.1:8080 with the 192.168.1.1 part being your local IP and 8080 being the port. Both might be different for you according to various factors like your network or the available ports on your computer. The following URL should also show up in the terminal http://localhost:8080. It's an alternative that should have the same result.
Except for the first step when we installed Node.js, these are the instructions we'll have to follow for each lesson.

# Troubleshooting
  
If you are on Mac and you see an error message related to Xcode, you can just ignore it. But if you really want to get rid of that message, you can follow this article, but if you don't want to follow the whole article, just run xcode-select --install from your terminal and follow the instructions. That should fix the problem.

If you get an error or the website doesn't open on your browser, check those points:

- Check for errors in the terminal and try to find critical information in the messages. Some errors, such as Xcode's ones, aren't essential, and the project should be running fine.
- Verify if you are in the right folder from your terminal with pwd
- Ensure that all those files and folders are present in the project folder: bundler/, package-lock.json, package.json, readme.md, src/, static/ (if not, re-download the starter)
- Make sure you have installed a recent version of Node.js
- Make sure you're on any network (wifi or ethernet)
- Try to open the following URL instead of the one with the IP: http://localhost:8080
- If you can't find the problem, go to the course's Discord server and share any information you have.

# More about the Webpack template
  
There are a few things you need to know about the Webpack template before we continue:

* You need to run npm install only once.
* You have to do npm run dev each time you want to run the server and start coding. Your terminal might seem stuck, but it's perfectly normal, and it means that the server is running.
* Press CTRL + C to stop the server. You might need to press the shortcut multiple times on Windows or confirm with the letter o.
* If you want to build your website to deploy it online, you can run npm run build. The final files will appear in the /dist/ folder.
* You can find the index.html file in the /src/ folder (you don't need to add the <script> manually. Webpack will add it automatically).
* The script.js file is also in the /src/ folder.
* You can load the style.css file from the script.js file. It might seem strange, but that's how modules in Webpack work.
* Making a syntax mistake will usually result in an error visible directly on the page with the concerned line.
* The page will automatically refresh as you save any of those files.
* You can put "static files" in the static/ folder. Those files will be accessible by typing the URL of the local server, followed by the path to the file (starting from the static/ folder). We'll use this to load textures and models laters.
* The only folders you need to go into are the src/ and the static/ folders.
* You can access your local server from any other device on the same network by typing the same URL that opened in your browser (which is very useful if you want to debug on mobile).
* If you make a mistake and the page reloads as a white page, you might need to refresh the page manually once you fixed the error
