import React from "react";
import { Row,Col, Button, Avatar,Modal, Form, Input, Checkbox, Radio }  from "antd";
import ambulance from '../Assets/icons/EmergencyServices/ambulance.png'
import consultation from '../Assets/icons/EmergencyServices/consultation.png'
import hospitalBed from '../Assets/icons/EmergencyServices/hospitalBed.png'
import insurance from '../Assets/icons/EmergencyServices/insurance.png'
import labTests from '../Assets/icons/EmergencyServices/labTests.png'
import medicines from '../Assets/icons/EmergencyServices/medicines.png'

const EmergencyServices =() =>{
    return (
        <div>
            <Row justify="center">
                    <Col>
                        <Button block='true' style={{height:'100%', width:'Auto' , margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={hospitalBed}
                                    size={{
                                        xs: 120,
                                        sm: 120,
                                        md: 120,
                                        lg: 120,
                                        xl: 140,
                                        xxl: 160,
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Hospital Bed
                            </Col>
                        </Row>
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={labTests}
                                    size={{
                                        xs: 120,
                                        sm: 120,
                                        md: 120,
                                        lg: 120,
                                        xl: 140,
                                        xxl: 160,
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Lab Test
                            </Col>
                        </Row>
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={medicines}
                                    size={{
                                        xs: 120,
                                        sm: 120,
                                        md: 120,
                                        lg: 120,
                                        xl: 140,
                                        xxl: 160,
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Medicines
                            </Col>
                        </Row>
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={consultation}
                                    size={{
                                        xs: 120,
                                        sm: 120,
                                        md: 120,
                                        lg: 120,
                                        xl: 140,
                                        xxl: 160,
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Consultation
                            </Col>
                        </Row>
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={insurance}
                                    size={{
                                        xs: 120,
                                        sm: 120,
                                        md: 120,
                                        lg: 120,
                                        xl: 140,
                                        xxl: 160,
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Insurance
                            </Col>
                        </Row>
                        </Button>
                    </Col>
                    <Col>
                        <Button 
                        style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}
                        
                        onClick={()=>{
                            Modal.confirm({
                                title:" Please Confirm You want to Book Ambulance and check Below Details",
                                content:(
                                        <div
                                        >ETA: X mins
                                        <br />
                                        Charge: XX INR
                                        <br />
                                        <Form>
                                            <Form.Item>
                                                <Checkbox onChange={(value)=>{
                                                    if(value.target.checked)Modal.confirm({
                                                        title: "Patient Details",
                                                        content: (<div>
                                                            <Form.Item label="name">
                                                                <Input />
                                                            </Form.Item>
                                                            <Form.Item label="age">
                                                                <Input />
                                                            </Form.Item>
                                                            <Form.Item label="Emergency Contact">
                                                                <Input />
                                                            </Form.Item>
                                                        </div>)
                                                    })
                                                }}>I am booking for Someone else</Checkbox>
                                            </Form.Item>
                                        </Form>
                                        
                                        
                                        </div>),
                                onOk: () => {
                                    Modal.success({
                                    title: "Ambulance is on the way.",
                                    content: (
                                        <Form >
                                            <label>All details below are optional</label>
                                            <Form.Item label="Patient Symptoms">
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label="Type of Incident">
                                                <Radio.Group>
                                                    <Radio value="accident">
                                                        Accident 
                                                    </Radio>
                                                    <Radio value="medSit">
                                                        Ongoing Medical Situation 
                                                    </Radio>
                                                    <Radio value="other">
                                                        Other 
                                                    </Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                            <Form.Item label="Further details if any">
                                                <Input />
                                            </Form.Item>
                                        </Form>
                                    )
                                })},
                        });
                        }}

                        >
                        <Row>
                            <Col>
                                <Avatar
                                    src={ambulance}
                                    size={{
                                        xs: 120,
                                        sm: 120,
                                        md: 120,
                                        lg: 120,
                                        xl: 140,
                                        xxl: 160,
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Ambulance
                            </Col>
                        </Row>
                        </Button>
                    </Col>
            </Row>
        </div>
    );
}

export default EmergencyServices;