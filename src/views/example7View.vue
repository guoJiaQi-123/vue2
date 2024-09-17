<template>
  <div>
    <!--    <input type="button" value="获取远程数据" @click="sendReq()">-->
    <div class="title">学生列表</div>
    <div class="thead">
      <div class="row bold">
        <div class="col">编号</div>
        <div class="col">姓名</div>
        <div class="col">性别</div>
        <div class="col">年龄</div>
      </div>
    </div>
    <div class="tbody">
      <div v-if="students.length > 0">
        <div class="row" v-for="s in students" :key="s.id">
          <div class="col">{{ s.id }}</div>
          <div class="col">{{ s.name }}</div>
          <div class="col">{{ s.sex }}</div>
          <div class="col">{{ s.age }}</div>
        </div>
      </div>
      <div class="row" v-else>暂时无数据</div>
    </div>
  </div>
</template>
<script>
import axios from "../utils/myaxios";

const options = {
  // 对象里面的方法属性可以直接这么写
  mounted() { // 渲染完组件后自动执行该方法
    this.sendReq();
  },
  data() {
    return {
      students: []
    };
  },
  // data: function () {
  //   return {
  //     students: []
  //   };
  // },
  methods: {
    async sendReq() {
      const response = await axios.get("/api/students");
      console.log(response.data.data);
      this.students = response.data.data;
    }
  }
}
export default options;
</script>

<style scoped>
div {
  font-family: 华文行楷;
  font-size: 20px;
}

.title {
  margin-bottom: 10px;
  font-size: 30px;
  color: #333;
  text-align: center;
}

.row {
  background-color: #fff;
  display: flex;
  justify-content: center;
}

.col {
  border: 1px solid #f0f0f0;
  width: 15%;
  height: 35px;
  text-align: center;
  line-height: 35px;
}

.bold .col {
  background-color: #f1f1f1;
}
</style>