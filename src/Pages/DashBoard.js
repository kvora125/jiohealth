import React from 'react'
import logo from '.././logo.svg'
import { Tabs, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import FitnessTracker from '../components/FitnessTracker';
import EmergencyServices from '../components/EmergencyServices';
import Bookings from '../components/Bookings'
const {TabPane} = Tabs;

const Dashboard = ({setLogIn}) =>{
    return (
      <div>
        <div className="App-header-small">
        <img style={{display:'inline'}} src={logo} className="App-logo-small" alt="logo" />  <Button onClick={()=>setLogIn(false)} style={{float:'right', margin:'20px'}}>LOGOUT</Button>
        </div>
        <Tabs centered="true" animated="true" size="large"  destroyInactiveTabPane="true" type="card">
          <TabPane style={{ minHeight: '70vh'}} tab="Fitness Tracker" key="1">
              <FitnessTracker />
          </TabPane>
          <TabPane style={{ minHeight: '70vh'}} tab="Emergency Services" key="2" >
              <EmergencyServices />
          </TabPane>
          <TabPane style={{ minHeight: '70vh'}} tab="My Bookings" key="3" >
              <Bookings />
          </TabPane>
        </Tabs>
      </div>
    );
  }

export default Dashboard
