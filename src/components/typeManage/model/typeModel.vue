<template>
  <v-modal title="异步关闭的 Modal 对话框" :visible="visible" @ok="handleAsyncOk" @cancel="handleAsyncCancel"
    :confirm-loading="asyncConfirmLoading">
    <p>对话框的内容</p>
    <p>对话框的内容</p>
    <p>对话框的内容</p>
  </v-modal>
</template>

<script>
export default {
  props: ['visible'],
  data () {
    return {
      asyncConfirmLoading: false
    }
  },
  created () {
    console.log(this.typeModalVisible)
  },
  methods: {
    showAsyncModal () {
      this.typeModalVisible = true
    },

    handleAsyncOk () {
      /* 对话框将在两秒后关闭 */
      this.asyncConfirmLoading = true
      setTimeout(() => {
        this.typeModalVisible = false
        this.asyncConfirmLoading = false
      }, 2000)
    },

    handleAsyncCancel () {
      this.typeModalVisible = false
    }
  }
}

</script>
