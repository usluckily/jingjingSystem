<template>
    <div class="layout">
      <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <Menu :active-name="active_name" theme="dark" width="auto" :open-names="open_names" ref="side_menu">
          <Submenu :name="index+1" v-for="(i,index) in nav" :key="index">
            <template slot="title">
              <Icon :type="i.type"></Icon>
              {{ i.title }} {{ index+1 }}
            </template>
            <MenuItem :name=" (index+1) +'-'+ (Jindex+1) " v-for="(j,Jindex) in i.tab" :key="Jindex" style="padding:0;">

              <router-link
                tag="div"
                :to=" '/admin/Custom-function/'+j.path"
                v-on:click.native="setHistoryTabs( j,(index+1) +'-'+ (Jindex+1) )"
                style="padding:14px 24px;">
                {{ (index+1)+'-'+ (Jindex+1) }}  {{ j.tabname }}
              </router-link>

            </MenuItem>
          </Submenu>

        </Menu>
      </Sider>

      <Layout :style="{marginLeft: '200px'}">

        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div style="height: 600px">

              <router-view></router-view>

            </div>
          </Card>
        </Content>
      </Layout>
    </div>
</template>
<script>
  import _ from 'lodash'

    export default({
      name: 'MSDemo',
      data(){
        return {
          active_name:'1-2',//左侧导航默认活动
          historyTabCur:0,//historyTab活动
//          open_names:[1],
          nav:[
            {
              title:'导航一',
              type:"ios-navigate",
              tab:[
                {tabname:'选项一',path:'module1',id:'1'},
                {tabname:'选项二',path:'module2',id:'2'},
                {tabname:'选项三',path:'module3',id:'3'}
              ]
            },
            {
              title:'导航二',
              type:"ios-keypad",
              tab:[
                {tabname:'选项一',path:'module1',id:'4'},
                {tabname:'选项二',path:'module2',id:'5'},
                {tabname:'选项三',path:'module3',id:'6'}
              ]
            },
            {
              title:'导航三',
              type:"ios-analytics",
              tab:[
                {tabname:'选项一',path:'module1',id:'7'},
                {tabname:'选项二',path:'module2',id:'8'},
                {tabname:'选项三',path:'module3',id:'9'}
              ]
            },
          ],
          openTab:[],
        }
      },
      mounted(){
        let vm = this

        //监听history_tab中推送的序号变动
        vm.$root.eventHub.$on('upDateActive_name',function(d){
          vm.active_name = d.num
        })


      },
      methods:{
        setHistoryTabs(j,num){
          let vm = this , isPush = true , path = vm.$route.path
          vm.active_name = num
          if(vm.openTab.length > 0){

            for(var i=0;i<vm.openTab.length;i++){
              if(vm.openTab[i].id == j.id){
                isPush = false
                break
              }

            }

            if(isPush){
              vm.openTab.push({
                tabname:j.tabname,
                path:path,
                id:j.id,
                num:num
              })
            }

          }else{
            vm.openTab.push({
              tabname:j.tabname,
              path:path,
              id:j.id,
              num:num
            })
          }

        },
        closeHistoryTab(id){
          let vm = this
          for(var i=0;i<vm.openTab.length;i++){
            if(vm.openTab[i].id == id){
              vm.openTab.splice(i,1)
              break;
            }
          }
        }
      },
      computed:{
        open_names(){
          var arr = [] , vm = this
          arr.push(parseInt(vm.active_name.split('-')[0]))
          return arr
        }
      },
      watch:{
        'open_names'(){
          let vm = this
          vm.$nextTick(() => {
            vm.$refs.side_menu.updateOpened();
          })
        },
        'active_name'(){
//          console.log(this.active_name)
        }
      },
      components:{

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
    margin-top:3.5rem;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }

  .historyTab{
    width:100%;
  }
  .historyTab ul{
    display:flex;
  }
  .historyTab ul li{
    padding:10px 20px;
  }
  .historyTab ul li:hover{
    background:#fff;
  }
  .historyTab ul li.on{
    background:#333;
    color:#fff;
  }
</style>
