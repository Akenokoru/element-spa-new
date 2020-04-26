<template>
  <aside class="aside">
    <el-menu unique-opened :default-active="thisRoute.path" class="el-menu-vertical-demo" :collapse="isCollapse" router>
      <template v-for="(item, index) in routers">
        <el-submenu v-if="item.children" :key="index" :index="item.path">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <template v-for="subItem in item.children">
            <el-menu-item v-if="!subItem.meta.notMenu" :index="subItem.path" :key="subItem.path">
              {{ subItem.meta.title }}
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else-if="!item.meta.notMenu" :index="item.path" :key="index">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>

<script>
import { routerMap } from '@/router/routerMap'

export default {
  props: {
    isCollapse: {
      type: Boolean,
      require: false,
      default: false
    }
  },

  data: () => ({
    routers: routerMap[0].children
  }),

  computed: {
    thisRoute() {
      return this.$route
    }
  }
}
</script>

<style lang="less">
.aside{
  height: 100%;
  overflow-y: scroll;
  .el-menu{
    height: 100%;
    .iconfont{
      vertical-align: middle;
      margin-right: 8px;
      width: 24px;
      text-align: center;
      font-size: 17px;
    }
  }
}
</style>
