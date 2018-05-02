<template>
  <div class="stars-box">

    <div style="width:20px;height:20px;float:left;" @click="clearLight"></div>

    <div class="stars-box">

      <div class="stars-item">
        <div class="l"></div>
        <div class="r"></div>
      </div>

      <div class="stars-item">
        <div class="l"></div>
        <div class="r"></div>
      </div>

      <div class="stars-item">
        <div class="l"></div>
        <div class="r"></div>
      </div>

      <div class="stars-item">
        <div class="l"></div>
        <div class="r"></div>
      </div>

      <div class="stars-item">
        <div class="l"></div>
        <div class="r"></div>
      </div>

    </div>

  </div>
</template>
<script>
  import $ from 'jquery'

    export default({
      name: 'stars',
      data(){
        return {
          curIndex:0,
          clickCur:0,//分值，提交的时候取它
          pIndex:'',
          cIndex:'',
          starArr:''
        }
      },
      methods:{
        loadImg(){
          let srcArr = ['./stars/l_dark_star.png','./stars/l_light_star.png','./stars/r_dark_star.png','./stars/r_light_star.png'] , imgArr = []

          $(srcArr).each(function(i){
            imgArr[i] = new Image()
            imgArr[i].src = srcArr[i]
          })
        },
        setStars(num){
          let vm = this

          vm.starArr.each(function(i){
            if(i<num){
              $(vm.starArr[i]).addClass('cur')
            }else{
              $(vm.starArr[i]).removeClass('cur')
            }
          })
        },
        clearLight(){
          $('.stars-item div').removeClass('cur')
          vm.clickCur = 0
        },
        init(){
          let vm = this

          $('.stars-item div').on('click',function(){
            vm.pIndex = $(this).parent().index() +1
            vm.cIndex = $(this).index()
            vm.curIndex = vm.cIndex == 0 ? vm.pIndex*2-1 : vm.pIndex*2
            vm.clickCur = vm.curIndex
            vm.setStars(vm.curIndex)
          })

          $('.stars-item div').on('mouseover',function(){
            vm.pIndex = $(this).parent().index() +1
            vm.cIndex = $(this).index()
            vm.curIndex = vm.cIndex == 0 ? vm.pIndex*2-1 : vm.pIndex*2
            vm.setStars(vm.curIndex)
          })
          $('.stars-item div').on('mouseout',function(){
            vm.setStars(vm.clickCur)
          })
        }
      },
      created(){
        this.loadImg()
      },
      mounted(){
        let vm = this
        vm.starArr = $('.stars-item div')
        vm.init()
      }
    })
</script>
<style scoped>

  .stars-box{
    height:20px;
  }
  .stars-box,.stars-box div{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  .stars-box .stars-item{
    width:26px;
    height:20px;
    float:left;
  }
  .stars-item .l,.stars-item .r{
    width:13px;
    height:100%;
    float:left;
    background:gray;
    background-size:100% 100%;
  }
  /*.stars-item .l{*/
    /*width:13px;*/
    /*height:100%;*/
    /*float:left;*/
    /*background:gray;*/
    /*background-size:100% 100%;*/
  /*}*/
  .stars-item .l{
    padding-left:3px;
    background:url('./stars/l_dark_star.png') no-repeat right;
  }
  .stars-item .l.cur{
    background:url('./stars/l_light_star.png')no-repeat right;
  }
  .stars-item .r{
    padding-right:3px;
    background:url('./stars/r_dark_star.png') no-repeat;
  }
  .stars-item .r.cur{
    background:url('./stars/r_light_star.png') no-repeat;
  }

</style>
