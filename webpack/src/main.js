import count from "./js/count";
import sum from "./js/sum"
// 要想打包资源必须引入资源
import './css/index.css'
import './less/index.less'
import './sass/index.sass'
import './sass/index.scss'
import './stylus/index.styl'


let result = count(2,1)
console.log(result);
console.log(sum(1,2,3,4,23));
console.log('hello world')