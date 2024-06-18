import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/AboutUs.module.css";
import AboutUs from "../assets/about-us.png";
import Asset from "../components/Asset";
import Link from "react-router-dom/Link";

function aboutUs() {
    return (
        <Container className={styles.Content}>
            <h2>
                <b className={styles.Bold}>Who We Are</b>
            </h2>
            <p className={styles.Paragraph}>
                Welcome to Cosmos Chronicles, your social media app dedicated to the wonders of astronomy! Our mission is to bring together space enthusiasts, amateur astronomers, and space artists to share their passion for the cosmos. At Cosmos Chronicles, we believe that the night sky is a gateway to
                endless curiosity and discovery, and we aim to make stargazing a collective and enriching experience.
            </p>
            <hr />
            <h2>
                <b className={styles.Bold}>Our Story</b>
            </h2>
            <p className={styles.Paragraph}>
                Cosmos Chronicles was born out of a shared love for astronomy and the desire to create a vibrant community where people can connect, learn, and inspire each other. Our founders, a group of astronomy aficionados and tech enthusiasts, envisioned a platform where the beauty of the universe can
                be celebrated and explored together.
            </p>
            <hr />
            <h2>
                <b className={styles.Bold}>What We Offer</b>
            </h2>
            <p className={styles.Paragraph}>
                <b>
                    <i className="fas fa-user-astronaut"></i> Community Engagement:
                </b>{" "}
                Join a diverse and inclusive community of astronomy lovers. Share your stargazing experiences, celestial photography, and cosmic discoveries with fellow enthusiasts.
            </p>
            <p className={styles.Paragraph}>
                <b>
                    <i className="fas fa-user-astronaut"></i> Event Coordination:
                </b>{" "}
                Stay updated on celestial events such as meteor showers, eclipses, launches, and much more. Organise or join local and virtual stargazing events.
            </p>
            <p className={styles.Paragraph}>
                <b>
                    <i className="fas fa-user-astronaut"></i>
                    Educational Content:
                </b>{" "}
                Have acces to a wealth of resources including articles, tutorials, and live streams from experts, to deepen your understanding of the universe.
            </p>
            <p className={styles.Paragraph}>
                <b>
                    <i className="fas fa-user-astronaut"></i>Collaborative Projects:
                </b>{" "}
                <b>COMING SOON</b> Engage in citizen science projects and contribute to real astronomical research alongside professionals and institutions. 
            </p>
            <hr />
            <h2>
                <b className={styles.Bold}>Our Vision</b>
            </h2>
            <p className={styles.Paragraph}>
                We envision a world where the fascination with the universe transcends boundaries and connects people from all walks of life. At Cosmos Chronicles, we strive to make astornomy accessible and enjoyable for everyone, fostering a sense of wonder and exploration that knows no limits.
            </p>
            <p className={styles.Paragraph}><Link to={`/register`}>Join us</Link> on the cosmic journey and be part of a community that reaches for the stars. Together, we can uncover the mysteries of the universe and share the joy of stargazing with the world.</p>
            <div>
                <Asset src={AboutUs} alt={"about us image"} />
            </div>
            <Row className={styles.SocialMedia}>
                <a className="text-white" href="https://www.facebook.com/" target="blank" rel="noopener" aria-label="Visit our Facebook page (opens in a new tab)">
                    {" "}
                    <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a className="text-white" href="https://twitter.com/" target="blank" rel="noopener" aria-label="Visit our Twitter page (opens in a new tab)">
                    <i className="fa-brands fa-square-x-twitter"></i>
                </a>
                <a className="text-white" href="https://www.instagram.com/" target="blank" rel="noopener" aria-label="Visit our Instagram page (opens in a new tab)">
                    <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a className="text-white" href="https://www.youtube.com/" target="blank" rel="noopener" aria-label="Visit our YouTube page (opens in a new tab)">
                    {" "}
                    <i className="fa-brands fa-youtube"></i>
                </a>
            </Row>
            <Row className={styles.Copyright}>
                <p>
                    Made with <i className="fas fa-heart"></i> by Amanda Pita for educational purposes only.
                </p>
            </Row>
        </Container>
    );
}

export default aboutUs;
