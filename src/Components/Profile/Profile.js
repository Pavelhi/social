import React from "react";
import './Profile.css';
import Posts from './Posts/Posts';
import ProfileInfo from "../profileInfo/ProfileInfo";

function Profile() {
  return (
    <div className="profile">
      <ProfileInfo/>
      <Posts/>
    </div>
  );
}

export default Profile;
