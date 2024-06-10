import React from "react";
import NotFound from "../assets/not-found.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const notFound = () => {
    return (
        <div className={styles.NotFound}>
            <Asset src={NotFound} message={"404 Error: Sorry, this page is in a different galaxy!"} />
        </div>
    );
};

export default notFound;
