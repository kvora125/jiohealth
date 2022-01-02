import React from 'react'
import logo from '../logo.svg'
import '../index.css';
import { Form, Input, Row, Col, Button } from 'antd';
import '../App.css'
import { NavLink } from 'react-router-dom';

const HomePage=() =>{
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Jio Health +. We mange your daily and emergency health needs</h2>
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
              <Button><NavLink to="/dashboard">LOGIN</NavLink></Button>
            </Col>
          </Row>
        </Form>
        This is a demo app. Enter any details or click login directly to login.
      </div>
    );
  }
  export default HomePage;
