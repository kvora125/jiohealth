import React, { useState } from 'react'
import logo from '.././logo.png'
import { Tabs, Button, Drawer, Row, Col, Avatar, Space } from 'antd';
import FitnessTracker from '../components/FitnessTracker';
import EmergencyServices from '../components/EmergencyServices';
import Bookings from '../components/Bookings'
import { MenuOutlined, UserOutlined } from'@ant-design/icons'

const {TabPane} = Tabs;

const Dashboard = ({setLogIn}) =>{
  const [drawerVisible,setDrawerVisible]=useState(false)
    return (
      <div>
        <Drawer
          title={(<div>
            <Row>
              <Space>
                <Col>
                  <Avatar><UserOutlined /></Avatar>
                </Col>
                <Col>
                  <Row>
                    Name: ABC XYZ
                  </Row>
                  <Row>
                    National Health ID: XXX XXX XXX
                  </Row>
                </Col>
              </Space>
            </Row>
          </div>)}
          placement={'left'}
          closable={true}
          onClose={()=>{setDrawerVisible(false);}}
          visible={drawerVisible}
          key={'drawer'}
        >
          <Button type="link">Health History</Button>
          <br />
          <Button type="link">My Policies</Button>
          <br />
          <Button type="link">My Reports</Button>
          <br />
          <Button type="link">My Prescriptions</Button>
          <br />
          <Button type="link">My Family</Button>
          <br />
        </Drawer>
        <div className="App-header-small">
         <Button onClick={()=>{setDrawerVisible(true);}}><MenuOutlined fill='#38b6ff' style={{ fontSize: '25px', color: '#08c' }} /></Button><img style={{display:'inline'}} src={logo} className="App-logo-small" alt="logo" /> <Button onClick={()=>setLogIn(false)} style={{float:'right', marginTop:'20px', marginRight:'20px'}}>LOGOUT</Button>
        </div>
        <Tabs centered="true" animated="true" size="large"  destroyInactiveTabPane="true" type="card">
        <TabPane style={{ minHeight: '70vh'}} tab="Emergency Services" key="2" >
              <EmergencyServices />
          </TabPane>
          <TabPane style={{ minHeight: '70vh'}} tab="Fitness & WellBeing" key="1">
              <FitnessTracker />
          </TabPane>
          <TabPane style={{ minHeight: '70vh'}} tab="My Bookings" key="3" >
              <Bookings />
          </TabPane>
        </Tabs>
      </div>
    );
  }

export default Dashboard
