window.onload = function () {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码正则表达式
    var regqq = /^[1-9]\d{4,}$/; // QQ
    var regname = /^[\u4e00-\u9fa5]{2,8}$/; // 昵称
    var regmsg = /^\w{6}$/; //  验证码
    var regpwd = /^[a-zA-Z0-9-_]{6,16}$/;
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel); // 手机号
    regexp(qq, regqq); // qq
    regexp(nc, regname); // 昵称
    regexp(msg, regmsg); // 验证码
    regexp(pwd, regpwd); //密码

    function regexp(ele, reg) {
        ele.addEventListener('blur', function () {
            if (reg.test(this.value)) {
                // console.log('正确');  nextElementSibling 下一个兄弟
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
            } else {
                // console.log('不正确');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML =
                    '<i class="error_icon"></i> 格式不正确，请从新输入 ';
            }
        });
    }
    surepwd.addEventListener('blur', function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码不正确 ';
        }
    });
};
