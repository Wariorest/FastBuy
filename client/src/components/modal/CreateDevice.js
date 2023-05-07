import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";


const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrand(data))
        fetchDevices(null, null, device.page, device.limit).then(data => {
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])


    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number)=>{
        setInfo(info.filter(i => i.number !== number))
    }
    const selectFile = (e)=>{
        console.log(e.target.files)
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number)=>{
        setInfo(info.map(i => i.number === number ? {...i, [key]:value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        try{
            formData.append('name', name)
            formData.append('price', `${price}`)
            formData.append('img', file)
            formData.append('brandId', device.selectedBrand.id)
            formData.append('typeId', device.selectedType.id)
            formData.append('info', JSON.stringify(info))
            createDevice(formData).then(data => onHide())
        } catch(e){
            alert(e)
        }
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
                    Add new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={'my-3'}>
                        <Dropdown.Toggle>{device.selectedType.name || "Choose type"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={()=> device.setSelectedType(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={'my-3'}>
                        <Dropdown.Toggle> {device.selectedBrand.name || "Choose brand"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={()=> device.setSeectedBrand(brand)}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className={'my-3'}
                        placeholder={'Input device name...'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className={'my-3'}
                        placeholder={'Input device price...'}
                        type={'number'}
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        className={'my-3'}
                        type={'file'}
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Add new device param
                    </Button>
                    {
                        info.map(i =>
                            <Row className={'my-4'} key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title}
                                        placeholder={'Param name'}
                                        onChange={(e)=> changeInfo('title', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        placeholder={'Param description'}
                                        onChange={(e)=> changeInfo('description', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={4} onClick={()=> removeInfo(i.number)}>
                                    <Button variant={'outline-danger'}>Del</Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={addDevice}>Add</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;