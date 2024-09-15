<template>
  <div>
    <h1>{{ name }}</h1>
    <!--  {{}}中可以写简单的表达式  -->
    <h1>{{ age > 60 ? '老年' : '青年'}}</h1>
  </div>
</template>


<script>
const options = {
  data: () => {
    return {
      name: '张三',
      age: 80
    }
  }
}
export default options;
</script>

<style scoped>

</style>