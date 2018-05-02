/**
 * Created by Administrator on 2018/3/9.
 */
import Custom_function from 'view/admin/customFunction'
import moduleTest from 'view/admin/moduleTest'
import admin from 'view/admin/'

import test from '@/components/HelloWorld'

export default[
  {
    path:'/test',
    name:'test',
    component:test
  },
  {
    path:'/admin',
    name:'admin-main',
    component:admin,
    redirect:'/admin/Custom-function',
    children:[
      {
        path: 'Custom-function',
        name: '定制功能',
        component: Custom_function,
        children:[
          {path:'module1',component:moduleTest},
          {path:'module2',component:moduleTest},
          {path:'module3',component:moduleTest},
        ]
      }
    ]
  }
]
