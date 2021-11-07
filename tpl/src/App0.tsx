import React , { Component, Suspense } from 'react';
import { lazy } from '@loadable/component';
import {NavLink,Redirect,Switch,Route} from 'react-router-dom';
const Home = lazy(() => import('./views/Home'));
const Test = lazy(() => import('./views/Test'));
class App extends Component {
    mergeWith(){
        const data:Array<any> = [
            {
                key:'home',
                path:'/',
                exact:true,
                component:Home,
            },
            {
                key:'test',
                path:'/test',
                exact:false,
                component:Test,
            },
        ];
        return data.map((item,index)=>(
            <Route
            key={item.key}
            exact={item.exact}
            path={item.path}
            component={item.component} />
        ))
    }
    render(){
        return(
            <React.Fragment>
                <NavLink to='/'>首页</NavLink><br/>
                <NavLink to='/test'>test</NavLink>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {this.mergeWith()}
                    </Switch>
                </Suspense>
            </React.Fragment>

        )
    }
}
export default App;




// import React , { Component, Suspense, lazy } from 'react';
// import {Redirect,Switch,Route} from 'react-router-dom';
// const Home = lazy(() => import('./views/Home'));
// const Test = lazy(() => import('./views/Test'));
//
// class App extends Component {
//     render(){
//         return(
//             <Suspense fallback={<div>Loading...</div>}>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route exact path="/test" component={Test} />
//                     <Redirect to="/"/>
//                 </Switch>
//             </Suspense>
//         )
//     }
// }
// export default App;