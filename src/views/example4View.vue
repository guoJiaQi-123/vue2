<template>
  <div>
    <div><label for="">请输入姓名：</label><input type="text" v-model="name"/></div>
    <div><label for="">请输入年龄：</label><input type="text" v-model="age"/></div>
    <div>
      <label for="">请选择性别：</label>
      男<input type="radio" value="男" v-model="sex">
      女<input type="radio" value="女" v-model="sex">
    </div>
    <div>
      <label for="">请选择爱好：</label>
      游泳<input type="checkbox" value="游泳" v-model="fav">
      篮球<input type="checkbox" value="篮球" v-model="fav">
      足球<input type="checkbox" value="足球" v-model="fav">
    </div>
  </div>
</template>

<script>
const options = {
  data: () => {
    return {
      name: '',
      age: null,
      sex: '男',
      fav: ['篮球']
    }
  }
}
export default options;

</script>

<style scoped>

</style>