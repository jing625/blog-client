<template>
  <header>
    <h1>Let's share</h1>
    <p>精品博客汇聚</p>
    <div class="btns">
      <el-button>注册登录</el-button>
      <el-button>注册账号</el-button>
    </div>
  </header>
</template>

<script>

</script>
<style lang="less">
  @import url(../assets/base.less);

  header {
    padding: 0 12% 30px 12%;
    background: @bgColor;
    display: grid;
    justify-items: center;

    h1 {
      color: #fff;
      font-size: 40px;
      margin: 60px 0 0 0;
      text-transform: uppercase;
    }

    p {
      margin: 15px 0 0 0;
      color: #fff;
    }
    .btns {
      margin-top: 20px;
    }
    button {
      margin: 20px 5px 0;
    }
  }
</style>
