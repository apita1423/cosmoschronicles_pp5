import React from "react";
import { Navbar, Container, Nav, OverlayTrigger, Tooltip, Dropdown } from "react-bootstrap";
import logo from "../assets/cc-logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser, } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleLogOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const addPostIcon = (
    <Dropdown className={styles.NavLink}>
      <DropdownToggle className={styles.DropdownToggle}>Add Items

        <Dropdown.Menu className={styles.DropdownColours}>
          <Dropdown.Item>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/posts/create">
              <i className="far fa-plus-square"></i>Add Post
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/news/create">
              <i className="fas fa-folder-plus"></i>Add News
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/events/create">
              <i className="fas fa-calendar-plus"></i>Add Event
            </NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>

      </DropdownToggle>
    </Dropdown >
  )

  const loggedInIcons = <>
    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/news">
      <i className="far fa-newspaper"></i>News
    </NavLink>
    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/events">
      <i className="fas fa-calendar-alt"></i>Events
    </NavLink>
    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/feed">
      <i className="fas fa-stream"></i>Feed
    </NavLink>
    <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/liked">
      <i className="fas fa-heart"></i>Liked
    </NavLink>
    <OverlayTrigger placement="bottom-start" overlay={<Tooltip>Profile</Tooltip>}>
    <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
      <Avatar src={currentUser?.profile_image} height={40} />
    </NavLink>
  </OverlayTrigger>
    <OverlayTrigger placement="bottom-start" overlay={<Tooltip>Log Out</Tooltip>}>
      <NavLink className={styles.NavLink} to="/" onClick={handleLogOut}>
        <i className="fas fa-sign-out-alt"></i>
      </NavLink>
    </OverlayTrigger>
  </>


  const loggedOutIcons = (
    <>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/aboutus">
        <i className="fas fa-user-astronaut"></i> About Us
      </NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/login">
        <i className="fas fa-sign-in-alt"></i> Log in
      </NavLink>
      <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/register">
        <i className="fas fa-user-plus"></i> Register
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="70" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink exact className={styles.NavLink} activeClassName={styles.Active} to="/">
              <i className="fas fa-home"></i> Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
