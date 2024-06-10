import React from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefault";
import { MoreDropdown } from "../../components/MoreDropdown";

const Event = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        title,
        description,
        date,
        time,
        city,
        country,
        audience,
        price,
        event_url,
        created_on,
        eventsPage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/events/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/events/${id}/`);
            history.goBack();
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <Container className={styles.Event}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span><strong>Created On: </strong>{created_on}</span>
                        {is_owner && eventsPage && (<MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />)}
                    </div>
                </Media>
            </Card.Body>

            <Card.Body>
                <Link to={`/events/${id}`}>
                    <h2>{title}</h2>
                </Link>
                <br />
                <p><strong>Description: </strong> {description}</p>
                <p><strong>Date: </strong> {date} | <strong>Time: </strong>{time}</p>
                <p><strong>City: </strong>{city} | <strong>Country: </strong>{country}</p>
                <p><strong>Audience: </strong> {audience}</p>
                <p><strong>Price: </strong> {price}</p>
                <p><strong>Want more information? </strong>Click Here: <a target="_blank" rel="noreferrer" href={event_url}>Event Link</a></p>
            </Card.Body>
        </Container>
    );
};

export default Event;