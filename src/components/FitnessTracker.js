import React from "react";
import { Row,Col, Button, Avatar } from "antd";
import fitness from '../Assets/icons/FitnessTracker/fitness.png'
import healthDetails from '../Assets/icons/FitnessTracker/HealthDetails.png'
import calories from '../Assets/icons/FitnessTracker/calories.png'
import exerscise from '../Assets/icons/FitnessTracker/exerscise.png'
import meditation from '../Assets/icons/FitnessTracker/meditation.png'
import mentalHealth from '../Assets/icons/FitnessTracker/mentalHealth.png'

const FitnessTracker =() =>{
    return (
        <div>
            <Row justify="center">
                    <Col >
                        <Button block='true' style={{height:'100%', width:'Auto' , margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={fitness}
                                    shape="square"
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
                        <center> Workout Tracking</center>
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={healthDetails}
                                    shape="square"
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
                        <center> Health Details</center>
                        </Button>
                    </Col>
                    <Col >
                        <Button style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={exerscise}
                                    shape="square"
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
                        <center>Activity</center>
                        </Button>
                    </Col>
                    <Col >
                        <Button style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={calories}
                                    shape="square"
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
                        <center> Calorie Tracker </center>
                        </Button>
                    </Col>
                    <Col >
                        <Button style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    shape="square"
                                    src={meditation}
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
                        <center> Mindfulness</center>
                        </Button>
                    </Col>
                    <Col >
                        <Button style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    shape="square"
                                    src={mentalHealth}
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
                        <center>Health Bytes</center>
                        </Button>
                    </Col>
            </Row>
        </div>
    );
}

export default FitnessTracker;