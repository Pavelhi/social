import React from "react";
import { NavLink } from "react-router-dom";

function Dialogsitem(props) {
  return (
    <div className="dialogsitem">
      <div className="user">
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
      </div>
    </div>
  );
}
export default Dialogsitem;
