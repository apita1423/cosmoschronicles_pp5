// eslint-disable-next-line 
import React, { useEffect, useState } from "react";

import { Col, Row, Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import Chronicle from "./Chronicle";

function ChroniclePage() {
    const { id } = useParams();
    const [chronicle, setChronicle] = useState({ results: [0] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: chronicle }] = await Promise.all([
                    axiosReq.get(`/news/${id}`),
                ]);
                setChronicle({ results: [chronicle] });
                console.log(chronicle);
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <p>Popular profiles for mobile</p>
                <Chronicle {...chronicle.results[0]} setChronicle={setChronicle} chroniclePage />
                <Container className={appStyles.Content}>Comments</Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                Popular Files for desktop
            </Col>
        </Row>
    );
}

export default ChroniclePage;