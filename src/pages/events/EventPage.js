import React, { useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import Event from "./Event";


function EventPage() {
    const { id } = useParams();
    const [events, setEvents] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: events }] = await Promise.all([
                    axiosReq.get(`/events/${id}`),
                ]);
                setEvents({ results: [events] });
            } catch (err) {
                // console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <Row className="h-100">
            <Col>
                <Event {...events.results[0]} setEvents={setEvents} eventsPage />
            </Col>
        </Row>
    );
}

export default EventPage;