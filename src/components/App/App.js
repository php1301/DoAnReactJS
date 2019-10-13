import React from 'react';
// import logo from './logo.svg';
import Home from '../Home/Home';
import UserLogin from '../UserLogin/UserLogin';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Home/>
      <UserLogin/>
    </div>
  );
}

export default App;
