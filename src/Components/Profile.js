import React from "react";
import "./Profile.css";

export default function Profile(props) {
  console.log([props.item])
  return (
    <div className="profile" id={props.id}>
      <div className="profile-content">
        <img
          alt="profilePicture"
          className="profile-img"
          src="http://placeimg.com/640/480/animals"
        />
        <div className="profile-description">
          <strong>
            {props.prefix} {props.name} {props.lastName}
          </strong>
        </div>
        <div className="profile-description">{props.title}</div>
      </div>
    </div>
  );
}
