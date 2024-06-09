import React, { useState, useEffect } from "react";

import { Form, Container, Row, Col } from "react-bootstrap";

import styles from "../../styles/ChroniclesPage.module.css";
import appStyles from "../../App.module.css";

import Event from "./Event";

import Asset from "../../components/Asset";

import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefault";

import NoResults from "../../assets/not-found.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useRedirect } from "../../hooks/useRedirect";

function EventsPage({ message, filter = "" }) {
    useRedirect("loggedOut");
    const [events, setEvents] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const { data } = await axiosReq.get(`/events/?${filter}search=${query}`);
                setEvents(data);
                setHasLoaded(true);
            } catch (err) {
                // console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchEvents();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname]);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <i className={`fas fa-search ${styles.SearchIcon}`} />
                <Form className={styles.SearchBar} onSubmit={(event) => event.preventDefault()}>
                    <Form.Control value={query} onChange={(event) => setQuery(event.target.value)} type="text" className="mr-sm-2" placeholder="Search Event" aria-label="search Event" />
                </Form>

                {hasLoaded ? (
                    <>
                        {events.results.length ? (
                            <InfiniteScroll
                                children={events.results.map((events) => (
                                    <Event key={events.id} {...events} setEvents={setEvents} />
                                ))}
                                dataLength={events.results.length}
                                loader={<Asset spinner />}
                                hasMore={!!events.next}
                                next={() => fetchMoreData(events, setEvents)}
                            />
                        ) : (
                            <Container className={appStyles.Content}>
                                <Asset src={NoResults} message={message} />
                            </Container>
                        )}
                    </>
                ) : (
                    <Container className={appStyles.Content}>
                        <Asset spinner />
                    </Container>
                )}
            </Col>
        </Row>
    );
}

export default EventsPage;