import './global.scss'
import '../src/components/index.ts'
import create from 'dva'
import { Router, Route, Switch } from 'dva/router'
import model1 from './model/model1.ts'

import Home from './pages/Home.tsx'//引入组件
import Index from './pages/Index.tsx'//仓库context属性
import Coverhome from './pages/Cover.tsx'//引入antd布局
import Parent from './pages/Parent.tsx'//旧版本父组件生命周期
import NewParent from './pages/NewParent.tsx'//新版本组件生命周期
import News from './pages/News.tsx'//新版本新增的生命周期
import Diff from './pages/Diff.tsx' //Diff算法
import KeyUse from './pages/KeyUse.tsx' //Diff算法
import From from './pages/From.tsx'    // 非受控组件 现取现用
import From2 from './pages/From2.tsx'    //受控组件随着表单变化数据变化
import From3 from './pages/From3.tsx'  //使用高阶函数写表单
import From4 from './pages/From4.tsx'    //不使用高阶函数写表单

const app = create()//应用api
app.use({})//插件api
app.model(model1 as any)//纯函数状态管理api
app.router(({ history }: any) => {//路由api
  return <Router history={history}>
    <Switch>
      <Route path='/login1' exact component={From} />
      <Route path='/login2' exact component={From2} />
      <Route path='/login3' exact component={From3} />
      <Route path='/login4' exact component={From4} />
      <Route path='/parent' component={Parent} />
      <Route path='/newparent' component={NewParent} />
      <Route path='/news' component={News} />
      <Route path='/diff' component={Diff} />
      <Route path='/keyuse' component={KeyUse} />
      <Route path='/' exact component={Index} />
      <Route path='/home' exact component={Home} />
      <Route path='/cover' exact component={Coverhome} />
    </Switch>
  </Router>
})

app.start('#root')// 实例化dom的一个api



// React 18