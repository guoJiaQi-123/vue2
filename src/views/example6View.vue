<template>
  <div>
    <input type="button" value="点击获取远程数据" @click="getData()"/>
  </div>
</template>

<script>
import exios from '../utils/myaxios'

const options = {
  data: () => {
    return {}
  },
  methods: {
    async getData() {
      // const response = await axios.get("/api/a1");

      // const response = await axios.post('/api/a2');

      // const response = await axios.post('/api/a3', {}, {
      //   headers: {
      //     Authorization: 'asdasdas'
      //   }
      // });

      // const response = await axios.post('/api/a4', {}, {
      //   params: {
      //     name: '&&&',
      //     age: 20
      //   }
      // });

      // const name = encodeURIComponent('&&&')  // 拼接字符串时需要注意如果是URL特殊字符，需要转义
      // const age = 50;
      // const response = await axios.post(`/api/a4?name=${name}&age=${age}`);
      //   const _axios = axios.create({
      //     baseURL: 'http://localhost:8080',
      //     withCredentials: true
      //   });
      //
      //   const response = await _axios.post("/api/a6set");
      //   const response1 = await _axios.post("/api/a6get");
      //   console.log(response);
      //   console.log(response1);
      // }

      // const _axios = axios.create({
      //   baseURL: 'http://localhost:8080',
      //   withCredentials: true
      // });
      //
      // try {
      //   const response = await _axios.post("/api/a6get2");
      //   console.log(response);
      // } catch (e) {
      //   console.log(e.response)
      // }
      const response = await exios.get("/api/students2");
      console.log(response)

    }
  },
}
export default options;
</script>

<style scoped>

</style>