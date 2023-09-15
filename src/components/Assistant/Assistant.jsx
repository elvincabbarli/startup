import React, { useState } from "react";
import "./Assistant.css";
import ass from "../../assets/ass.png";
import close from "../../assets/close1.svg";

const Assistant = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen(!open)
  }
  return (
    <div className="assistant">
      <div className="as-inner" onClick={handleOpen}>
        <img src={ass} alt="" />
      </div>
      {open ? (
          <>
          <div className="ass-info">
            Hi! I am Ben, your virtual assistant. How can I make your day
            better?
          </div>
          <div className="close-open" onClick={handleOpen}>
            <img src={close} alt="" />
          </div>
          </>
        ) : (
          ""
        )}
    </div>
  );
};

export default Assistant;
