<template>
  <div>
    <div>
      <input type="button" value="点我执行m1" @click="m1"/>
    </div>
    <div>
      <input type="button" value="点我执行m2" @click="m2"/>
    </div>
    <div>{{ count }}</div>
  </div>
</template>


<script>
const options = {
  data: () => {
    return {
      count: 0
    }
  },
  // methods是一个对象，该对象又包含了方法
  methods: {
    m1() {
      this.count++;
      console.log("m1")
    },

    m2() {
      this.count--;
      console.log("m2")
    }
  }
}
export default options;
</script>

<style scoped>

</style>