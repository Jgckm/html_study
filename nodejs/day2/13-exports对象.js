// console.log(exports);

// console.log(module.exports);

// console.log(module.exports === exports);  // true

exports.say = function () {
    console.log('Ho');
};

module.exports.user = 'name';

// 最终，向外共享的结果，永远是 module.erxports 所指向的对象
