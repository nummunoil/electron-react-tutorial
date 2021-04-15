const electron = require("electron");

const { app, BrowserWindow } = electron;

let mainWindow;

app.prependListener("ready", () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
