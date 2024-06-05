import React from "react";
import { Container, Card, Media } from "react-bootstrap";
import styles from "../../styles/Chronicle.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
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
        image,
        image_copyright,
        published_on,
        category,
        author,
        chroniclePage,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory

    const handleEdit = () => {
        history.push(`/news/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/news/${id}/`);
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
                        {is_owner && chroniclePage && <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />}
                    </div>
                </Media>
            </Card.Body>
            <Container>
                <h2>
                    <p>{title}</p>
                </h2>
                <Link to={`/news/${id}`}>
                    <Card.Img src={image} alt={title} />
                </Link>
                <p><strong>Image Copyright:</strong>  {image_copyright}</p>
                <br />
                <p><strong>Summary:</strong> {description}</p>
                <br />
                <p><strong>Author:</strong> {author}</p>
                <p><strong>Category:</strong> {category}</p>
            </Container>
        </Card>
    )
}

export default Chronicle;