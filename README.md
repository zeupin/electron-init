# electron-init

初始化一个 Electron 项目的基本框架。

## 目录结构

```
your-app-name/        // 你的APP路径。目录名建议为小写字母
├─src/                // 源码目录
│  └─locales/             // 本地化文件
├─3rd/                // 第三方的库
├─build/              // build目录
├─dist/               // 正式发布的版本
├─mock/               // 演示数据
└─test/               // 测试目录
```

## package.json

> 注意：为方便说明，在字段后加了注释。在正式使用时，package.json 里不可有注释语句，所有注释要先全部删除。

```json
{
  "name": "your-app-name", // 标准名称。按照规范，这个字段应该是全小写字母、数字、减号，不要用大写字母。如果没有指定productName，则会用此名称作为产品名称。
  "productName": "YourAppName", // 产品正式名称，首字母大写，Electron会优先使用此名称作为产品名。
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
  "license": "MIT",
  "copyright": "(c)2018-2019, Your Company Name",
  "bugs": {
    "url": "https://github.com/zeupin/electron-init/issues"
  },
  "homepage": "https://github.com/zeupin/electron-init#readme",
  "devDependencies": {
    "electron": "^4.1.4"
  }
}
```
