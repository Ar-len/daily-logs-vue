<template>
  <div class="hello">
    <h2>Essential Links</h2>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="hello">test</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created () {
    this.$axios.get('http://localhost:8888/user/users').then(
      res => {
        this.msg = res.data
      }
    )
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    hello () {
      this.$api.get('user/users', {}, res => {
        this.msg = res.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
