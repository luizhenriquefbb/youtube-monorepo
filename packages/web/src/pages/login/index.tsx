import React, { useCallback, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../contexts/authContext";


const Login: React.FC = () => {


    const {logIn, logOut } = useAuth();

    const [userName, setUserName] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");

    const handleLogin = useCallback((evt: React.FormEvent<HTMLFormElement>) => {

        evt.preventDefault();

        logIn(userName, userPassword);

    }, [logIn, userName, userPassword])

    const handleLogout = useCallback(() => {


        logOut();

    }, [logOut,])

    return <>
        <Container className="LoginForm" as="form"
            onSubmit={(evt:any) => handleLogin(evt)}>
            <Row className="">
                <Col as="h1"> Login </Col>
            </Row>

            <Row className="input-group">
                <Col>
                    <input
                        type="text"
                        placeholder="Usuário"
                        value={userName}
                        onChange={(evt) => setUserName(evt.target.value)}
                    />
                </Col>
            </Row>

            <Row className="input-group">
                <Col>
                    <input
                        type="text"
                        placeholder="Senha"
                        value={userPassword}
                        onChange={(evt) => setUserPassword(evt.target.value)}
                    />
                </Col>
            </Row>

            <Row className="">
                <button type="submit">Entrar</button>
                <button type="button" onClick={() => handleLogout()}>Sair</button>
                <span className='forgot-password-a'>Esqueci a senha</span>
            </Row>

        </Container>
    </>

}

export default Login;