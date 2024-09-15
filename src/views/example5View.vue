<template>
  <div>
    <h1>{{ fullName }}</h1>
    <h1>{{ fullName }}</h1>
    <h1>{{ fullName }}</h1>
  </div>
</template>

<script>
const options = {
  data: () => {
    return {
      firstName: '张',
      lastName: '三'
    }
  },
  methods: {
    // 方法没有缓存
    fullName() {
      console.log("方法进入")
      return this.firstName + this.lastName;
    }
  },
  computed: {
    // 属性计算有缓存
    fullName() {
      console.log("方法进入")
      return this.firstName + this.lastName;
    }
  }
}
export default options;
</script>

<style scoped>

</style>