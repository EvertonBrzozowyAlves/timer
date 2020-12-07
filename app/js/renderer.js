const { ipcRenderer } = require('electron')

let aboutLink = document.querySelector('#linkAbout')
aboutLink.addEventListener('click', () => ipcRenderer.send('openAboutWindow'))