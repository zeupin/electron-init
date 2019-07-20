const {app, Menu, BrowserWindow, ipcMain} = require('electron');

let win;

/**
 * 载入init页面，执行初始化代码
 */
function init() {
  // 创建浏览器窗口并设置宽高
  win = new BrowserWindow({
    width: 400,
    height: 300,
    maximizable: false,
    minimizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      // 不加这个，打开的页面将无法使用node.js。
      // 例如在使用require语句时，会报错"require() is not defined"。
      nodeIntegration: true,
    },
  });

  // 打开调试工具
  win.webContents.openDevTools();

  // 加载init页面
  win.loadFile(`${__dirname}/pages/init/index.html`);

  // 处理closed事件
  win.on('closed', () => {
    win = null; // 取消引用
  });
}

/**
 * app.on.ready
 */
app.on('ready', () => {
  init();
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
