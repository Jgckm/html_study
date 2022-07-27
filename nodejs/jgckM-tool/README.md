## 安装

```
npm install jgck
```

## 导入

```js
cosnt jgck = require("jgck")
```

## 格式化时间

```js
// 调用 dataFormat 对时间进行格式化
const dt = jgck.dataFormat(new Date());
// 结果 2022-06-26 10:20:48
console.log(dt);
```

## 转义 HTML 中的特殊字符

```js
// 待转换的 HTML 字符串
const htmlstr = '<h1 title="abc我我">我是字符串<span>你好我是span&nbsp;</span></h1>';
// 调用 htmlEscape 方法对 HTML字符串进行转换
const str = jgck.htmlEscape(htmlstr);
// 结果 &lt;h1 title=&quot;abc我我&quot;&gt;我是字符串&lt;span&gt;你好我是span&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str);
```

## 还原 HTML 中的特殊字符

```js
// 带还原的 HTML 字符串
const str2 = jgck.htmlUnEscape(str);
// 输出的结果 <h1 title="abc我我">我是字符串<span>你好我是span&nbsp;</span></h1>
console.log(str2);
```

## 开源协议

ISC
