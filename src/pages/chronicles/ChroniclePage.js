import React, { useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import Chronicle from "./Chronicle";

import PopularProfiles from "../profiles/PopularProfiles";

function ChroniclePage() {
    const { id } = useParams();
    const [news, setNews] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: news }] = await Promise.all([
                    axiosReq.get(`/news/${id}`),
                    axiosReq.get(`/comments/?news=${id}`),
                ]);
                setNews({ results: [news] });
            } catch (err) {
                // console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <PopularProfiles mobile />
                <Chronicle {...news.results[0]} setNews={setNews} newsPage />
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <PopularProfiles />
            </Col>
        </Row>
    );
}

export default ChroniclePage;