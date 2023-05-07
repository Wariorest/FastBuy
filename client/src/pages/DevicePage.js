import React, {useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
   const [device,setDevice] = useState({info:[]})
    return (
        <Container className="mt-5">
            <Row>
                <Col md={4} className={"d-flex flex-column align-items-center mt-4"}>
                    <h1>{device.name}</h1>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col>
                    <Card
                        className={'d-flex align-items-center justify-content-around py-4 mt-4'}
                        //style={{border:"none"}}
                    >
                        <h3>Description:</h3>
                        {
                            device.info.map((info, index) =>
                                index % 2 === 0 ?
                                    <Row key={info.id} style={{backgroundColor:'lightgrey', padding:3}}>{info.title} : {info.description}</Row>
                                    :
                                    <Row key={info.id} style={{backgroundColor:'whitesmoke', padding:3}}>{info.title} : {info.description}</Row>
                            )
                        }
                    </Card>
                </Col>
                <Col md={4}>
                    <Card
                        className={"d-flex flex-column align-items-center justify-content-around mt-4"}
                        style={{height: 300, width: 300, fontSize: 32, border: '5px solid light'}}
                    >
                        <h3 className={"align-self-center"}>Price from: {device.price} $</h3>
                        <Button
                            variant={"outline-dark"}
                        >
                            Add to cart
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;