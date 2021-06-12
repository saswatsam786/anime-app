import React from "react";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";
import "./header.css";

function header() {
  const profile = () => {
    alert("Hello User!!!");
  };

  const social = () => {
    alert("Chat function is not enabled for now!!");
  };
  return (
    <div className="header">
      <IconButton>
        <PersonSharpIcon
          onClick={profile}
          fontSize="large"
          className="header-icon"
          id=""
        />
      </IconButton>

      <img
        src="https://media.giphy.com/media/oyZGfEWv1v57lzSXDg/giphy.gif"
        alt="logo"
        className="logo-img"
      />
      <IconButton>
        <ChatIcon onClick={social} fontSize="large" className="header-icon" />
      </IconButton>
    </div>
  );
}

// https://lh6.googleusercontent.com/Y9B8XMFxnUZ5DoDc4UNMqR3MQiWdGi2w4ctpOMY8y2qSG5UXTHDbzwUsqVVhCpHlYbDOGIw6dTcOO8TU90cxf7Cl2e99cKb7vnZBJWwz3Dptcf7FTdy9j_Cp6Kpw4HRq_VV8WU-s
export default header;
