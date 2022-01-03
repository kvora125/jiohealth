import React, { useState } from 'react'
import './index.css';
import './App.css'
import 'antd/dist/antd.css';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/DashBoard';

const App =()=> {
  const [logIn,setLogIn] =useState (false);
    return (  
      <div>
        {logIn? <Dashboard setLogIn={setLogIn} />:<HomePage setLogIn={setLogIn} />}
        <label style={{bottom:'0px'}}>This is demo App with dummy data just to portray what actual app would look like. Any of the functionalities here arent working</label>
       </div>    
    );
   
}

export default App;
