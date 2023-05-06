import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async ()=>{
        if (isLogin){
            const response = await login(email,password)
        }else {
            const response = await registration(email,password)
        }

    }

    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Authorization" : "Sign up"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        className="mt-3"
                        variant="outline-dark"
                        onClick={click}
                    >
                        {isLogin? "Sign in": "Sign up"}

                    </Button>
                    {isLogin ?
                        <div className="mt-3">

                            Don't have account? <NavLink to={REGISTRATION_ROUTE}>
                            Sign up! </NavLink>
                        </div>
                        :
                        <div className="mt-3">

                            Have account? <NavLink to={LOGIN_ROUTE}>
                            Sign in! </NavLink>
                        </div>
                    }
                </Form>
            </Card>

        </Container>
    );
};

export default Auth;