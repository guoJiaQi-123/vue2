<template>
  <h1>{{ msg }}!</h1>
</template>


<script>
const options = {
  data: function () {
    return {
      msg: "你好！",
      age: 80
    }
  }
}

export default options;

</script>