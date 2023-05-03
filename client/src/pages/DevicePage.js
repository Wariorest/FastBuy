import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'm-2000',
        price: 200,
        rating: 5,
        img: 'data:image/jpeg;base64,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'
    };
    const description = [
        {id: 1, title: 'smth text....', description: 'some desctiption text....'},
        {id: 2, title: 'smth text....', description: 'some desctiption text....'},
        {id: 3, title: 'smth text....', description: 'some desctiption text....'},
        {id: 4, title: 'smth text....', description: 'some desctiption text....'},
        {id: 5, title: 'smth text....', description: 'some desctiption text....'},
        {id: 6, title: 'smth text....', description: 'some desctiption text....'},

    ]
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
                            description.map((info, index) =>
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