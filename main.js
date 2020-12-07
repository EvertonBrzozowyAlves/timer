const { app, BrowserWindow, ipcMain } = require('electron')

app.on('ready', () => {
   console.log('Application started')
   let mainWindow = new BrowserWindow({
      width: 600,
      height: 400
   })
   // mainWindow.loadURL(`http://www.google.com`)
   mainWindow.loadURL(`file://${__dirname}/app/index.html`)
})

app.on(`window-all-closed`, () => app.quit())

let aboutWindow = null;
ipcMain.on('openAboutWindow', () => {
   if (mainWindow === null) {
      aboutWindow = new BrowserWindow({
         width: 300,
         height: 200
      })
      //avoid the object destruction by the garbage collector
      aboutWindow.on('closed', () => aboutWindow = null)
   }
   aboutWindow.loadURL(`file://${__dirname}/app/about.html`)
})
