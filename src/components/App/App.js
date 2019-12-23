import React from 'react';
import Home from '../Home/Home';
import UserLogin from '../UserLogin/UserLogin';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserProfile from '../UserProfile/UserProfile';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import { routesHome } from "../../routes";
import { connect } from 'react-redux';
import FPSStats from "react-fps-stats";
function App(props) {
  const showItem = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route key={index} exact={item.exact} path={item.path} component={item.component} login={item.data} />
        )
      })
    }
  }
  return (
    <div className="App">
      {/* <FPSStats/> */}
      <BrowserRouter>
        <Switch>
          {showItem(routesHome)}
          <Redirect from="*" to="/404" />
        </Switch>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <UserLogin/> */}
      {/* <UserProfile/> */}
    </div>
  );
}

const mapStateToProps = state => ({
  logInStatus: state.toggleLogInStatus.status,
  session: state.getSession
});



export default connect(mapStateToProps, null)(App);
