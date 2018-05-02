/**
 * Created by Administrator on 2018/5/2.
 */
import role from './role'

import v_settings from 'view/admin/settings'

export default{
  path: 'settings',
  name: '设置',
  component: v_settings,
  children:[
    ...role
  ]
}
