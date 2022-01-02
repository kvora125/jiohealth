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
                    <Col span={12}>
                        <Button block='true' style={{height:'100%', width:'Auto' , margin:'10px', float:'right'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={fitness}
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
                        </Row>
                        <Row>
                            <Col>
                                Fitness
                            </Col>
                        </Row>
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button style={{height:'100%', width:'Auto', margin:'10px'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={healthDetails}
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
                        </Row>
                        <Row>
                            <Col>
                                Health Details
                            </Col>
                        </Row>
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button style={{height:'100%', width:'Auto', margin:'10px', float:'right'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={exerscise}
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
                        </Row>
                        <Row>
                            <Col>
                                Exerscise
                            </Col>
                        </Row>
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button style={{height:'100%', width:'Auto', margin:'10px'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={calories}
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
                        </Row>
                        <Row>
                            <Col>
                                Calorie Tracker
                            </Col>
                        </Row>
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button style={{height:'100%', width:'Auto', margin:'10px', float:'right'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={meditation}
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
                        </Row>
                        <Row>
                            <Col>
                                Meditation
                            </Col>
                        </Row>
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button style={{height:'100%', width:'Auto', margin:'10px'}}>
                        <Row>
                            <Col>
                                <Avatar
                                    src={mentalHealth}
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
                        </Row>
                        <Row>
                            <Col>
                                MentalHealth
                            </Col>
                        </Row>
                        </Button>
                    </Col>
            </Row>
        </div>
    );
}

export default FitnessTracker;