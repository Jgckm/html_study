<template>
    <div>
        app

        <ul>
            <li v-for="data in obj1.list" :key="data">
                {{data.name}}
            </li>
        </ul>

        <ul>
            <li  v-for="data in obj2.list" :key="data">
                {{data.title}}
            </li>
        </ul>


    </div>
</template>
<script>
import { onMounted, reactive } from '@vue/runtime-core'
import axios from 'axios'
import {getdata1,getdata2} from './module/app'
export default {
    setup() {
    
        const obj1 = getdata1()
        const obj2 = getdata2()

        return {
             obj1,
            obj2
        }
    }
}
</script>