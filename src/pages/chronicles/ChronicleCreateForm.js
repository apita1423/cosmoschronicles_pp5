import React, { useRef, useState } from "react";

import { Form, Button, Row, Col, Container, Alert, Image } from "react-bootstrap";

import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/ChronicleCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefault";
import { useRedirect } from "../../hooks/useRedirect";

function ChronicleCreateForm() {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});

    const [newsData, setNewsData] = useState({
        title: "",
        description: "",
        author: "",
        published_on: "",
        image: "",
        image_copyright: "",
        category: "",
    });
    const { title, description, author, published_on, image, image_copyright, category } = newsData;

    const imageInput = useRef(null);
    const history = useHistory();

    const handleChange = (event) => {
        setNewsData({
            ...newsData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setNewsData({
                ...newsData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("author", author);
        formData.append("published_on", published_on);
        formData.append("image", imageInput.current.files[0]);
        formData.append("image_copyright", image_copyright);
        formData.append("category", category);

        try {
            const { data } = await axiosReq.post("/news/", formData);
            history.push(`/news/${data.id}`);
        } catch (err) {
            // console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={handleChange} aria-label="title" />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={6} name="description" value={description} onChange={handleChange} aria-label="description" />
            </Form.Group>
            {errors?.description?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author" value={author} onChange={handleChange} aria-label="author" />
            </Form.Group>
            {errors?.author?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Published On</Form.Label>
                <Form.Control type="date" name="published_on" value={published_on} onChange={handleChange} aria-label="published on" />
            </Form.Group>
            {errors?.published_on?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Image Copyright</Form.Label>
                <Form.Control type="text" name="image_copyright" value={image_copyright} onChange={handleChange} aria-label="image copyright" />
            </Form.Group>
            {errors?.image_copyright?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control as="select" name="category" value={category} onChange={handleChange} aria-label="category">
                    <option>Choose a Category</option>
                    <option value="space news">Space News</option>
                    <option value="exploration">Exploration</option>
                    <option value="stargazing tips">Stargazing Tips</option>
                    <option value="education">Education</option>
                    <option value="space missions">Space Missions</option>
                    <option value="astronomy events">Astronomy Events</option>
                    <option value="technology">Technology</option>
                </Form.Control>
            </Form.Group>
            {errors?.category?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button className={`${btnStyles.Button} ${btnStyles.Purple}`} onClick={() => history.goBack()}>Cancel</Button>

            <Button className={`${btnStyles.Button} ${btnStyles.Purple}`} type="submit">Post News</Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2">
                    <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
                        <h2 className="text-center"><i className="fas fa-satellite"></i>Add News<i className="fas fa-satellite"></i></h2>
                        <br />
                        <Form.Group className="text-center" aria-label="image">
                            {image ? (
                                <>
                                    <figure>
                                        <Image className={appStyles.Image} src={image} rounded />
                                    </figure>
                                    <div>
                                        <Form.Label className={`${btnStyles.Button} ${btnStyles.Purple} btn`} htmlFor="image-upload">Change the Image</Form.Label>
                                    </div>
                                </>
                            ) : (
                                <Form.Label htmlFor="image-upload">
                                    <Asset src={Upload} message="Click to upload an image" />
                                </Form.Label>
                            )}

                            <Form.File id="image-upload" accept="image/*" onChange={handleChangeImage} ref={imageInput} />
                        </Form.Group>
                        {errors?.image?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}

                        <div className="d-none d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

export default ChronicleCreateForm;