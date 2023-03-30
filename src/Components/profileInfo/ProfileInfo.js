import React from "react";
import ava from "./img/cat.jpeg";

function ProfileInfo(props) {
  return (
    <div className="profile">
      <div className="me">
        <img src={ava} alt="profile mini photo" />
        <p>Elon Mask</p>
      </div>
    </div>
  );
}

export default ProfileInfo;