<template>
  <div>
    <v-more-panel>
      <v-form slot="form">
        <v-form-item label="用户名">
          <v-input placeholder="请输入用户名"></v-input>
        </v-form-item>
        <v-form-item label="密码">
          <v-input type="password" placeholder="请输入密码"></v-input>
        </v-form-item>
        <v-form-item label="机构编码">
          <v-input placeholder="请输入机构编码"></v-input>
        </v-form-item>
        <v-form-item label="年龄">
          <v-input placeholder="请输入年龄"></v-input>
        </v-form-item>
        <v-form-item label="手机">
          <v-input placeholder="请输入手机号码"></v-input>
        </v-form-item>
      </v-form>
      <v-button slot="control" type="primary" html-type="button" icon="search">查询</v-button>
    </v-more-panel>
    <v-data-table :data='loadData' :columns='longColumns' :fixed-left="0" :fixed-right="1">
      <template slot="td" slot-scope="props">
        <div v-if="props.column.field=='action'" class="text-center">
          <v-button-group>
            <v-button type="info" title="查看" @click="viewType(props.item)">
              <v-icon type="file-text"></v-icon>
            </v-button>
            <v-button type="primary" title="编辑" @click="editType(props.item)">
              <i class="el-icon-edit"></i>
            </v-button>
            <v-button type="info" title="下载" @click="downloadType(props.item)">
              <v-icon type="download"></v-icon>
            </v-button>
            <v-button type="danger" title="删除" @click="delType(props.item)">
              <i class="el-icon-delete"></i>
            </v-button>
          </v-button-group>
        </div>
        <span v-else v-html="props.content"></span>
      </template>
      <TypeModel :visible="typeModalVisible" />
    </v-data-table>
  </div>

</template>

<script>
import axios from 'axios'
import TypeModel from '@/components/typeManage/model/typeModel.vue'
export default {
  components: {
    TypeModel
  },
  data: function () {
    return {
      typeModalVisible: true,
      loadData (pramas) {
        return axios.get('static/datatable.json', pramas).then(res => {
          return res.data
        })
      },
      longColumns: [{
        title: '歌名',
        field: 'name'
      },
      {
        title: '时长',
        field: 'time'
      },
      {
        title: '歌手',
        field: 'singer'
      },
      {
        title: '专辑',
        field: 'album'
      },
      {
        title: '操作',
        field: 'action'
      }
      ]
    }
  },
  methods: {
    viewType (pramas) {
      this.typeModalVisible = true
      console.log(pramas)
      // this.typeModalVisible = !this.typeModalVisible
      console.log(this.typeModalVisible)
    }
  }
}

</script>
<style scoped>
  .text-center {
    text-align: center;
  }

</style>
