import React from "react";

import styles from "../../styles/Chronicle.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Container, Media, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Chronicle = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        title,
        description,
        author,
        published_on,
        category,
        image,
        image_copyright,
        chroniclePage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    return (
        <Container fluid className={styles.Chronicle}>
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={55} />
                    {owner}
                </Link>
                <div className="d-flex align-items-center">
                    <span>{published_on}</span>
                    {is_owner && chroniclePage && "..."}
                </div>
            </Media>

            <Col className={styles.Chronicle}>
                <Link to={`/news/${id}`}>
                    <img src={image} alt={title} />
                </Link>
                <Col>
                    {title && <Card.Title className="text-center">{title}</Card.Title>}
                    <p><strong>Author: </strong>{author}</p>
                    <p><strong>Category: </strong>{category}</p>
                    <p><strong>Summary: </strong>{description}</p>
                    <p><strong>Image Copyright: </strong>{image_copyright}</p>
                </Col>
            </Col>
        </Container>
    )
}

export default Chronicle