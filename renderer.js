// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
window.addEventListener('DOMContentLoaded', () => {
    let version = window.location.hash.substring(1);
    document.getElementById('version').innerText = version;
    
    // Listen for messages
    const {ipcRenderer} = require('electron');
    console.log(123);
    
    ipcRenderer.on('message', function(event, text) {
        var container = document.getElementById('messages');
        var message = document.createElement('div');
        message.innerHTML = text;
        container.appendChild(message);
    })
});