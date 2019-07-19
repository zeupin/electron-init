const {app, Menu, BrowserWindow, ipcMain} = require('electron');

let win;

/**
 * app.on.ready
 */
app.on('ready', () => {
  // 创建浏览器窗口并设置宽高
  win = new BrowserWindow({
    width: 400,
    height: 300,
    maximizable: false,
    minimizable: false,
    autoHideMenuBar: true,
  });

  // 加载index页面
  win.loadFile('src/pages/init/index.html');

  // 添加window关闭触发事件
  win.on('closed', () => {
    win = null; // 取消引用
  });
});

/**
 * app.on.window-all-closed
 * 当所有的窗⼝口都被关闭时触发。
 */
app.on('window-all-closed', () => {
  app.quit();
});

/**
 * app.on.quit
 * 在应⽤用程序退出时触发。
 */
app.on('quit', () => {});
