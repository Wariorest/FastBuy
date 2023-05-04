import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
//import star from '../assets/raiting_star.png';
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    //console.log(navigate)
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)} >
            <Card
                style={{width:150, cursor:'pointer'}}
                border={"light"}
            >
                <Image
                    src={device.img}
                    width={150}
                    height={150}
                />
                <div className={"text-black-50 d-flex justify-content-between align-items-center mt-2"}>
                    <div>
                        Test item for selling...
                    </div>

                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;