# Blendium
Quickly add dynamic content to your website, on load.
Blendium is a JavaScript library designed for front-end applications, offering an alternative approach to building user interfaces without pesky JSX like react. Blendium aims to provide a clean and efficient solution to dynamic content change without putting stress on the browser or having to have like 450 packages to import on a Node JS server with JSX.

## Getting Started
### Installation
To use Blendium in your project, simply import the `blend.js` file. You can download the file and include it in your project or use it via a package manager:
```html
<script src="//raw.githubusercontent.com/0x32-l3git/blendium/main/blend.js"></script>
```
### Usage
To leverage Blendium, you need to define a configuration object (`blendprofiles`) and initialize Blendium using the `init` function. Below is a basic example:
```js
blendprofiles.config = {
        title: "My App",
        favicon: "path/to/favicon.ico",
        // Add other configuration options as needed
}
blendprofile.init()
```
