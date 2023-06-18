import React, {Component, useEffect, useState} from 'react';
import {createBrand, makeOrder} from "../../http/deviceAPI";
import {Button, Col, Form, Modal, Row, Table} from "react-bootstrap";


const ShowOrders = ({show, onHide}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/order');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Order list
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Info</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.info}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>

                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ShowOrders;

