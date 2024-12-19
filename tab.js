
// event listener for keyup
function checkTabPress(e) {
    "use strict";
    // pick passed event of global event object
    e = e || event;
    var activeElement;
    if (e.keyCode == 9) {
        // Here read the active selected link.
        activeElement = document.activeElement;
        // If HTML element is and anchor
        if (activeElement.tagName.toLowerCase() == 'a')
            // get it's hyperlink
            alert(activeElement.href);
    }
}

var body = document.querySelector('body');
body.addEventListener('keyup', checkTabPress);