const blendprofiles = {
    init: function() {
        // Function to replace placeholders with actual values
        function replacePlaceholders(blendui) {
            var regex = /\${{([^}]+)}}/g;
            var matches = blendui.innerHTML.match(regex); // Match placeholders within the blendui div

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

        // Function to initialize blendprofiles
        function initialize() {
            var blendElements = document.querySelectorAll('.blendui'); // Select all elements with class 'blendui'
            blendElements.forEach(function(blendui) {
                replacePlaceholders(blendui);
            });
        }

        // Function to set favicon
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

        // Call initialize function to replace placeholders for all blendui elements
        initialize();
        
        // Set document title and favicon
        document.title = blendprofiles.config.title;
        setFavicon(blendprofiles.config.favicon);
    }
};
