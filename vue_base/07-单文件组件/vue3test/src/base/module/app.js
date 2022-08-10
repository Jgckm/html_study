import { onMounted, reactive } from "vue"
import axios from "axios"
function getdata1() {
    const obj1 = reactive({
        list: [],
    })
    onMounted(() => {
        axios.get('./data.json').then(res => {
            console.log(res.data.list);
            obj1.list = res.data.list
        })

    })
    return obj1
}

function getdata2() {
    const obj2 = reactive({
        list: []
    })
    onMounted(() => {
        axios.get('./data1.json').then(res => {
            console.log(res.data.list);
            obj2.list = res.data.list
        })
    })
    return obj2
}

export { getdata1, getdata2 }