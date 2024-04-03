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
        text: "Hello world!",
        title: 'MyApp',
        favicon: "path/to/favicon.ico",
}
document.addEventListener('DOMContentLoaded', function() {
        blendprofiles.init();
    });
```

### Dynamic Content Replacement
Blendium provides a dynamic content replacement feature, allowing you to replace placeholders in your HTML with actual values from the configuration object. Placeholders should be defined using the `${{placeholder}}` syntax. For example:

```html
<div id="blendui">
    <h1>${{text}}</h1>
    <h1>${{title}}</h1>
    <img src="${{config.logo}}" alt="Logo">
    <!-- Add other placeholders as needed -->
</div>
```
When Blendium initializes, it will replace these placeholders with the corresponding values from the configuration.

### Dynamic Title and Favicon
Blendium automatically handles dynamic title and favicon changes based on your configuration. Simply update the `config.title` and `config.favicon` properties, and Blendium will reflect these changes in the document title and favicon, respectively.
```js
blendprofiles.config.title = "New Title";
blendprofiles.config.favicon = "path/to/new-favicon.ico";
blendprofiles.init(); // ReInit to apply changes
```

### Examples
Check out a simple example using Blendium in your HTML:

index.html:
```html
<div id="blendui">
    <section>
    <div class="right-align big">
        <h1>${{title}}</h1>
        <p>${{foo}}</p>
        <p>${{about}}</p>
    </div>
    </section>
</div>

<!-- JavaScript Scripts -->
<script src="app.js"></script><script src="blend.js"></script>
```

app.js:
```js

function init(){
    blendprofiles.config = {
        foo: "We are a well known cobalt miner company well known for cobalt ;) 🔋",
        title: 'Cobalt mine LTD',
        about: "Lorem ipsum"
}
document.addEventListener('DOMContentLoaded', function() {
        blendprofiles.init();
    });
```

## Contributions
Feel free to contribute to Blendium by reporting issues or submitting pull requests on the GitHub repository. Your feedback and contributions are highly appreciated!

## License
Blendium is licensed under the MIT License. See the LICENSE file for details.
