<template>
  <el-header style="padding:0" height="80px" class="head">

    <div class="layout-logo">
      <img src="../../assets/logo.png"/>
    </div>

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#2d8cf0"
      background-color="#304156"
      
      >
      
      <el-menu-item :index=" index.toString() " v-for="(i,index) in listArray" :key="index" @click="changeChildMenus(index)">{{ i.rightText }}</el-menu-item>
    </el-menu>

  </el-header>
</template>
<script>
    export default({
      name: 'admin-head',
      props:{
          listArray:{
            type:Array,
            default:[]
          }
      },
      data(){
        return {
          activeIndex2:'0'
        }
      },
      methods:{
        goOtherRouter(i){
          this.$router.push({ path:i.path })
        },
        handleSelect(){

        },
        changeChildMenus(index){
          this.$root.eventHub.$emit('changeChildMenus',{ index:index })
        }
      }
    })
</script>
<style scoped>
  .head{
    border-bottom: solid 1px #e6e6e6;
    background-color: #304156;
  }
  .head .layout-logo{
    height:100%;
    width:200px;
    float:left;
  }
  .head .layout-logo img{
    width:auto;
    max-height:100%;
  }
  .head .el-menu-demo{
    float:left;
    margin-left:140px;
    border-bottom: none;
    /* line-height: 80px; */
  }
  .head-nav{
    float:right;
  }
  .nav-list{

  }
  .head-nav .nav-list:after{
    height:0;
  }
  .head .el-menu-item{
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    color: #fff;
  }
</style>
