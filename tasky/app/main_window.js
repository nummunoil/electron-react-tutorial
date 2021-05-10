const electron = require("electron");
const { BrowserWindow } = electron;

class mainWindow extends BrowserWindow {
  constructor(options) {
    super(options);
  }
}

module.exports = mainWindow;
