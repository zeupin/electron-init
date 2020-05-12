# electron-init

初始化一个 Electron 项目的基本框架。

## 使用方法

```bash
git clone --depth=1 https://github.com/zeupin/electron-init.git 你的项目目录名
```

## 目录结构

```
your-app-name/        // 你的app路径
├── LICENSE
├── README.md
├── app               // app目录
│   ├── app.js            // app入口文件
│   ├── main/         // 主进程的相关代码
│   └── pages/        // 页面目录(renderer进程)
│       └── init/         // 页面init
│           ├── init.html
│           └── init.css
│   └── locales/
├── build/            // build目录
├── dist/             // 正式发布的版本
├── mock/             // 演示数据
├── tests/            // 测试目录
├── package.json      // package.json
└── yarn.lock         // yarn.lock
```

## package.json

```jsonc
{
  "name": "your-app-name",  // 必须为全小写字母
  "productName": "YourAppName",
  "version": "0.0.0",
  "description": "Desciption of your app.",
  "main": "src/main.js",
  "scripts": {
    "start": "electron .",
    "ep": "electron-packager . appname --overwrite --out ./build/ --ignore=\"(test|dist|mock|.gitignore|LICENSE|README.md)\"",
    "ep:win": "electron-packager . appname --overwrite --out ./build/ --platform win32 --ignore=\"(test|dist|mock|.gitignore|LICENSE|README.md)\"",
    "ep:win32": "electron-packager . appname --overwrite --out ./build/ --platform win32 --arch ia32 --ignore=\"(test|dist|mock|.gitignore|LICENSE|README.md)\"",
    "ep:win64": "electron-packager . appname --overwrite --out ./build/ --platform win32 --arch x64 --ignore=\"(test|dist|mock|.gitignore|LICENSE|README.md)\"",
    "ep:winall": "electron-packager . appname --overwrite --out ./build/ --platform win32 --arch all --ignore=\"(test|dist|mock|.gitignore|LICENSE|README.md)\"",
    "ep:mac": "electron-packager . appname --overwrite --out ./build/ --platform darwin --ignore=\"(test|dist|mock|.gitignore|LICENSE|README.md)\"",
    "ep:mas": "electron-packager . appname --overwrite --out ./build/ --platform mas --ignore=\"(test|dist|mock|.gitignore|LICENSE|README.md)\"",
    "ep:linux32": "electron-packager . appname --overwrite --out ./build/ --platform linux --arch ia32 --ignore=\"(test|dist|mock|.gitignore|LICENSE|README.md)\"",
    "ep:linux64": "electron-packager . appname --overwrite --out ./build/ --platform linux --arch x64 --ignore=\"(test|dist|mock|.gitignore|LICENSE|README.md)\"",
    "ep:all": "electron-packager . appname --overwrite --out ./build/ --all"
  },
  "keywords": ["electron", "boilerplate"],
  "author": "Your Name <foo@bar.com>",
  "license": "UNLICENSED",  // 见下面对常用字段的注释
  "private": true,  // 见下面对常用字段的注释
  "copyright": "(c)2018-2019, Your Company Name",
  "bugs": {
    "url": "https://github.com/zeupin/electron-init/issues"
  },
  "homepage": "https://github.com/zeupin/electron-init#readme",
  "devDependencies": {
    "electron": "^8.2.5",
    "electron-packager": "^14.2.1",
    "prettier": "^2.0.5"
  }
}
```

常用字段解释如下：

- `name` 包名，必填。按照规范，这个字段应该是全小写字母、数字、减号，**不要含有大写字母**，不要以`.`或者`_`开头，详见 npm 规范。如果没有指定 productName，则会用此名称作为产品名称。
- `version` 版本号，必填。
- `productName` 产品正式名称，首字母大写，Electron 会优先使用此名称作为产品名。
- `scripts` 其中的"ep"是指用 `electron-packager` 打包。
- `license` 许可证名称。常用的有 `MIT`, `GPL-2.0`。如果你不希望授权别人以任何形式使用私有包或未发布的包就填 `UNLICENSED`。
- `author` 可为字符串形式 `"Your Name <your-email@foo.com> (http://your.homepage.com/)"`，也可用对象形式 `{"name":"...", "email":"...", "url":"..."}`。
- `contributors` 贡献者列表。数组形式，其它同`author`。

如果想声明此包不是开源软件，可以设置：

```json
{
  "license": "UNLICENSED",
  "private": true
}
```
