// 在一个自定义模块 默认情况， modlue.exports = {}

module.exports.username = 'ss';

module.exports.sayHolle = function () {
    console.log('Hollo!');
};

// 让 module.exports 指向一个全新的对象
module.exports = {
    username: '李四',
    sayHI() {
        console.log('Hi!');
    },
};
