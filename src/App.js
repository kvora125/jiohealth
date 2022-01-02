import React from 'react'
import './index.css';
import './App.css'
import 'antd/dist/antd.css';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Dashboard from './pages/DashBoard';

const App =()=> {
    return (  
      <div>
        <BrowserRouter basename='/jiohealth' >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={Dashboard} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
        <label>This is demo App with dummy data just to portray what actual app would look like. Any of the functionalities here arent working</label>
       </div>    
    );
   
}

export default App;
