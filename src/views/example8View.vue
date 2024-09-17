<template>
  <div>
    <h1>父组件</h1>
    <my-button type="primary" size="small">正常</my-button>
    <my-button type="danger" size="middle">危险</my-button>
    <my-button type="success" size="large">成功</my-button>
  </div>
</template>
<script>
import myButton from "@/components/MyButton.vue";

const options = {
  // 引用到的组件
  components: {
    myButton
  },
}
export default options;
</script>
<style scoped>
div {
  background-color: gainsboro;
  width: 100%;
  height: 400px;
}

h1 {
  font-family: 华文行楷;
}
</style>