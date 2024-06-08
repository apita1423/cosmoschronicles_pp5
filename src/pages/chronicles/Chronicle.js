import React from "react";
import styles from "../../styles/Chronicle.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
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
        comments_count,
        likes_count,
        like_id,
        title,
        description,
        author,
        published_on,
        category,
        image,
        image_copyright,
        newsPage,
        setNews,
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

    const handleLike = async () => {
        try {
            const { data } = await axiosRes.post("/likes/", { news: id });
            setNews((prevNews) => ({
                ...prevNews,
                results: prevNews.results.map((news) => {
                    return news.id === id
                        ? { ...news, likes_count: news.likes_count + 1, like_id: data.id }
                        : news;
                }),
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const handleUnlike = async () => {
        try {
            await axiosRes.delete(`/likes/${like_id}/`);
            setNews((prevNews) => ({
                ...prevNews,
                results: prevNews.results.map((news) => {
                    return news.id === id
                        ? { ...news, likes_count: news.likes_count - 1, like_id: null }
                        : news;
                }),
            }));
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
                <Card.Subtitle className="text-muted">{image_copyright}</Card.Subtitle>
            </Link>
            <Card.Body>
                {title && <Card.Title className="text-center">{title}</Card.Title>}
                {author && <Card.Text>{author}</Card.Text>}
                {description && <Card.Text>{description}</Card.Text>}
                {category && <Card.Text>{category}</Card.Text>}
                {is_owner ? (
                    <OverlayTrigger placement="top" overlay={<Tooltip>You can't like your own news!</Tooltip>}>
                        <i className="far fa-heart" />
                    </OverlayTrigger>
                ) : like_id ? (
                    <span onClick={handleUnlike}>
                        <i className={`fas fa-heart ${styles.Heart}`} />
                    </span>
                ) : currentUser ? (
                    <span onClick={handleLike}>
                        <i className={`far fa-heart ${styles.HeartOutline}`} />
                    </span>
                ) : (
                    <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like news!</Tooltip>}>
                        <i className="far fa-heart" />
                    </OverlayTrigger>
                )}
                {likes_count}
                <Link to={`/news/${id}`}>
                    <i className="far fa-comments" />
                </Link>
                {comments_count}
            </Card.Body>
        </Card>
    );
};

export default Chronicle;