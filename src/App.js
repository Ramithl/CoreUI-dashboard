import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import './scss/style.scss';
import { useSelector } from 'react-redux';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const App =()=> {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" name="Login Page" render={props => <Login {...props}/>}/>
              {useSelector(state=>state.user)==='admin'?<Route path="/home" name="Home" render={props => <TheLayout {...props}/>} />:null}
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
}

export default App;
