const { app, BrowserWindow } = require('electron');
const path = require('path');

async function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false
        }
    });

    try {
        const isDev = await import('electron-is-dev');

        if (isDev.default) {
            win.loadURL('http://localhost:3000');
        } else {
            win.loadFile(path.join(__dirname, 'build', 'index.html'));
        }
    } catch (error) {
        console.error('Error loading electron-is-dev:', error);
        // Handle error loading module
    }
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});