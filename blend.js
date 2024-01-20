const blendprofiles = {
    config: {},
    exec: function(){
        // Function to replace placeholders with actual values
        function replacePlaceholders() {
            var regex = /\${{([^}]+)}}/g;
            var blendui = document.getElementById('blendui'); // Select the div with id 'blendui'
            var matches = blendui.innerHTML.match(regex); // Match placeholders within the 'blendui' div

            if (matches) {
                matches.forEach(function(match) {
                    var placeholder = match.substring(3, match.length - 2);
                    var value = getValueFromPath(placeholder, blendprofiles.config);
                    blendui.innerHTML = blendui.innerHTML.replace(new RegExp(match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
                });
            }
        }

        // Function to get the value from nested objects using dot notation
        function getValueFromPath(path, obj) {
            var properties = path.split('.');
            var value = obj;

            for (var i = 0; i < properties.length; i++) {
                var prop = properties[i];
                value = value[prop.toLowerCase()]; // Convert property to lowercase for case insensitivity
            }

            return value;
        }

        // Call the replacePlaceholders function to replace the placeholders
        replacePlaceholders();

        document.title = blendprofiles.config.title;
        function setFavicon(url) {
            const head = document.querySelector('head');

            // Remove existing favicon
            const existingFavicon = document.querySelector('link[rel="icon"]');
            if (existingFavicon) {
                head.removeChild(existingFavicon);
            }

            // Create new favicon link element
            const newFavicon = document.createElement('link');
            newFavicon.rel = 'icon';
            newFavicon.href = url;

            // Append the new favicon to the head
            head.appendChild(newFavicon);
        }
        setFavicon(blendprofiles.config.favicon);
    },
    init: function(){
        setTimeout(blendprofiles.exec,10)
    }
};
