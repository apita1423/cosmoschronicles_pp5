import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/LogInRegisterForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useRedirect } from "../../hooks/useRedirect";

const RegisterForm = () => {
    useRedirect("loggedIn");
    const [registerData, setRegisterData] = useState({
        username: "",
        password1: "",
        password2: "",
    });

    const { username, password1, password2 } = registerData;

    const [errors, setErrors] = useState({});

    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", registerData);
            history.push("/login");
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    const handleChange = (event) => {
        setRegisterData({
            ...registerData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>Register</h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">username</Form.Label>
                            <Form.Control className={styles.Input} type="text" placeholder="Username" name="username" value={username} onChange={handleChange} aria-label="username" />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">password</Form.Label>
                            <Form.Control className={styles.Input} type="password" placeholder="Password" name="password1" value={password1} onChange={handleChange} aria-label="password" />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">confirm Password</Form.Label>
                            <Form.Control className={styles.Input} type="password" placeholder="Confirm Password" name="password2" value={password2} onChange={handleChange} aria-label="password2" />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
                            Register
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">
                                {message}
                            </Alert>
                        ))}
                    </Form>
                </Container>

                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/login">
                        Already have an account? <span>Log in</span>
                    </Link>
                </Container>
            </Col>

            <Col md={6} className={`my-auto d-none d-md-block p-2 ${styles.RegisterCol}`}>
                <Image className={`${appStyles.FillerImage}`} src={"https://res.cloudinary.com/db5hwihda/image/upload/v1717172597/space-17_qmipgz.jpg"} />
            </Col>
        </Row>
    );
};

export default RegisterForm;
