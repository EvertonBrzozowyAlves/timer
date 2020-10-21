const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
   console.log('Application started')
   let mainWindow = new BrowserWindow({
      width: 600,
      height: 400
   })
   mainWindow.loadURL('https://www.google.com.br')
})