<template>
  <div>
    <div><input type="text" v-bind:value="name"/></div>
    <div><input type="text" v-bind:value="age"/></div>
    <div><input type="date" v-bind:value="birthday"/></div>
  </div>
</template>


<script>
const options = {
  data: () => {
    return {
      name: '张三',
      age: 80,
      birthday: '2003-11-22'
    }
  }
}
export default options;
</script>

<style scoped>

</style>