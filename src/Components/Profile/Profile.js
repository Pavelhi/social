import React from "react";
import './Profile.css'
import ava from "./img/cat.jpeg";
import ava_min from "./img/cat.jpeg";
import Posts from './Posts/Posts';

function Profile() {
  return (
    <div className="profile">
      <div className="me">
        <img src={ava} alt="profile mini photo" />
        <p>Elon Mask</p>
      </div>
      <Posts/>
    </div>
  );
}

export default Profile;
