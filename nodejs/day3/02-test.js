const jgck = require('../jgckM-tool');

const dt = jgck.dataFormat(new Date());
console.log(dt);

const htmlstr = '<h1 title="abc我我">我是字符串<span>你好我是span&nbsp;</span></h1>';
const str = jgck.htmlEscape(htmlstr);
console.log(str);

const str2 = jgck.htmlUnEscape(str);
console.log(str2);
