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
  },
  methods: {
    showAsyncModal () {
      this.visible = true
    },

    handleAsyncOk () {
      /* 对话框将在两秒后关闭 */
      this.asyncConfirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.asyncConfirmLoading = false
        this.$emit('viewType')
      }, 2000)
    },

    handleAsyncCancel () {
      this.visible = false
    }
  }
}

</script>
