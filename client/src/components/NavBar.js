import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";



const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const logOut = ()=>{
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={SHOP_ROUTE}>FastBuy</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Admin panel
                        </Button>
                        <Button
                            variant={"outline-light"}
                            className={"ms-2"}
                            onClick={()=>{
                                logOut()
                            }}
                        >
                            Sign out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;