# 🛰️ Cosmos Chronicles 🛰️

Cosmos Chronicles is a social media app that brings users who love anything astronomy together in one place. A user can post, comment, like, and follower other users. Events and News happening in the astronomy world are also posted.

![Cosmos Chronicles Responsive Page](/src/assets/readme-images/amiresponsive.png)

* 🪐 [Cosmos Chronicles - Deployed FE](https://cosmoschronicles-pp5-25951ae1934d.herokuapp.com/)

* 🪐 [Cosmos Chronicles - Deployed BE](https://cc-drf-api-pp5-b19f7ab60297.herokuapp.com/)

* 🪐 [Cosmos Chronicles - Repository FE](https://github.com/apita1423/cosmoschronicles_pp5)

* 🪐 [Cosmos Chronicles - Repository BE](https://github.com/apita1423/cc-drf-api-pp5)


## 🔭 Table of Contents

- [Introduction](#introduction)

- [User Experience](#user-experience)

    - [Project Goals](#project-goals)
    - [Target Audience](#target-audience)

- [User Stories](#user-stories)
    - [Agile Development](#agile-development)
    - [Kanban](#kanban)
    - [Milestones](#milestones)
    - [MoSCow Method](#moscow-method)

- [Design](#design)

    - [Colour Scheme](#colour-scheme)
    - [Typography](#typrography)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
    - [Database Relationship Schema](#database-relationship-schema)

- [Features](#features)

    - [General Features](#general-features)
    - [Future Implementations](#future-implementations)
    - [Accessibility](#accessibility)

- [Technologies Used](#technologies-used)

    - [Languages Used](#languages-used)
    - [Frameworks Used](#frameworks-used)
    - [Database Platform Used](#database-platform-used)
    - [Tools Used](#tools-used)

- [Testing](#testing)

    - [Validator Testing](#validator-testing)
    - [Manual Testing](#manual-testing)
    - [User Stories Testing](#user-stories-testing)
    - [Unfixed Bugs](#unfixed-bugs)

- [Components](#components)

- [Deployment](#deployment)
    - [Github](#github)
    - [Project Setup](#project-setup)
    - [React](#react)
    - [Heroku](#Heroku)

- [Credits](#credits)

    - [Code used](#code-used)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)


## 🔭 Introduction

Cosmos Chronicles is my fifth project with Code Institute. The idea for Cosmos Chronicles has been around since I started with my first project. I have been wanting to do a project based on one of my other passions Astronomy. Cosmos Chronicles is based off CI's Moments Walkthrough, which allowed my idea of creating a place for space enthusiants to come together and post about anything astronomy.

## 🔭 User Experience

### Project Goals

Cosmos Chronicles was designed for space enthusiants. Cosmos Chronicles is for anyone whose passion is, as they say in Star Trek, "The Final Frontier"! A place where user can posts about what they saw through their telescope or what their students did for space-themed day. A place for news about launches, updates on various missions, or what is happening across space agencies. Also, a place where events can be posted and people would know where they can meet to experience space events. 

### Audience

Who can use this site? Anyone from astrobiologists who might do this on a daily bases to librarians whose passions are a bit more then books. 

## 🔭 User Stories

One user story was not implemented and was left for future implementations.
 - [USER STORY: UNREGISTERED/REGISTERED USER > NEWS UPDATE](https://github.com/apita1423/cosmoschronicles_pp5/issues/11)

#### User Stories 

- Authentication
    - [USER STORY: VISITOR USER > REGISTER](https://github.com/apita1423/cosmoschronicles_pp5/issues/2)
    - [USER STORY: REGISTERED USER > LOGIN](https://github.com/apita1423/cosmoschronicles_pp5/issues/3)
    - [USER STORY: LOGIN USER](https://github.com/apita1423/cosmoschronicles_pp5/issues/5)
    - [USER STORY: LOGIN USER > LOGOUT](https://github.com/apita1423/cosmoschronicles_pp5/issues/19)
    - [USER STORY: UNREGISTERED/FIRST TIME VISITOR](https://github.com/apita1423/cosmoschronicles_pp5/issues/1)
    - [ADMIN STORY: DELETE PROFILES](https://github.com/apita1423/cosmoschronicles_pp5/issues/24)

- Posts
    - [USER STORY: UNREGISTERED/REGISTER USER > SEARCH BAR](https://github.com/apita1423/cosmoschronicles_pp5/issues/4)
    - [USER STORY: LOGIN USER > ADD POST](https://github.com/apita1423/cosmoschronicles_pp5/issues/6)
    - [USER STORY: LIKE/UNLIKE POSTS](https://github.com/apita1423/cosmoschronicles_pp5/issues/7)
    - [USER STORY: LOGIN USER > UPDATE/DELETE POSTS](https://github.com/apita1423/cosmoschronicles_pp5/issues/10)

- Comments
    - [USER STORY: LOGIN USER > COMMENT](https://github.com/apita1423/cosmoschronicles_pp5/issues/8)
    - [USER STORY: LOGIN USER > COMMENT EDIT/DELETE](https://github.com/apita1423/cosmoschronicles_pp5/issues/9)

- Profiles
    - [USER STORY: LOGIN USER > EDIT PROFILE](https://github.com/apita1423/cosmoschronicles_pp5/issues/13)
    - [USER STORY: LOGIN USER > VIEW PROFILE](https://github.com/apita1423/cosmoschronicles_pp5/issues/12)

- Features
    - [USER STORY: LOGIN USER > FOLLOW/UNFOLLOW MEMBERS](https://github.com/apita1423/cosmoschronicles_pp5/issues/14)
    - [USER STORY: LOGIN USER > FEED](https://github.com/apita1423/cosmoschronicles_pp5/issues/17)
    - [USER STORY: LOGIN USER > LIKED](https://github.com/apita1423/cosmoschronicles_pp5/issues/18)
  
- Chronicles(News)
    - [USER STORY: LOGIN USER > NEWS](https://github.com/apita1423/cosmoschronicles_pp5/issues/15)
    - [USER STORY: LOGIN USER > SEARCH BAR NEWS](https://github.com/apita1423/cosmoschronicles_pp5/issues/20)
    - [USER STORY: LOGIN USER > ADD NEWS](https://github.com/apita1423/cosmoschronicles_pp5/issues/23)
    - [USER STORY: UNREGISTERED/REGISTERED USER > NEWS UPDATE](https://github.com/apita1423/cosmoschronicles_pp5/issues/11)

- Events
    - [USER STORY: LOGIN USER > EVENTS](https://github.com/apita1423/cosmoschronicles_pp5/issues/16)
    - [USER STORY: LOGIN USER > SEARCH BAR EVENTS](https://github.com/apita1423/cosmoschronicles_pp5/issues/21)
    - [USER STORY: LOGIN USER > ADD EVENT](https://github.com/apita1423/cosmoschronicles_pp5/issues/22)

### Agile Development

The Agile Methodology was the project managment tool used for this project. For milestones, I used eight epics to bundle the user stories: Authentication, Posts, Comments, Profile, Features, Chronicles(News), Events, and README. The Kanban board had four different title: Todo, In Progress, Done, and Future. The MoSCoW Method labels were used: must-have, should-have, could-have, wont-have, readme.

### Kanban

The Kanban board was split into four sections: Todo, In Progress, Done, and Future. The Future section idea came from my PP4 project where I put User Stories that are labelled as could have or wont have for future implementations.

![Kanban Board](/src/assets/readme-images/kanban.png)

### Milestones

I created the EPIC the same way as my PP4. I found this way easier especially for the size of the project and time. I had eight EPICs: Authentication, Posts, Comments, Profile, Features, Chronciles(News), Events, and README.

![Milestones](/src/assets/readme-images/milestones.png)

### MoSCow Method

The MoSCoW Method Labels I used were: must-have, should-have, could-have, wont-have, and the addition of readme. The readme label is used for the README documentation.

![MoSCoW](/src/assets/readme-images/labels.png)

## 🔭 Design

### Colour Scheme

I wanted Cosmos Chronicles to have colours that will be space themed. I wanted to try gradient as a background, but there was some difficulties. These difficulties became apparent more in the navbar. Because of the gradient there was a dark and light colour and the colour of the text in the navbar had to show through those colours. Even though the difficulties were there I was able to work around and still use the gradient for the project. 

Gradient colour used for the background
![Gradient Colours](/src/assets/readme-images/gradient-colour.png)

Colours used for text
![Colours Used](/src/assets/readme-images/colours.png)

### Typography

- [Reddit Mono](https://fonts.google.com/specimen/Reddit+Mono?query=reddit+mono) from Google Fonts was used for Cosmos Chronicles.

### Imagery

- Images have been obtained from Pexel, NASA Photojournal, Canva, and News photos came from [Sky & Telescope](https://skyandtelescope.org/) news section (each image has a image copyright input). One photo came from a co-workers testing the site (photo of the chocolate cake).

- All images will be credited in the [Media](#media) section.

### Wireframes

- For Cosmos Chronicles's wireframes, I used Balsamiq. After going through the CI's Moments Walkthrough, I based Cosmos Chronicles's wireframes on that. There was a few ideas that did not make it to the finish site.
    - Dropdown for the Add Post, Add News, Add Events
    - News updates underneath Space Mission Members.

<details><summary>Home (Before Login)</summary>
<img src="/src/assets/readme-images/wireframes-images/home_prelogin_wf.png">
</details>

<details><summary>About Us</summary>
<img src="/src/assets/readme-images/wireframes-images/aboutus_wf.png">
</details>

<details><summary>Login Page</summary>
<img src="/src/assets/readme-images/wireframes-images/login_wf.png">
</details>

<details><summary>Register Page</summary>
<img src="/src/assets/readme-images/wireframes-images/register_wf.png">
</details>

<details><summary>Home (After Login)</summary>
<img src="/src/assets/readme-images/wireframes-images/home_postlogin_wf.png">
</details>

<details><summary>Single Post</summary>
<img src="/src/assets/readme-images/wireframes-images/single_post_wf.png">
</details>

<details><summary>Add post</summary>
<img src="/src/assets/readme-images/wireframes-images/addpost_wf.png">
</details>

<details><summary>News</summary>
<img src="/src/assets/readme-images/wireframes-images/news_wf.png">
</details>

<details><summary>Single News Post</summary>
<img src="/src/assets/readme-images/wireframes-images/singelnews_wf.png">
</details>

<details><summary>Add News</summary>
<img src="/src/assets/readme-images/wireframes-images/addnews_wf.png">
</details>

<details><summary>Events</summary>
<img src="/src/assets/readme-images/wireframes-images/events_wf.png">
</details>

<details><summary>Singel Event</summary>
<img src="/src/assets/readme-images/wireframes-images/singleevent_wf.png">
</details>

<details><summary>Add Event</summary>
<img src="/src/assets/readme-images/wireframes-images/addevent_wf.png">
</details>

<details><summary>Feed</summary>
<img src="/src/assets/readme-images/wireframes-images/feed_wf.png">
</details>

<details><summary>Liked</summary>
<img src="/src/assets/readme-images/wireframes-images/liked_wf.png">
</details>

<details><summary>Profile Page</summary>
<img src="/src/assets/readme-images/wireframes-images/profile_wf.png">
</details>

### Database Relationship Schema
![Database Relationship Schema](/src/assets/readme-images/pp5-database.png)
    
## 🔭 Features

### General Features

<details><summary>Favicon</summary>
<img src="/src/assets/readme-images/features-images/favicon.png">
</details>

<details><summary>Favicon Tab</summary>
<img src="/src/assets/readme-images/features-images/favicon-tab.png">
</details>

<details><summary>Navbar (Before Login/Register)</summary>
<img src="/src/assets/readme-images/features-images/prenavbar.png">
</details>

<details><summary>Home</summary>
<img src="/src/assets/readme-images/features-images/Home.png">
</details>

<details><summary>About Us (Top)</summary>
<img src="/src/assets/readme-images/features-images/aboutus-1.png">
</details>

<details><summary>About Us (Bottom)</summary>
<img src="/src/assets/readme-images/features-images/aboutus-2.png">
</details>

<details><summary>Login</summary>
<img src="/src/assets/readme-images/features-images/login.png">
</details>

<details><summary>Register</summary>
<img src="/src/assets/readme-images/features-images/register.png">
</details>

<details><summary>Navbar (After Login)</summary>
<img src="/src/assets/readme-images/features-images/postnavbar.png">
</details>

<details><summary>Space Members Profiles (Users)</summary>
<img src="/src/assets/readme-images/features-images/spacemembers.png">
</details>

<details><summary>Add Post Tooltip</summary>
<img src="/src/assets/readme-images/features-images/addpost_tooltip.png">
</details>

<details><summary>Post Search Bar</summary>
<img src="/src/assets/readme-images/features-images/postsearch.png">
</details>

<details><summary>Add Post</summary>
<img src="/src/assets/readme-images/features-images/addpost.png">
</details>

<details><summary>Posts</summary>
<img src="/src/assets/readme-images/features-images/post.png">
</details>

<details><summary>Single Post</summary>
<img src="/src/assets/readme-images/features-images/singlepost.png">
</details>

<details><summary>Like/Comment Icons</summary>
<img src="/src/assets/readme-images/features-images/like_comment.png">
</details>

<details><summary>Comment</summary>
<img src="/src/assets/readme-images/features-images/comment.png">
</details>

<details><summary>Comment - Edit/Delete</summary>
<img src="/src/assets/readme-images/features-images/comment_edit_delete.png">
</details>

<details><summary>News Search Bar</summary>
<img src="/src/assets/readme-images/features-images/news-search.png">
</details>

<details><summary>Add News</summary>
<img src="/src/assets/readme-images/features-images/addnews.png">
</details>

<details><summary>Add News Categories</summary>
<img src="/src/assets/readme-images/features-images/news_categories.png">
</details>

<details><summary>News Post</summary>
<img src="/src/assets/readme-images/features-images/newspost.png">
</details>

<details><summary>News Single</summary>
<img src="/src/assets/readme-images/features-images/singlenews.png">
</details>

<details><summary>News Edit/Delete</summary>
<img src="/src/assets/readme-images/features-images/news_edit_delete.png">
</details>

<details><summary>Events Search Bar</summary>
<img src="/src/assets/readme-images/features-images/events_search.png">
</details>

<details><summary>Add Event</summary>
<img src="/src/assets/readme-images/features-images/addevent.png">
</details>

<details><summary>Event Post</summary>
<img src="/src/assets/readme-images/features-images/eventpost.png">
</details>

<details><summary>Event Edit/Delete</summary>
<img src="/src/assets/readme-images/features-images/event_edit_delete.png">
</details>

<details><summary>Profile Page</summary>
<img src="/src/assets/readme-images/features-images/profilepage.png">
</details>

<details><summary>Profile Edit</summary>
<img src="/src/assets/readme-images/features-images/profile_edit.png">
</details>

<details><summary>Edit Profile (Image/Bio)</summary>
<img src="/src/assets/readme-images/features-images/profile_edit_image_bio.png">
</details>

<details><summary>Edit Profile Username</summary>
<img src="/src/assets/readme-images/features-images/edit_username.png">
</details>

<details><summary>Edit Profile Password</summary>
<img src="/src/assets/readme-images/features-images/edit_password.png">
</details>

<details><summary>Feed</summary>
<img src="/src/assets/readme-images/features-images/feed.png">
</details>

<details><summary>Liked</summary>
<img src="/src/assets/readme-images/features-images/liked.png">
</details>

<details><summary>Profile Tooltip</summary>
<img src="/src/assets/readme-images/features-images/profiletooltip.png">
</details>

<details><summary>Logout Tooltip</summary>
<img src="/src/assets/readme-images/features-images/logout.png">
</details>

<details><summary>Error Register</summary>
<img src="/src/assets/readme-images/features-images/error_register.png">
</details>

<details><summary>Error Login</summary>
<img src="/src/assets/readme-images/features-images/error_login.png">
</details>

<details><summary>Error Add Post</summary>
<img src="/src/assets/readme-images/features-images/error_post.png">
</details>

<details><summary>Error Add News</summary>
<img src="/src/assets/readme-images/features-images/error_news.png">
</details>

<details><summary>Error Add Events</summary>
<img src="/src/assets/readme-images/features-images/errors_events.png">
</details>

<details><summary>Profile No Posts</summary>
<img src="/src/assets/readme-images/features-images/nopost.png">
</details>

<details><summary>404 Errors</summary>
<img src="/src/assets/readme-images/features-images/404.png">
</details>

### Future Implementations

- Box underneath Popular Profiles to show new updates whenever someone updates news or events. When clicked it will redirect to either the News or Events section.

- When someone posts in the News or Events section it automatically populates in the Home page.

- Add a live feed for NASA TV from YouTube.

- Create a section where the community can take part in astronomy themed citizen science.

### Accessibility

For the Lighthouse Performance number, I tried to fix the score by downsizing the images, but was only able to get a few points higher for both desktop and mobile version.

- Lighthouse Desktop Version (1)
![Lighthouse Desktop](/src/assets/readme-images/lighthouse_desktop.png)

- Lighthouse Mobile Version (1)
![Lighthouse Mobile](/src/assets/readme-images/lighthouse_mobile.png)

- Lighthouse Desktop Version (2) 
![Lighthouse Desktop 2](/src/assets/readme-images/lighthouse_desktop_2.png)

- Lighthouse Mobile Version (2)
![Lighthouse Mobile](/src/assets/readme-images/lighthouse_mobile_2.png)

- WAVE - Web Accessibility Evaluation Tool
![WAVE Evaluation Tool](/src/assets/readme-images/wave.png)

## 🔭 Technologies Used

### Languages Used

- HTML
- CSS
- Javascript
- React

### Frameworks Used

- ReactJS
- Cloudinary
- React-Bootstrap 

### Database Platform Used

 - Code Institute's PostgresSQL Database

### Tools Used

- [VSCode](https://code.visualstudio.com/) - IDE used to create both Cosmos Chronicles' frontend and backend.
- [Github](https://github.com/) - To store the Cosmos Chronicles Repo.
- [Font Awesome](https://fontawesome.com/) - Icons used throughout the project.
- [Balsamiq](https://balsamiq.com/) - Used to create the wireframes.
- [Pexel](https://www.pexels.com/) - Images used for the posts.
- [NASA Photjournal](https://photojournal.jpl.nasa.gov/) - Used for the images of Saturn and Titan. 
- [Coolors](https://coolors.co/) - Used to pick colours.
- [CSS Gradient](https://cssgradient.io/) - Used to great the colours gradient for the background. 
- [Canva](https://www.canva.com/en_gb/) - Used for the design of the logo, notfound page image, upload image, and astronomical clock image.
- [ChatGPT](https://chatgpt.com/auth/login) - Used for About Us, News, and Events content.
- [AmIResponsive](https://ui.dev/amiresponsive) - Used for the responsive image in README.
- [ResponsiveTestTool](https://responsivetesttool.com/) - Used to test the site in various sizes. 

## 🔭 Testing

### Validator Testing

### HTML
HTML code was tested using [W3C HTML Validator](https://validator.w3.org/). The index.html in the public folder was tested with no errors found.
![HTML Validation](/src/assets/readme-images/html_validator.png)

### CSS
CSS code was tested using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). All CSS passed with no errors.
![CSS Validation](/src/assets/readme-images/css_validator.png)

### ESLint
ESLint was used to test the React files.
![ESLint Validation](/src/assets/readme-images/eslint.png)

### Manual Testing

### Home (Before Logging In)

| Title | Expected | PASS/FAIL |
| --- | --- | --- |
| Navbar | Only logo, Home, About Us, Login, Register appears | PASS |
| Home Page | Search Bar, Posts with infinite scroll, space members appears without Follow/Unfollow button | PASS |
| Search Bar | Filters Posts | PASS |
| About Us | About Us page and link to register | PASS |
| Register/Login Now | Click on register or login now redirects to either Register/Login |  PASS |
| Register | Register | PASS |
| Login | Login | PASS |

### Home (After Loggin In)

| Title | Expected | PASS/FAIL |
| --- | --- | --- |
| NavBar | Add Post, News, Events, Home, News, Events, Feed, Liked, Profile Avatar, Logout is visible/clickable | PASS |
| Space Mission Member Profile Avatar | Follow/Unfollow Button is visible/clickable | PASS |
| Search Bar | Search bar is visible and can input text and filters | PASS |
| Infinite Scroll | Scrolling down automatically populates more posts | PASS |
| Like/Comment Icons | Like/Comment icons visible and clickable | PASS |
| Single Posts | Clicking into a post redirects to a single post | PASS |
| Add Post | Add Post is visible and clickable on navbar. When clicked directs to form with title and content | PASS |
| Add Post Errors | Errors appear when Create is clicked first | PASS |

### Profile

| Title | Expected | PASS/FAIL |
| --- | --- | --- |
| Space Mission Members | All profile members avatar is visible and clickable | PASS |
| Space Mission Members Avatar | Profile avatar click redirects to profile page | PASS |
| Profile Page | Has posts or no results found image. It has username and number of posts/followers/following | PASS |
| Profile Page Edit | Three dots is visible and clickable and dropdown shows edit username, password, or profile and are clickable| PASS |

### News

| Title | Expected | PASS/FAIL |
| --- | --- | --- |
| Search Bar | Search bar is visible and can input text and filters | PASS |
| News Button | News button is visible and clickable. When clicked redirects to the News section. | PASS |
| News page | News is listed one after another | PASS |
| News single post | When single news post is clicked redirects to the single post on one page | PASS |
| Add News | Add News is visible and clickable in the navbar | PASS |
| Add News Form | Form input includes images, title, description, author, published on, image copyright, and category dropdown | PASS |
| Add News Error | Errors appear when Create News is clicked first or when an input is not filled | PASS |
| News Edit/Delete | Owners of news have three dots on the posts when clicked, edit/delete icon appears and is clickable | PASS |

### Events

| Title | Expected | PASS/FAIL |
| --- | --- | --- |
| Events Button | Events button is visible and clickable. When clicked redirects to the Events section | PASS |
| Events page | Events is listed one after another | PASS |
| Links in Event posts | Link are clickable and open in a different tab | PASS |
| Event single post | When single event post is clicked it redirects to the single event post on one page | PASS |
| Add Event | Add Event is visible and clickable in the navbar. | PASS |
| Add Event Form | Form input includes title, description, date, time, city, country, audience, price, and url | PASS |
| Add Event Form Error | Errors appear when Create Event is clicked first or when an input is not filled | PASS |
| Events Edit/Delete | Owners of created events have three dots on the posts when clicked, edit/delete icon appears and is clickable | PASS |

### Comments

| Title | Expected | PASS/FAIL |
| --- | --- | --- |
| Comment Icon | Click on the comment icon will redirect to the single post | PASS |
| Comment on Post | User can add a comment in the comment input and click on post. Comment should be visible | PASS |
| Comment Edit/Delete | Owners of comments have three dots when clicked edit/delete icon appears and is clickable | PASS |

### Like 

| Title | Expected | PASS/FAIL |
| --- | --- | --- |
| Like Icon | Like icon is visible and clickable | PASS |
| Unlike | User can unlike a post they liked | PASS |
| Like Error | User can't like their own post | PASS |
| Like number | Like number increases or decreases if liked or unliked | PASS |

### Feed 

| Title | Expected | PASS/FAIL |
| --- | --- | --- |
| Feed | Posts from followers will populated | PASS |

### Liked

| Title | Expected | PASS/FAIL |
| --- | --- | --- |
| Liked | Posts that were liked populate | PASS |

### 404 Error

| Title | Expected | PASS/FAIL |
| --- | --- | --- |
| 404 Error | When going to a url that does not exist redirects to a 404 page | PASS |

### User Stories Testing

| USER STORY | PASS/FAIL |
| --- | --- |
| [USER STORY: VISITOR USER > REGISTER](https://github.com/apita1423/cosmoschronicles_pp5/issues/2) | PASS |
| [USER STORY: REGISTERED USER > LOGIN](https://github.com/apita1423/cosmoschronicles_pp5/issues/3) | PASS |
| [USER STORY: LOGIN USER](https://github.com/apita1423/cosmoschronicles_pp5/issues/5) | PASS |
| [USER STORY: LOGIN USER > LOGOUT](https://github.com/apita1423/cosmoschronicles_pp5/issues/19) | PASS |
| [USER STORY: UNREGISTERED/FIRST TIME VISITOR](https://github.com/apita1423/cosmoschronicles_pp5/issues/1) | PASS |
| [USER STORY: UNREGISTERED/REGISTER USER > SEARCH BAR](https://github.com/apita1423/cosmoschronicles_pp5/issues/4) | PASS |
| [USER STORY: LOGIN USER > ADD POST](https://github.com/apita1423/cosmoschronicles_pp5/issues/6) | PASS |
| [USER STORY: LIKE/UNLIKE POSTS](https://github.com/apita1423/cosmoschronicles_pp5/issues/7) | PASS |
| [USER STORY: LOGIN USER > UPDATE/DELETE POSTS](https://github.com/apita1423/cosmoschronicles_pp5/issues/10) | PASS |
| [USER STORY: LOGIN USER > COMMENT](https://github.com/apita1423/cosmoschronicles_pp5/issues/8) | PASS |
| [USER STORY: LOGIN USER > COMMENT EDIT/DELETE](https://github.com/apita1423/cosmoschronicles_pp5/issues/9) | PASS |
| [USER STORY: LOGIN USER > EDIT PROFILE](https://github.com/apita1423/cosmoschronicles_pp5/issues/13) | PASS |
| [USER STORY: LOGIN USER > VIEW PROFILE](https://github.com/apita1423/cosmoschronicles_pp5/issues/12) | PASS |
| [USER STORY: LOGIN USER > FOLLOW/UNFOLLOW MEMBERS](https://github.com/apita1423/cosmoschronicles_pp5/issues/14) | PASS |
| [USER STORY: LOGIN USER > FEED](https://github.com/apita1423/cosmoschronicles_pp5/issues/17) | PASS |
| [USER STORY: LOGIN USER > LIKED](https://github.com/apita1423/cosmoschronicles_pp5/issues/18) | PASS |
| [USER STORY: LOGIN USER > NEWS](https://github.com/apita1423/cosmoschronicles_pp5/issues/15) | PASS |
| [USER STORY: LOGIN USER > SEARCH BAR NEWS](https://github.com/apita1423/cosmoschronicles_pp5/issues/20) | PASS |
| [USER STORY: LOGIN USER > ADD NEWS](https://github.com/apita1423/cosmoschronicles_pp5/issues/23) | PASS |
| [USER STORY: UNREGISTERED/REGISTERED USER > NEWS UPDATE](https://github.com/apita1423/cosmoschronicles_pp5/issues/11) | PASS |
| [USER STORY: LOGIN USER > EVENTS](https://github.com/apita1423/cosmoschronicles_pp5/issues/16) | PASS |
| [USER STORY: LOGIN USER > SEARCH BAR EVENTS](https://github.com/apita1423/cosmoschronicles_pp5/issues/21) | PASS |
| [USER STORY: LOGIN USER > ADD EVENT](https://github.com/apita1423/cosmoschronicles_pp5/issues/22) | PASS |
| [ADMIN STORY: DELETE PROFILES](https://github.com/apita1423/cosmoschronicles_pp5/issues/24) | PASS |

### Unfixed Bugs

- 401 console error that was reported in the Moments Walkthrough.
![401 Error](/src/assets/readme-images/401.png)

## 🔭 Components

- <strong>Asset.js</strong> - Houses the spinner, src, and message. The spinner shows when the parts of the site is loading and when scrolling down through the post (part of the infinite scroll). The Asset component is used throughout the code: ProfilePage.js, PopularProfiles.js, PostsPage.js, PostPage.js, PostCreateForm.js, EventsPage.js, ChroniclesPage.js, ChronicleEditForm.js, ChronicleCreateForm.js, AboutUs.js, NotFound.js, and NavBar.js.

- <strong>Avatar.js</strong> - Used to store the profile avatar of the users. The Avatar component was used in NavBar.js, Chronicle.js, Comment.js, CommentCreateForm.js, Event.js, Post.js, and Profile.js.

- <strong>MoreDropdown.js</strong> -  Used for the edit/update of comments, posts, profiles, events, and news. For the profiles, it contains edit profile, edit username, and edit password. For the comments, posts, events, and news it contains edit and delete. The MoreDropdown component is used in Chronicle.js, Comment.js, Event.js, Post.js, and ProfilePage.js.

- <strong>NavBar.js</strong> - Used to display the navbar across all pages. The NavBar was placed in the App.js where all the routes for each page is located.

- <strong>NotFound.js</strong> - Used to house the code for displaying the error message. If a invalid url is searched it would show the NotFound component which house the image and message for the 404 error. The NotFound.js component was also placed in the App.js.

## 🔭 Deployment

- Cosmos Chronicles (Frontend) has been deployed through Heroku.
    - [Cosmos Chronicles](https://cosmoschronicles-pp5-25951ae1934d.herokuapp.com/)

- Cosmos Chronicles API (Backend) has been deployed through Heroku.
    - [Cosmos Chronicles API](https://cc-drf-api-pp5-b19f7ab60297.herokuapp.com/)

### Github

#### Create Repository

1. Go to [GitHub](https://github.com/) and login with your credentials.
2. Create a new repository by using [CI's React Template](https://github.com/Code-Institute-Org/react-ci-template).
3. Click on the 'Use this template' dropdown and click on 'Create a new repository'.
4. Add a 'Repository name' (it show if the name is available underneath the input). Make sure the 'Public' radio button is clicked.
5. Click on 'Create repository' button.

#### Fork Repository

1. In the project's GitHub repository, click 'Fork' and then 'Create a Fork'.
2. Change the name and description of the fork.
3. Select to copy only the main branch or all branches.
4. Click 'Create a Fork'.
5. A newly created repository will appear in the GitHub repository. 

### Project Setup

* I use VSCode for both frontend and backend.

### React 

1. Create a new workspace using [CI's React Template](https://github.com/Code-Institute-Org/react-ci-template).
2. Install React.js (<strong>Note:</strong> In the Moments Walkthrough, when using this command all the dependencies will be installed.)
```
npx create-react-app . --use-npm
npm start
```
3. Install packages:
```
npm install react-bootstrap@1.6.3 bootstrap@4.6.0
npm install react-router-dom@5.3.0
```

### React - Connecting to API

1. Go to the project's API that was deployed in Heroku. 
2. In the Settings tab, click on "Reveal Config Vars".
3. Add these config:
```
KEY: CLIENT_ORIGIN VALUE: https://cosmoschronicles-pp5-25951ae1934d.herokuapp.com
KEY: CLIENT_ORIGIN_DEV VALUE: http://localhost:3000
```
4. Remember to remove trailing `/`.

### React - Deploying to Heroku

1. In the scripts section in `package.json`, add this command:
``` 
"heroku-prebuild": npm install -g serve"
```
2. Add a Procfile at the root of the project, add this command:
```
web: serve -s build
```

### Heroku

1. Go to [Heroku](https://id.heroku.com/login) and login with your credentials.
2. Sign in with your multifactor pin.
3. Select "New".
4. Create a unique name (it should turn green if the name is available) and select the location.
5. Under the 'Deploy' button, connect to your GitHub repository.
6. Once connected, pick the repository that you will want to connect to.
7. Under 'Manual Deploy', click on Deploy Branch.
8. Once manual deployment is successful click on 'View' or scroll up and click on 'Open App'

## 🔭 Credits

### Code Used

- I relied on CI's Moments Walkthrough for the bases of the project with the additon of Chronicles(News) and Events.

* <strong>Note</strong> Chronicles and News was used due to not wanting to confuse News for New. I should have named everything Chronicles, but I was well into the project when I realised. 

### Content

- Content in bios, posts, and comments were done by me. ChatGPT was used for the content in the About Us, Events, and News pages.

### Media

Images have been sourced from Pexel, NASA Photojournal Images, Canva, and images from the News section came from the Sky and Telescope site. Chocolate Cake image came from one of my co-workers testing the site. 

Images sourced from NASA Photojournal library.

- [Saturn Image](https://photojournal.jpl.nasa.gov/catalog/PIA01268)
- [Titan Image](https://photojournal.jpl.nasa.gov/catalog/PIA07232)

Images sourced from Pexel

- [Space Image 1](https://www.pexels.com/photo/silhouette-of-person-standing-on-a-field-under-starry-night-8495473/)
- [Space Image 2](https://www.pexels.com/photo/black-and-blue-abstract-art-11933300/)
- [Space Image 3](https://www.pexels.com/photo/group-of-multiethnic-people-gathering-around-female-speaker-in-studio-3856027/)
- [Space Image 4](https://www.pexels.com/photo/space-shuttle-atlantis-on-display-at-the-kennedy-space-center-visitor-complex-11479853/)
- [Space Image 5](https://www.pexels.com/photo/cute-purebred-dog-with-tongue-out-standing-on-sofa-at-home-5951902/)
- [Space Image 6](https://www.pexels.com/photo/statues-of-astronauts-in-kennedy-space-center-in-usa-9697595/)
- [Space Image 7](https://www.pexels.com/photo/painted-planet-cutouts-8537195/)
- [Space Image 8](https://www.pexels.com/photo/photo-of-blue-and-yellow-lighted-dome-tent-surrounded-by-plants-during-night-time-712067/)
- [Space Image 9](https://www.pexels.com/photo/decorations-on-wall-and-ceiling-in-griffith-observatory-in-los-angeles-usa-17523719/)
- [Space Image 10](https://www.pexels.com/photo/photo-of-aurora-during-evening-1938348/)
- [Space Image 11](https://www.pexels.com/photo/blue-and-white-planet-display-87009/)
- [Space Image 12](https://www.pexels.com/photo/sky-filled-with-stars-at-night-2106759/)
- [Space Image 13](https://www.pexels.com/photo/landscape-photography-of-snow-pathway-between-trees-during-winter-688660/)
- [Space Image 14](https://www.pexels.com/photo/black-light-post-near-tree-2214035/)
- [Space Image 15](https://www.pexels.com/photo/eye-level-photo-of-train-tracks-surrounded-with-trees-1448899/)
- [Space Image 16](https://www.pexels.com/photo/photo-of-beach-and-palm-trees-1457812/)
- [Space Image 17](https://www.pexels.com/photo/silhouette-of-woman-photographer-using-camera-at-night-2376991/)

Images from News Section (there is a image copyright input field in each News posts)

- [Hubble](https://skyandtelescope.org/astronomy-news/hubble-pauses-science-operations-for-transition-to-one-gyro-mode/)
- [Voyager 1](https://skyandtelescope.org/astronomy-news/voyager-1-and-half-its-instruments-are-back-online/)
- [Earth Size Planet Discover](https://skyandtelescope.org/astronomy-news/astronomers-discover-new-earth-size-world-only-40-light-years-away/)

Images sourced from Canva

<details><summary>Canva Image 1</summary>
<img src="/src/assets/readme-images/canva-clock.png">
</details>

<details><summary>Canva Image 2</summary>
<img src="/src/assets/readme-images/profile-1.png">
</details>

<details><summary>Canva Image 4</summary>
<img src="/src/assets/readme-images/profile-2.png">
</details>

<details><summary>Canva Image 5</summary>
<img src="/src/assets/readme-images/profile-3.png">
</details>

<details><summary>Canva Image 6</summary>
<img src="/src/assets/readme-images/profile-4.png">
</details>

<details><summary>Canva Image 7</summary>
<img src="/src/assets/readme-images/profile-5.png">
</details>

<details><summary>Canva Image 8</summary>
<img src="/src/assets/readme-images/profile-6.png">
</details>

### Acknowledgments

- Again, and for the last time, I'm truly grateful for my mentor, Martina. She has been the best mentor someone could ask for. 

- Oisin, John, and Thomas from Tutor Support, who helped with a few issues that came up. 

- My husband who has encouraged me throughout the course, and, of course, my animals who have been okay with me being in front of a computer and not being a bed for them to relax. After this I can go back to being a bed 🤪. 
