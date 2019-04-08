/**
 * prettier代码格式化配置
 * 配置文件 https://prettier.io/docs/en/configuration.html
 * 配置说明 https://prettier.io/docs/en/options.html
 */
module.exports = {
  // 最大行宽
  printWidth: 120,

  // tab
  useTabs: false,
  tabWidth: 2,

  // 单引号/双引号
  singleQuote: true,

  // 行结尾是否用分号
  semi: true,

  // 对象和数组结尾元素后的逗号
  trailingComma: 'es5',

  // 大括号内空格
  bracketSpacing: false,

  // 行结束符
  endOfLine: 'lf',

  // JSX
  jsxSingleQuote: false,
  jsxBracketSameLine: true,
};
