import React from "react";
import styles from "../../styles/Chronicle.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefault";
import { MoreDropdown } from "../../components/MoreDropdown";

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
        newsPage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/news/${id}/`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/news/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card className={styles.Chronicle}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span><strong>Published On: </strong>{published_on}</span>
                        {is_owner && newsPage && (<MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />)}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/news/${id}`}>
                <Card.Img src={image} alt={title} />
            </Link>
            <Card.Body>
                <Card.Subtitle className="text-muted"><strong>Image Copyright: </strong>{image_copyright}</Card.Subtitle>
                <br />
                {title && <Card.Title className="text-center">{title}</Card.Title>}
                {author && <Card.Text><strong>Author: </strong>{author}</Card.Text>}
                {description && <Card.Text><strong>Summary: </strong>{description}</Card.Text>}
                {category && <Card.Text><strong>Category: </strong>{category}</Card.Text>}
            </Card.Body>
        </Card>
    );
};

export default Chronicle;