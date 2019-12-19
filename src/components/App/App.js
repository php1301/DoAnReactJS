import React from 'react';
import Home from '../Home/Home';
import UserLogin from '../UserLogin/UserLogin';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserProfile from '../UserProfile/UserProfile';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { routesHome } from "../../routes";
import { connect } from 'react-redux';
function App(props) {
  const showItem = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route key={index} exact={item.exact} path={item.path} component={item.component} />
        )
      })
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {showItem(routesHome)}
          {/* {!props.logInStatus || props.session.failure ? <Redirect from='/profile' to="/login" /> : <Redirect from='/profile' to='/profile/approved' />}
          {!props.logInStatus || props.session.failure ? <Redirect from='/profile/approved' to="/login" /> : <Redirect from='/login' to='/profile/approved' />} */}
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
