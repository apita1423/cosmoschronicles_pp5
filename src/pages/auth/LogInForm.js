import React, { useState } from "react";
import axios from "axios";

import { Form, Alert, Button, Col, Row, Image, Container } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/LogInRegisterForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

function LogInForm() {
    const setCurrentUser = useSetCurrentUser();
    useRedirect("loggedIn");

    const [logInData, setLogInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = logInData;

    const [errors, setErrors] = useState({});

    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("/dj-rest-auth/login/", logInData);
            setCurrentUser(data.user);
            setTokenTimestamp(data);
            history.goBack();
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    const handleChange = (event) => {
        setLogInData({
            ...logInData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto p-0 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>Log In</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="username" className={styles.Input} value={username} onChange={handleChange} aria-label="usernmae" />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" className={styles.Input} value={password} onChange={handleChange} aria-label="password" />
                        </Form.Group>
                        {errors.password?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
                            Log In
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/register">
                        Don't have an account? <span>Register Now!</span>
                    </Link>
                </Container>
            </Col>
            <Col md={6} className={`my-auto d-none d-md-block p-2 ${styles.LogInCol}`}>
                <Image className={`${appStyles.FillerImage}`} src={"https://res.cloudinary.com/db5hwihda/image/upload/v1717172307/space-16_t1ykdd.jpg"} />
            </Col>
        </Row>
    );
}

export default LogInForm;
