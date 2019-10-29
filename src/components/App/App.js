import React from 'react';
// import logo from './logo.svg';
import Home from '../Home/Home';
import UserLogin from '../UserLogin/UserLogin';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserProfile from '../UserProfile/UserProfile';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {routesHome} from "../../routes";
function App() {
  const showItem = (routes) =>{
    if( routes && routes.length > 0){
      return routes.map((item, index) =>{
        return(
          <Route key ={index} exact = {item.exact} path = {item.path} component={item.component}/>
        )
      })
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {showItem(routesHome)}
        </Switch>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <UserLogin/> */}
      {/* <UserProfile/> */}
    </div>
  );
}

export default App;
