import React, { useState } from "react";
import { Row,Col, Button, Avatar,Modal, Form, Input, Checkbox, Radio, Select, Card, Descriptions, Table }  from "antd";
import ambulance from '../Assets/icons/EmergencyServices/ambulance.png'
import consultation from '../Assets/icons/EmergencyServices/consultation.png'
import hospitalBed from '../Assets/icons/EmergencyServices/hospitalBed.png'
import insurance from '../Assets/icons/EmergencyServices/insurance.png'
import labTests from '../Assets/icons/EmergencyServices/labTests.png'
import medicines from '../Assets/icons/EmergencyServices/medicines.png'

const {Option}=Select;

const EmergencyServices =() =>{
    const [searchCity,setSearchCity]=useState("Delhi");
    const [hospitalModalVisible,setHospitalModalVisible]=useState(false);
    const [labTestModalVisible,setLabTestModalVisible]=useState(false);
    const hospitalData ={
        Ahmedabad:{
            "Vijay Shalby Hospital": {
                name:"Vijay Shalby Hospital",
                address:"Fire Station, 6, 120 Feet Ring Rd, Near Memnagar, Rupam Society, Navrangpura, Ahmedabad, Gujarat 380009",
                facilities:["multi specialty health care",],
                costs:{
                    "Normal Bed":"2500",
                    "ICU Bed": "4500",
                    "Maternity Bed":"3000",
                },
                availability: "random",
                rating: 4.5,
            },
            "Kalrav Children Hospital": {
                name:"Kalrav Children Hospital",
                address:"Memnagar, Ahmedabad, Gujarat 380052",
                facilities:["Children vaccine and healthcare"],
                costs:{
                    "Normal Bed":"1900",
                },
                availability: "random",
                rating: 5,
            },
            "Sterling Hospital": {
                name:"Sterling Hospital",
                address:"Sterling Hospital Rd, Near maharaja agrasen vidhyalaya, L.K Society, Nilmani Society, Memnagar, Ahmedabad, Gujarat 380052",
                facilities:["Covid Hospital"],
                costs:{
                    "Normal Bed":"3500",
                    "ICU Bed": "6000",
                    "Maternity Bed":"5000",
                },
                availability: "random",
                rating: 5,
            },
        },
        Delhi:{
            "Park Hospital": {
                name:"Park Hospital",
                address:"Bus Depot, Meera Enclave Outer Ring Road Near Kashopur, New Chaukhandi, Vishnu Garden, New Delhi, Delhi 110018",
                facilities:["On call Nurse"," X Ray, ICU", "Speciality Wards"],
                costs:{
                    "Normal Bed":"5000",
                    "ICU Bed": "10000",
                    "Maternity Bed":"7500",
                },
                availability: "random",
                rating: 4.6,
            },
            "Aashlok": {
                name:"Aashlok",
                address:"Aashlok 25 AB, Safdarjung Enclave, New Delhi, Delhi 110029",
                facilities:["ICU", "Normal Ward"],
                costs:{
                    "Normal Bed":"2300",
                    "ICU Bed": "4500",
                },
                availability: "random",
                rating: 3.8,
            },
            "Max Multi Speciality Centre": {
                name:"Max Multi Speciality Centre",
                address:"N 110, Block N, Panchsheel Park North, Panchsheel Park, New Delhi, Delhi 110017",
                facilities:["Eye Care", "Gynaecology", "IVF", "Dental", "ENT", "Obstetrics", "Health and Wellness"],
                costs:{
                    "Normal Bed":"3400",
                    "Maternity Bed":"6000",
                },
                availability: "random",
                rating: 4.2,
            },
        },
        Mumbai:{
            "Lilavati Hospital And Research Centre": {
                name:"Lilavati Hospital And Research Centre",
                address:"A-791, Bandra Reclamation Rd, General Arunkumar Vaidya Nagar, Bandra West, Mumbai, Maharashtra 400050",
                facilities:["COVID-19 hospital"],
                costs:{
                    "Normal Bed":"10000",
                    "ICU Bed": "18000",
                    "Maternity Bed":"12000",
                },
                availability: "random",
                rating: 4.5,
            },
            "Zen Multi Speciality Hospital": {
                name:"Zen Multi Speciality Hospital",
                address:"Plot No, 425, 10th Rd, near Sandu Garden, Jai Ambe Nagar, Chembur Gaothan, Chembur, Mumbai, Maharashtra 400071",
                facilities:["Normal Bed", "Respiratory Care","Heartcare"],
                costs:{
                    "Normal Bed":"10000",
                    "ICU Bed": "18000",
                    "Maternity Bed":"12000",
                },
                availability: "random",
                rating: 4.5,
            },
            "Wockhardt Hospitals, Mumbai Central": {
                name:"Wockhardt Hospitals, Mumbai Central",
                address:"A-791, Bandra Reclamation Rd, General Arunkumar Vaidya Nagar, Bandra West, Mumbai, Maharashtra 400050",
                facilities:["COVID-19 hospital"],
                costs:{
                    "Normal Bed":"6000",
                    "ICU Bed": "12000",
                    "Maternity Bed":"9000",
                },
                availability: "random",
                rating: 4.2,
            },
        },
    }
    const labTestData=[
        {name:"Erethrocyte Count (RBC Count)", cost: 120,},
        {name:"LFT", cost: 250,},
        {name:"Platelet Count (RBC Count)", cost: 100,},
        {name:"Vitamin B12", cost: 430,},
        {name:"Complete Blood Count (CBC) - EDTA Whole Blood", cost: 450,},
        {name:"Lipid Profile", cost: 350,},
        {name:"Thyroid Profile", cost: 270,},
        {name:"Covid IgG AntiBody", cost: 120,},
        {name:"Covid RTPCR/Covid Swab Test", cost: 1000,},
    ];
    const labTestTableColumns = [
        {
          title: 'Test Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Cost',
          dataIndex: 'cost',
          key: 'cost',
        },
        {
          title: 'Action',
          key: 'address',
          render:(text, record) => (
              <Button onClick={()=>{
                  Modal.success({title:`${record.name} Test Booked Succcessfully. Further Dtails have been Mailed to you and sent in an sms on your registered mobile number. We wil contact you for finalising time and other necesssary details.`});
                  setLabTestModalVisible(false);
              }}>BOOK</Button>
          )
        },
      ];
    return (
        <div>
            <Row justify="center">
                    <Col>
                        <Button onClick={()=>{setHospitalModalVisible(true); }} block='true' style={{height:'100%', width:'Auto' , margin:'10px', outline:'none', border: 'none'}}>
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
                        <Button onClick={()=>setLabTestModalVisible(true) } style={{height:'100%', width:'Auto', margin:'10px', outline:'none', border: 'none'}}>
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
            <Modal
                visible={hospitalModalVisible}
                width={'100vw'}
                footer={[]}
                onCancel={()=>{
                        setHospitalModalVisible(false);
                    }
                }
            >
                <Form.Item label=" Select A City :" style={{marginTop:'10px', marginLeft:'50px',width:'50%'}}>
                    <Select style={{marginLeft:'10px'}} defaultValue={searchCity} onChange={(value)=>{setSearchCity(value);}}>
                        {Object.keys(hospitalData).map(key=>{
                            return (<Option key={key} value={key}>{key}</Option>)
                        })}
                    </Select>
                </Form.Item>
                {Object.keys(hospitalData[searchCity]).map(key=>{
                    return(
                        <Card style={{marginTop:'10px'}} key={hospitalData[searchCity][key]['name']} title={hospitalData[searchCity][key]['name']}>
                            <Descriptions bordered size="small" layout="vertical">
                            <Descriptions.Item label="Address">{hospitalData[searchCity][key]['address']}</Descriptions.Item>
                            <Descriptions.Item label="Facilities">{hospitalData[searchCity][key]['facilities'].join(", ")}</Descriptions.Item>
                            <Descriptions.Item label="Availability">{hospitalData[searchCity][key]['availability']}</Descriptions.Item>
                            <Descriptions.Item label="Rating">{hospitalData[searchCity][key]['rating']}</Descriptions.Item>
                            <Descriptions.Item label="Bed Costs">
                            <Radio.Group defaultValue="Normal Bed">
                                {Object.keys(hospitalData[searchCity][key]['costs']).map(subkey=>{
                                    return(<Radio key={key+subkey} value={subkey}>{subkey}: {hospitalData[searchCity][key]['costs'][subkey]}</Radio>)
                                })}
                            </Radio.Group>
                            <Button onClick={()=>{
                                Modal.success({title:"Hospital bed booked with booking ID: XYZ XZY YXZ. Further details have been sent to your mobile and email-ID for security purposes"});
                                setHospitalModalVisible(false);
                            }}>
                                Book
                            </Button>
                            </Descriptions.Item>
                            </Descriptions>
                        </Card>
                    )
                })}
            </Modal>
            <Modal
                visible={labTestModalVisible}
                width={'100vw'}
                footer={[]}
                onCancel={()=>{
                        setLabTestModalVisible(false);
                    }
                }
            >
                <Form.Item label=" Select A City :" style={{marginTop:'10px', marginLeft:'50px',width:'50%'}}>
                    <Select style={{marginLeft:'10px'}} defaultValue={searchCity} onChange={(value)=>{setSearchCity(value);}}>
                        {Object.keys(hospitalData).map(key=>{
                            return (<Option key={key} value={key}>{key}</Option>)
                        })}
                    </Select>
                </Form.Item>
                <Table dataSource={labTestData} columns={labTestTableColumns} />
            </Modal>
        </div>
    );
}

export default EmergencyServices;