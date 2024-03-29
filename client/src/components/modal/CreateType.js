import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";
import data from "bootstrap/js/src/dom/data";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const addType = ()=>{
        createType({name:value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        placeholder={'Input type name'}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addType}>Add</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;