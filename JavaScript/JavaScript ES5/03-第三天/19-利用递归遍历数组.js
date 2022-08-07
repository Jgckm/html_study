var data = [
    {
        id: 1,
        name: '家电',
        goods: [
            {
                id: 11,
                gname: '冰箱',
                goods: [
                    {
                        id: 111,
                        gname: '海尔',
                    },
                    {
                        id: 112,
                        gname: '美的',
                    },
                ],
            },
            {
                id: 12,
                gname: '洗衣机',
            },
        ],
    },
    {
        id: 2,
        name: '服饰',
    },
];
function getID(json, id) {
    var o = {};
    json.forEach(item => {
        // console.log(item); // 2个数组元素
        if (item.id === id) {
            // console.log(item);
            o = item;
            // 2.我们想要最里面的数据并且数组长度不为0
            // 里面有goods这个数组并且长度不为0
        } else if (item.goods && item.goods.length > 0) {
            o = getID(item.goods, id);
        }
    });
    return o;
}
// console.log(getID(data, 1));
// getID(data, 1);
getID(data, 111);
