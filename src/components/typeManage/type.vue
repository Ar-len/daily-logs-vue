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
    <v-button-group>
        <v-button type="primary" @click="addType()"><v-icon type="plus-circle-o"></v-icon> 新增</v-button>
        <v-button type="primary"><v-icon type="download"></v-icon> 导出</v-button>
    </v-button-group>
    <v-data-table :data='loadData' :columns='longColumns' :fixed-left="0" :fixed-right="1" :stripe="true"
        check-type="checkbox" @checkall="checkAll" @clickrow="clickRow" >
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
    </v-data-table>
    <typeAddOrEdit :visible="typeAddOrEditVisible" @ok="typeOk" @cancel="typeCancel" :isEdit="isEdit"/>
    <typeView :visible="typeViewVisible" @ok="typeOk" @cancel="typeCancel"/>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import typeAddOrEdit from '@/components/typeManage/model/typeAddOrEdit'
import typeView from '@/components/typeManage/model/typeView'
export default {
  computed: {
    ...mapState({
      type: state => state.type
    })
  },
  components: {
    typeAddOrEdit,
    typeView
  },
  data: function () {
    return {
      isEdit: false,
      typeViewVisible: false,
      typeAddOrEditVisible: false,
      loadData (pramas) {
        console.log(pramas)
        return axios.get('static/datatable.json', pramas).then(res => {
          return res.data
        })
      },
      longColumns: [{
        title: '歌名',
        field: 'name',
        sort: true
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
        field: 'action',
        className: 'text-center'
      }
      ]
    }
  },
  methods: {
    checkAll: function (value) {
      this.checkAllMsg = '当前全选状态是：' + value
    },
    clickRow: function (obj) {
      console.log(obj)
      this.clickRowMsg = '当前点击第' + obj.index + '行'
    },
    addType () {
      this.isEdit = false
      this.typeAddOrEditVisible = true
    },
    editType () {
      this.isEdit = true
      this.typeAddOrEditVisible = true
    },
    viewType (pramas) {
      this.typeViewVisible = true
    },
    typeCancel () {
      this.typeViewVisible = false
      this.typeAddOrEditVisible = false
    },
    typeOk () {
      this.typeViewVisible = false
      this.typeAddOrEditVisible = false
    }
  }
}

</script>
<style scoped>
  .text-center {
    text-align: center;
  }

</style>
