<template>
  <div class="all">

    <div class="login_box">
      <div>
        <el-input id="loginName" v-model:value="user.account" placeholder="账户" class="login-bar"></el-input>

        <el-input type="password" id="loginPwd" v-model:value="user.pwd" placeholder="密码" class="login-bar"></el-input>

        <!--<el-checkbox >记住密码</el-checkbox>-->
        <el-button type="primary" style="width:100%;" @click="login()">登录</el-button>
      </div>
    </div>

  </div>
</template>
<script>
  import * as auth from '@/API/auth'

  import instance from '@/API/'

  import axios from 'axios'
  import qs from 'qs'

  export default({
    name:'login',
    data(){
      return{
        msg:'page login',
        modal:{//控制modal
          show:false,
          title:'提示',
          cancelText:'取消',
          okText:'确认',
          contentText:'提示'
        },
        user:{
          account:'',
          pwd:''
        }
      }
    },
    mounted(){
      let vm = this


    },
    components:{

    },
    methods:{
      getFileSize(){
        let fileInput = document.getElementById('file') , fileData = new FormData()
        fileData.append('file',fileInput.files[0])
        if(fileInput.files[0].size > 10){
          fileInput.value = ''
          console.log(fileInput)
        }
        console.log(fileData)

      },
      login(){
        let vm = this
        if(vm.user.account == '' || vm.user.pwd == ''){
          vm.$message('请输入账号和密码');
          return
        }

        //学校管理员角色账号：15986786813/fangfang310
        //老师&家长角色：13660000002/000002
        //管理员：admin？666666
        let obj = qs.stringify({userName:'admin',password:'666666',webCode:'1234'})
        console.log(obj)

        auth.login.r(obj).then(function(res){
          let d = res.data.data
          console.log(res)
          if(res.data.message == 'OK'){

            //登陆成功后设置请求头
            instance.defaults.headers.post['Authentication'] = d.token;

            let obj = {
              userType:d.userType,
              roleType:d.roleType,
              loginName:d.loginName,
              shoolName:d.shoolName,
              isMuilty:d.isMuilty,
              sid:d.sid,
              rid:d.rid,
              id:d.id
            }

            let menus = vm.marshalMenu(d.menus)

            sessionStorage.setItem('token',d.token)
            sessionStorage.setItem('isLogin',true)
            sessionStorage.setItem('baseInfo',JSON.stringify(obj))
            sessionStorage.setItem('menus',JSON.stringify(menus))

            vm.$router.push({path:'/admin'})

          }

        }).catch(function(e){
          console.log('error:'+e)
        })


      }
    }
  })
</script>
<style>
  .login_box{
    width:100%;
    height:100%;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
  }
  .login_box>div{
    padding:2rem;
    position:relative;
    top:-2rem;
    border:1px solid #e2e2e2;
    width:20rem;
    border-radius:0.5rem;
    background:rgba(255,255,255,0.7)
  }
  .login-bar{
    margin-bottom:1rem;
  }
</style>
