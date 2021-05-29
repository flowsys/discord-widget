"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    electron_1.app.quit();
}
var createWindow = function () {
    // Create the browser window.
    var mainWindow = new electron_1.BrowserWindow({
        height: 400,
        width: 200,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        acceptFirstMouse: true
    });
    var ignoreMouseEvents = true;
    mainWindow.setIgnoreMouseEvents(ignoreMouseEvents);
    // and load the index.html of the app.
    // mainWindow.loadFile('./index.html');
    // p
    mainWindow.loadURL("https://streamkit.discord.com/overlay/voice/847905733684101135/847963776427098133?icon=true&online=true&logo=white&text_color=%23ffffff&text_size=14&text_outline_color=%23000000&text_outline_size=0&text_shadow_color=%23000000&text_shadow_size=0&bg_color=%231e2124&bg_opacity=0.95&bg_shadow_color=%23000000&bg_shadow_size=0&invite_code=&limit_speaking=true&small_avatars=false&hide_names=false&fade_chat=0");
    electron_1.globalShortcut.register('Alt+CommandOrControl+7', function () {
        ignoreMouseEvents = !ignoreMouseEvents;
        mainWindow.setIgnoreMouseEvents(ignoreMouseEvents);
    });
    // mainWindow.setBackgroundColor('transparent')
    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
//# sourceMappingURL=index.js.map