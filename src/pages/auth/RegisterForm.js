
import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/LogInRegisterForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const RegisterForm = () => {
    return (
      <Row className={styles.Row}>
        <Col className="my-auto py-2 p-md-2" md={6}>
          <Container className={`${appStyles.Content} p-4 `}>
            <h1 className={styles.Header}>Register</h1>

            <Form>
              <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control className={styles.Input} type="text" placeholder="Username" name="username" />
              </Form.Group>

              <Form.Group controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control className={styles.Input} type="password" placeholder="Password" name="password1" />
              </Form.Group>

              <Form.Group controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control className={styles.Input} type="password" placeholder="Confirm Password" name="password2" />
              </Form.Group>
              <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
                Register
              </Button>
            </Form>
          </Container>
          <Container className={`mt-3 ${appStyles.Content}`}>
            <Link className={styles.Link} to="/register">
              Already have an account? <span>Log in</span>
            </Link>
          </Container>
        </Col>
        <Col md={6} className={`my-auto d-none d-md-block p-2 ${styles.RegisterCol}`}>
          <Image className={`${appStyles.FillerImage}`} src={"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"} />
        </Col>
      </Row>
    );
};

export default RegisterForm;
