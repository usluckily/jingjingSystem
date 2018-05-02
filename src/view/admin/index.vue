<template>
  <div class="all">
    <a_head :listArray="menus.mainMenus"></a_head>

    <div class="layout">

      <el-aside style="width:200px;height:100%;background:#304156;padding-top:80px;float:left;">

        <el-row class="tac">

          <el-col :span="24">
            <el-menu
              default-active=" '1' "
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#304156"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu :index="index.toString()" :key="index" v-for="(i,index) in childMenus.trees" @click.native="test(i.trees)">
                <template slot="title">
                  <div class="asdqwe" >
                    <i class="el-icon-location"></i>
                    <span>{{ i.rightText }}</span>
                  </div>
                </template>
                <el-menu-item-group>
                  <!--<template slot="title">分组一</template>-->
                  <el-menu-item :index="index+'-'+jIndex" :key="jIndex" v-for="(j,jIndex) in i.trees" v-if="j.rightTip != 2">{{ j.rightText }}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>


              <!--<el-submenu index="1">-->
                <!--<template slot="title">-->
                  <!--<i class="el-icon-location"></i>-->
                  <!--<span>导航一</span>-->
                <!--</template>-->
                <!--<el-menu-item-group>-->
                  <!--&lt;!&ndash;<template slot="title">分组一</template>&ndash;&gt;-->
                  <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
                  <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--&lt;!&ndash;<el-menu-item-group title="分组2">&ndash;&gt;-->
                <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-submenu index="1-4">-->
                  <!--<template slot="title">选项4</template>-->
                  <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
                <!--</el-submenu>-->
              <!--</el-submenu>-->
              <!--<el-menu-item index="2">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">导航二</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="3" disabled>-->
                <!--<i class="el-icon-document"></i>-->
                <!--<span slot="title">导航三</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="4">-->
                <!--<i class="el-icon-setting"></i>-->
                <!--<span slot="title">导航四</span>-->
              <!--</el-menu-item>-->


            </el-menu>
          </el-col>

        </el-row>

      </el-aside>


      <el-main style="margin-left:200px;padding-top:80px;height:100%;overflow:auto;">

        <p>main menu:<span v-for="i in menus.mainMenus"> {{ i }} </span></p>


      </el-main>

    </div>

    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import a_head from 'view/admin/header'

    export default({
      name: 'admin-main',
      data(){
        return {
          nav_list:{
            cur:0,
          },
          isTeacher:true,
          menus:JSON.parse(sessionStorage.getItem('menus')),
          childMenus:{},
        }
      },
      created(){
        let vm = this

        this.childMenus = this.menus.childMenus[0]

        this.$root.eventHub.$on('changeChildMenus',function(d){
          vm.childMenus = vm.menus.childMenus[d.index]
        })
      },
      mounted(){
//        this.$Loading.finish();
      },
      methods:{
        handleOpen(){

        },
        handleClose(){

        },
        test(trees){
          if(trees[0].rightTip == 2){
            console.log(trees)
          }
        }
      },
      directives: {
        hide: {
          // 指令的定义
          inserted(el) {
            setTimeout(function(){
              el.style.display = 'none'
            },2000)
          }
        },
        isT:{
          bind(el,binding){
            var per = binding.value.isTeacher
            if(!per){
              el.parentNode.removeChild(el)
            }
          }
        }
      },
      components:{
        a_head
      },
      watch:{
        '$route'(to,from){
          let vm = this
          vm.$nextTick(() => {
            vm.$Loading.start()
            setTimeout(function(){
              vm.$Loading.finish()
            },500)
          })
        }
      }
    })
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height:100vh;
  }
</style>
