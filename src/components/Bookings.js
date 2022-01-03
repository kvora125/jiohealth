import React from "react";
import { Card,Row,Col, Avatar, Space } from "antd";
import ambulance from '../Assets/icons/EmergencyServices/ambulance.png'
import hospitalBed from '../Assets/icons/EmergencyServices/hospitalBed.png'

const Bookings =() =>{
    return (
        <div>
            <Card title="Ambulance">
                <Row>
                    <Space>
                        <Col>
                            <Avatar
                                src={ambulance}
                                shape="square"
                                size={{
                                    xs: 80,
                                    sm: 100,
                                    md: 100,
                                    lg: 120,
                                    xl: 140,
                                    xxl: 160,
                                }}
                            />
                            </Col>
                            <Col>
                            DriverName: ABC XYZ
                            <br />
                            Drver Contact: +AB XXX XXX XXXX
                            <br />
                            ETA : X mins
                            <br />
                            Ambulance Plate No. : ABXX XX XXXX
                        </Col>
                    </Space>
                </Row>
                </Card>
                <Card title="Bed Boooking">
                <Row>
                    <Space>
                        <Col>
                            <Avatar
                                src={hospitalBed}
                                shape="square"
                                size={{
                                    xs: 80,
                                    sm: 100,
                                    md: 100,
                                    lg: 120,
                                    xl: 140,
                                    xxl: 160,
                                }}
                            />
                            </Col>
                            <Col>
                            Room No: ABC XYZ
                            <br />
                            Room Type: PWR
                            <br />
                            Hospital Contact: +AB XXX XXX XXXX
                            <br />
                            location : <a>click here</a>
                        </Col>
                    </Space>
                </Row>
            </Card>
            <Card title="Lab Test">
                <Row>
                    <Space>
                        <Col>
                            <Avatar
                                src={hospitalBed}
                                shape="square"
                                size={{
                                    xs: 80,
                                    sm: 100,
                                    md: 100,
                                    lg: 120,
                                    xl: 140,
                                    xxl: 160,
                                }}
                            />
                            </Col>
                            <Col>
                            <br />
                            Test Type: PWR
                            <br />
                            Lab Contact: +AB XXX XXX XXXX
                            <br />
                            location : <a>click here</a>
                            <br />
                            Allocated Time : XX:YY (A/P)M
                        </Col>
                    </Space>
                </Row>
            </Card>
        </div>
    );
}

export default Bookings;