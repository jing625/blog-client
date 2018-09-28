import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'

window.request = request
window.auth = auth
window.blog = blog

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

