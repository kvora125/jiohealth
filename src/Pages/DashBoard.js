import React, { Component } from 'react'
import logo from '.././logo.svg'
import Loadable from 'react-loadable'
import '.././index.css';
import { Form, Input, Button, Row, Col, Spin } from 'antd';
import '.././App.css'
import { connect } from 'react-redux'
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'

const loadablePage = page =>{
  Loadable({
    loader: ()=> import (`./${page}`),
    loading:  <Spin size="large" />,
  });
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Jio Health +. We mange your daily and emergency health needs</h2>
        </div>
        <Form name="login" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} autoComplete="off">
          <Form.Item name="username" label="USER NAME">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="PASSWORD">
            <Input />
          </Form.Item>
          <Row>
            <Col>
              <Button><a href="./dashboard">LOGIN</a></Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default connect(
  state=>({

  }),
  {}
)(App)
