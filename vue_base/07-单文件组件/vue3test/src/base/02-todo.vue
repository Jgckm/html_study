<template>
    <div>
        todo--{{myname}}
        <input type="text" v-model="obj.mytext" />
        <button @click="handleAdd">Add</button>

        <ul>
            <li v-for="data in obj2.datalist" :key="data">
                {{ data }}
            </li>
        </ul>
        <ul>
            <li v-for="data in mylist" :key="data">
                {{ data }}
            </li>
        </ul>
    </div>
</template>
<script>
import { reactive } from "vue";
export default {
    data() {
        return {
            myname: "bu",
        };
    },
    beforeCreate() {
        console.log('beforCreated');
    },
    // reactive只能包含对象 
    setup() {
        const obj = reactive({
            mytext: "",
        });

        const obj2 = reactive({
            datalist: [],
        })
        const mylist = reactive([])
        const handleAdd = () => {
            // console.log(obj.mytext);
            obj2.datalist.push(obj.mytext);
            mylist.push(obj.mytext);
            obj.mytext = "";
        };

        return {
            obj,
            obj2,
            mylist,
            handleAdd,
        };
    },
};
</script>