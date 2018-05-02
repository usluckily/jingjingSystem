/**
 * Created by Administrator on 2018/3/9.
 */
import Custom_function from 'view/admin/customFunction'
import admin from 'view/admin/'

import r_settings from './settings'

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
    redirect:'/admin/settings',
    children:[
      r_settings
    ]
  },
]
