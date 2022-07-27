// 定义一个 html 字符串还原
function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&amp;|&quot;/g, match => {
        switch (match) {
            case '&lt;':
                return '<';
            case '&gt;':
                return '>';

            case '&quot;':
                return '"';
            case '&amp;':
                return '&';
        }
    });
}

// 定义一个转义HTML字符串的函数
function htmlEscape(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, match => {
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case '&':
                return '&amp;';
        }
    });
}
module.exports = {
    htmlUnEscape,
    htmlEscape,
};
