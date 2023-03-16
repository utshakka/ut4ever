// This wrapping stuff is called an IIFE, just makes it run immediately
(() => {
    // Set some variables
    window._ut4everTestVariable = 'Some variable content';
    // Update the DOM with the variable. You could use whatever selector you want to get the DOM element(s) (e.g. getElementsByClassName)
    document.getElementById('variableContent').innerHTML = window._ut4everTestVariable;
})();