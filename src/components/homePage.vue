<template>
  <div id="components-layout-demo-custom-trigger" ref="homePage">
    <v-layout style="heigth:100%">
      <v-sider collapsible :collapsed="customCollapsed" :trigger="false" :collapsed-width="64">
        <div class="logo"></div>
        <v-menu theme="dark" mode="inline" :data="menuData">
          <template slot-scope="{data}">
            <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
            <router-link :to="{name: data.path}">{{data.name}}</router-link>
          </template>
        </v-menu>
      </v-sider>
      <v-layout>
        <v-header :style="{ background: '#fff', padding: 0 }">
          <v-icon class="trigger" :type="this.customCollapsed ? 'menu-unfold' : 'menu-fold'" @click.native="toggle">
          </v-icon>
        </v-header>
        <v-content :style="{ padding: '0 50px' }">
          <v-breadcrumb :style="{ margin: '12px 0' }">
            <v-breadcrumb-item href="">
                <router-link :to="{name:'homePage'}">Home</router-link>
            </v-breadcrumb-item>
            <v-breadcrumb-item href="">
                <router-link :to="{name:paths.path}">{{paths.name}}</router-link>
            </v-breadcrumb-item>
          </v-breadcrumb>
          <div style="padding: 24px; background: #fff; min-height: 80%;">
              <router-view></router-view>
          </div>
        </v-content>
        <v-footer :style="{ textAlign: 'center' }">
          Ant Design ©2016 Created by Ant UED
        </v-footer>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
export default {
  watch: {
    menuData: {
      handler: function (val, oldval) {
        this.menuDataFilter(val)
      },
      deep: true
    }
  },
  data () {
    return {
      paths: {},
      customCollapsed: false,
      menuData: [{
        name: 'User',
        icon: 'user',
        children: [{
          name: 'Tome',
          path: 'type'
        }, {
          name: 'Bill',
          path: 'type'
        }, {
          name: 'Alex',
          path: 'type'
        }]
      },
      {
        name: 'Team',
        icon: 'team',
        children: [{
          name: 'Team1',
          path: 'index'
        }, {
          name: 'Team2',
          path: 'type'
        }]
      },
      {
        name: 'Team2',
        path: 'type'
      }
      ]
    }
  },
  methods: {
    menuDataFilter (param) {
      param.map((item, data, data1) => {
        if (item.selected) {
          this.paths = item
          return
        }
        if (item.children && item.expand) {
          this.menuDataFilter(item.children)
        }
      })
    },
    toggle () {
      this.customCollapsed = !this.customCollapsed
    }
  }
}

</script>

<style>
    .ant-layout-has-sider {
        height: 100%;
    }
  #components-layout-demo-custom-trigger {
      height: 100%;
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 16px;
    cursor: pointer;
    transition: color .3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #108ee9;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: #333;
    border-radius: 6px;
    margin: 16px;
  }

  #components-layout-demo-custom-trigger .ant-layout-sider-collapsed .anticon {
    font-size: 16px;
  }

  #components-layout-demo-custom-trigger .ant-layout-sider-collapsed .nav-text {
    display: none;
  }

</style>
