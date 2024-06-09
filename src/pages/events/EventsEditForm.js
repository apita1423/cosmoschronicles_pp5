import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefault";


function EventEditForm() {
    const [errors, setErrors] = useState({});

    const [eventsData, setEventsData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        city: "",
        country: "",
        audience: "",
        price: "",
        event_url: "",
    });
    const { title, description, date, time, city, country, audience, price, event_url } = eventsData;

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/events/${id}/`);
                const { title, description, date, time, city, country, audience, price, event_url, is_owner, } = data;

                is_owner ? setEventsData({ title, description, date, time, city, country, audience, price,event_url }) : history.push("/");
            } catch (err) {
                // console.log(err);
            }
        };

        handleMount();
    }, [history, id]);

    const handleChange = (event) => {
        setEventsData({
            ...eventsData,
            [event.target.name]: event.target.value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("date", date);
        formData.append("time", time);
        formData.append("city", city);
        formData.append("country", country);
        formData.append("audience", audience);
        formData.append("price", price);
        formData.append("event_url", event_url);


        try {
            await axiosReq.put(`/events/${id}/`, formData);
            history.push(`/events/${id}`);
        } catch (err) {
            // console.log(err);

            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <Container className={`${appStyles.Content} ${styles.Container}`}>
            <h1 className="text-center"><i className="fas fa-satellite"></i>Add Event<i className="fas fa-satellite"></i></h1>
            <br />
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control type="text" name="title" value={title} onChange={handleChange} aria-label="title" />
                </Form.Group>
                {errors?.title?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group>
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control as="textarea" rows={6} name="description" value={description} onChange={handleChange} aria-label="description" />
                </Form.Group>
                {errors?.description?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group>
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type="date" name="date" value={date} onChange={handleChange} aria-label="date" />
                </Form.Group>
                {errors?.date?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group>
                    <Form.Label>Event Time</Form.Label>
                    <Form.Control type="time" name="time" value={time} onChange={handleChange} aria-label="time" />
                </Form.Group>
                {errors?.time?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group>
                    <Form.Label>Event City</Form.Label>
                    <Form.Control type="text" name="city" value={city} onChange={handleChange} aria-label="city" />
                </Form.Group>
                {errors?.city?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group>
                    <Form.Label>Event Country</Form.Label>
                    <Form.Control type="text" name="country" value={country} onChange={handleChange} aria-label="country" />
                </Form.Group>
                {errors?.country?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group>
                    <Form.Label>Event Audience</Form.Label>
                    <Form.Control type="text" name="audience" value={audience} onChange={handleChange} aria-label="audience" />
                </Form.Group>
                {errors?.audience?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group>
                    <Form.Label>Event Price</Form.Label>
                    <Form.Control type="text" name="price" value={price} onChange={handleChange} aria-label="price" />
                </Form.Group>
                {errors?.price?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group>
                    <Form.Label>Event URL</Form.Label>
                    <Form.Control type="url" name="event_url" value={event_url} onChange={handleChange} aria-label="event_url" />
                </Form.Group>
                {errors?.event_url?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Button className={`${btnStyles.Button} ${btnStyles.Purple}`} onClick={() => history.goBack()}>Cancel</Button>

                <Button className={`${btnStyles.Button} ${btnStyles.Purple}`} type="submit">Create Event</Button>
            </Form>
        </Container>
    );
}

export default EventEditForm;
