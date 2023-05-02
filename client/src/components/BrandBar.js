import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Container} from "react-bootstrap";

const BrandBar = observer (() => {
    const {device} = useContext(Context);
    return (
        <Container className="d-flex flex-wrap">
            {device.brands.map((brand)=>
                <Card
                    key={brand.id}
                    className="p-3"
                    onClick={()=> device.setSeectedBrand(brand)}
                    border={ brand.id === device.selectedBrand.id ? "dark" : "light"}
                    style={{cursor:"pointer"}}
                >
                    {brand.name}
                </Card>
            )}
        </Container>
    );
});

export default BrandBar;