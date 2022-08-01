## 前端学习笔记

> 个人学习笔记

* [PC端布局](https://github.com/jgckM/HTML_CSS/tree/main/PC%E7%AB%AF%E5%B8%83%E5%B1%80)
* [移动端布局](https://github.com/jgckM/HTML_CSS/tree/main/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B8%83%E5%B1%80)
* [nodejs](https://github.com/jgckM/HTML_CSS/tree/main/nodejs)
* [vue](https://github.com/jgckM/HTML_CSS/tree/main/vue_base)
* [vue-cli](https://github.com/jgckM/html_study/tree/main/vue_base/07-%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6/test2008)


## 总结
### 什么是vue生命周期和生命周期钩子函数？

**`beforecreated`**：在实例初始化之后，el 和 data 并未初始化
（这个时期，this变量还不能使用，在data下的数据，和methods下的方法，watcher中的事件都不能获得到）

**`created`**:完成了 data 数据的初始化，el没有
（这个时候可以操作vue实例中的数据和各种方法，但是还不能对"dom"节点进行操作）

**`beforeMount`**：完成了 el 和 data 初始化 //这里的el是虚拟的dom；

**`mounted`** ：完成挂载，在这发起后端请求，拿回数据，配合路由钩子做一些事情
（挂载完毕，这时dom节点被渲染到文档内，一些需要dom的操作在此时才能正常进行）

**`beforeUpdate`**：是指view层数据变化前，不是data中的数据改变前触发；

**`update`**：是指view层的数据变化之后，

**`beforeDestory`**： 你确认删除XX吗？

**`destoryed`** ：当前组件已被删除，清空相关内容

 - A、什么是vue生命周期？  
> Vue 实例从创建到销毁的过程，就是生命周期。也就是从`开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等`一系列过程。
 - B、vue生命周期的作用是什么？  
>它的生命周期有多个事件钩子,让我们在控制整个Vue实例的过程时更容易形成好的逻辑。
- C、vue生命周期总共有几个阶段？
>它可以总共分为8个阶段：`创建前/后, 载入前/后,更新前/后,销毁前/销毁后`
- D、第一次页面加载会触发哪几个钩子？
>第一次页面加载时会触发 **`beforeCreate`**, **`created`**, **`beforeMount`**, **`mounted`** 这几个钩子
- E、DOM 渲染在 哪个周期中就已经完成？
DOM 渲染在 **`mounted`** 中就已经完成了。
- F、简单描述每个周期具体适合哪些场景？
生命周期钩子的一些使用方法： **`beforecreate`** : 可以在这加个loading事件，
在加载实例时触发 **`created`** : 初始化完成时的事件写在这里，如在这**结束loading事件**，
**异步请求**也适宜在这里调用 **`mounted`** : 挂载元素，获取到DOM节点 **`updated`** : 如果对数据统一处理，