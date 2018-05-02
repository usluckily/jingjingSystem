/**
 * Created by Administrator on 2018/4/27.
 */
/**
 *Vue实例上挂载全局变量或函数
 * */

export default{
  install(Vue, options){
    Vue.prototype.marshalMenu = function(menus){

      let obj = {
        mainMenus:[],
        childMenus:[]
      }

      menus.forEach(function(e,index){
        obj.mainMenus.push({
          menusId:index,
          rightCode:e.rightCode,
          rightText:e.rightText,
          rightTip:e.rightTip,
          rightImg:e.rightImg,
          serviceCode:e.serviceCode,
          rightUrl:e.rightUrl
        })

        obj.childMenus.push({
          menusId:index,
          trees:e.trees
        })

      })

      return obj

    }
  }
}
