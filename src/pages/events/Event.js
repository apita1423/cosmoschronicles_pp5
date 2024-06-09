import React from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
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
            console.log(err);
        }
    };

    return (
        <Card className={styles.Event}>
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
                <h1>{title}</h1>
                <br />
                <p>Description: {description}</p>
                <p>When: {date} | {time}</p>
                <p>Where: {city} | {country}</p>
                <p>Who: {audience}</p>
                <p>How much? {price}</p>
                <p>Want more information? Click Here: <a target="_blank" rel="noreferrer" href={event_url}>Event Link</a></p>
            </Card.Body>
        </Card>
    );
};

export default Event;