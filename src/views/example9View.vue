<template>

  <div>
    <el-input placeholder="请输入名称：" size="mini" v-model="queryDto.name" clearable/>
    <el-select placeholder="请选择性别：" size="mini" v-model="queryDto.sex" clearable>
      <el-option value="男"></el-option>
      <el-option value="女"></el-option>
    </el-select>
    <el-select placeholder="请选择年龄：" size="mini" v-model="queryDto.age" clearable>
      <el-option value="10,20" label="10到20岁"></el-option>
      <el-option value="21,30" label="21到30岁"></el-option>
      <el-option value="31,40" label="31到40岁"></el-option>
      <el-option value="41,80" label="41到80岁"></el-option>
    </el-select>
    <el-button type="primary" size="mini" @click="query">搜索</el-button>
    <el-divider/>
    <el-row>
      <el-table :data="students" stripe border>
        <el-table-column label="学生编号" prop="id" width="180"></el-table-column>
        <el-table-column label="姓名" prop="name" width="180"></el-table-column>
        <el-table-column label="年龄" prop="age" sortable width="180"></el-table-column>
        <el-table-column label="性别" prop="sex" width="180"></el-table-column>
      </el-table>
    </el-row>

    <el-pagination
        :total="total"
        :current-page="queryDto.page"
        :page-size="queryDto.size"
        layout="prev,pager,next,sizes,->,total"
        :page-sizes="[5,10,15,20]"
        @current-change="currentChange"
        @size-change="sizeChange">
    </el-pagination>
  </div>
</template>
<script>
import axios from "../utils/myaxios";

const options = {
  // 每次刷新页面都会调用的方法
  mounted() {
    this.query()
  },
  data: () => {
    return {
      students: [],
      total: 0,
      queryDto: {
        page: 1,
        size: 10,
        name: '',
        sex: '',
        age: []
      }
    }
  },
  methods: {
    // 当前页数改变调用改方法
    currentChange(page) {
      this.queryDto.page = page
      this.query()
    },
    // 当每页条数改变，调用该方法
    sizeChange(size) {
      this.queryDto.size = size
      this.query()
    },
    // 查询方法
    async query() {
      const resp = await axios.get("/api/students/q", {
        params: this.queryDto
      });
      this.students = resp.data.data.list;
      this.total = resp.data.data.total;
    }
  },
}
export default options

</script>
<style scoped>
.el-input--mini,
.el-select--mini {
  width: 193px;
  margin: 10px 10px 0 0;
}
</style>