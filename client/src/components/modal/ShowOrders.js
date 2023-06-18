import React, {Component, useState} from 'react';
import {createBrand, makeOrder} from "../../http/deviceAPI";
import {Button, Form, Modal} from "react-bootstrap";

const ShowOrders = ({show, onHide}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [info, setInfo] = useState('');

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Order form
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form

                >
                    <Form.Control
                        placeholder={'Input your name'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={'mb-3'}
                    />
                    <Form.Control
                        placeholder={'Input phone number'}
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className={'mb-3'}
                    />
                    <Form.Control
                        placeholder={'Input additional info about device'}
                        value={info}
                        onChange={e => setInfo(e.target.value)}
                        className={'mb-3'}
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>

                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowOrders;

