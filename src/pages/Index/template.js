import request from '@/helpers/request.js'

window.request = request


export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick1() {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    }
  }
}
