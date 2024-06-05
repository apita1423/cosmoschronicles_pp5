import React from "react";
import { Card, Media } from "react-bootstrap";
import styles from "../../styles/Chronicle.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefault";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const Chronicle = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        title,
        description,
        image,
        image_copyright,
        published_on,
        category,
        chroniclePage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory

    const handleEdit = () => {
        history.push(`/chronicles/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/chronicles/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err)
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
                        <span>{published_on}</span>
                        {is_owner && chroniclePage && "..."(
                            <DropdownMenu handleEdit={handleEdit} handleDelete={handleDelete} />
                        )}
                    </div>
                </Media>
            </Card.Body>
            <Link to={`/chronicles/${id}`}>
                <Card.Img src={image} alt={title} />
            </Link>
            <Card.Body>
                {title && <Card.Title className="text-center">{title}</Card.Title>}
                {description && <Card.Text>{description}</Card.Text>}
                {image_copyright && <Card.Text>{image_copyright}</Card.Text>}
                {category && <Card.Text>{category}</Card.Text>}
            </Card.Body>
        </Card>
    );
}

export default Chronicle;