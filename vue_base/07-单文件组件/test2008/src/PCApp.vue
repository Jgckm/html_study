<template>
  <el-container style="height: 100%;">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="[]">
      <el-submenu :index="data.id+''" v-for="data in sideList" :key="data.id">
        <template slot="title"><i class="el-icon-message"></i>{{data.title}}</template>
        <el-menu-item-group v-for="item in data.chilren" :key="item.id">
          <template slot="title">{{item.title}}</template>
          <el-menu-item :index="data.id +'-'+item.id">选项1</el-menu-item>
          <el-menu-item :index="data.id +'-'+item.id+1">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      sideList: [
        {
          id: 1,
          title: '用户管理',
          chilren: [
            {
              id: 2,
              title: '用户列表'
            },
            {
              id: 3,
              title: '用户权限'
            }
          ]
        },
        {
          id: 4,
          title: '权限管理',
          chilren: [
            {
              id: 5,
              title: '权限列表'
            },
            {
              id: 6,
              title: '角色列表'
            }
          ]
        }
      ],
      tableData: Array(20).fill(item)
    }
  },
  methods: {
    handlePrimary () {
      console.log('Primary')
    }
  }
}
</script>
<style>
html,body{
    height: 100%;
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
