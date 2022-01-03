import React from 'react'
import logo from '../logo.png'
import '../index.css';
import { Form, Input, Row, Col, Button } from 'antd';
import '../App.css'
import { NavLink } from 'react-router-dom';

const HomePage=({setLogIn}) =>{
    return (
      <div className="App">
        <div className="App-header">
          <Row>
            <Col>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col>
            <label  class="App-Label"  style={{color:'black'}}>Jio</label><label class="App-Label" style={{color:'white'}}> Health+</label>
            </Col>
          </Row>
          <h2 style={{color:'white'}}>Welcome to Jio Health+. We mange your daily and emergency health needs</h2>
        </div>
        <Form name="login" labelCol={{ span: 8, }} wrapperCol={{ span: 8, }} autoComplete="off">
          <Form.Item name="username" label="USER NAME">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="PASSWORD">
            <Input />
          </Form.Item>
          <Row align='center'>
            <Col>
              <Button onClick={()=>setLogIn(true)}>LOGIN</Button>
            </Col>
          </Row>
        </Form>
        This is a demo app. Enter any details or click login directly to login.
      </div>
    );
  }
  export default HomePage;
