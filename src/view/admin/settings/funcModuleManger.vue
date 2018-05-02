<template>
  <div>

    <el-table
      :data="tableData"
      border
      style="">
      <el-table-column
        fixed
        prop="roleId"
        label="编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="roleName"
        label="角色名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="roleDesc"
        label="角色描述"
        width="120">
      </el-table-column>
      <el-table-column
        prop=""
        label="学校是否初始化使用"
        width="150">
        <template slot-scope="scope">
          <span v-if="scope.row.isDefault == 0">否</span>
          <span v-else>是</span>
        </template>
      </el-table-column>
      <el-table-column
        prop=""
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">更新</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop=""
        label="权限"
        width="320">
        <template slot-scope="scope">
          <el-button type="text" size="small">设置权限</el-button>
          <el-button type="text" size="small">设置客户端权限</el-button>
          <el-button type="text" size="small">一键复制</el-button>
          <el-button type="text" size="small">批量同步</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
  export default({
    data(){
      return {}
    }
  })
</script>
<style>

</style>
