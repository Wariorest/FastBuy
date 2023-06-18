import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modal/CreateType";
import CreateBrand from "../components/modal/CreateBrand";
import CreateDevice from "../components/modal/CreateDevice";
import ShowOrders from "../components/modal/ShowOrders";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    const [orderListVisible, setOrderListVisible] = useState(false);
    return (
        <Container className={"d-flex flex-column"}>
           <Button
               variant={"outline-dark"}
               className={"mt-4 p-2"}
               onClick={()=> setTypeVisible(true)}
           >
               Add type
           </Button>
           <Button
               variant={"outline-dark"}
               className={"mt-4 p-2"}
               onClick={()=> setBrandVisible(true)}
           >
               Add brand
           </Button>
           <Button
               variant={"outline-dark"}
               className={"mt-4 p-2"}
               onClick={()=> setDeviceVisible(true)}
           >
               Add device
           </Button>
            <Button
               variant={"outline-dark"}
               className={"mt-4 p-2"}
               onClick={()=> setOrderListVisible(true)}
           >
               Show Orders
           </Button>
            <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={()=> setDeviceVisible(false)}/>
            <ShowOrders show={orderListVisible} onHide={()=> setOrderListVisible(false)}/>
        </Container>
    );
};

export default Admin;