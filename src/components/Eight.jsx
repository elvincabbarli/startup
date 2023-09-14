import React from "react";
import rocket from "../assets/rocket.svg";

const Eight = () => {
  return (
    <section className="eight">
      <div className="eight-inner">
        <div className="eight-inner-1">
          <h1>Are you ready to board this rocket ship?</h1>
          <p>Share your excitement with us.</p>
          <form action="">
            <input type="text" placeholder="Name*" />
            <input type="email" placeholder="Email*" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message*"
            ></textarea>
            <input type="submit" value="Shoot us a message" />
          </form>
        </div>
        <div className="eight-inner-2">
          <img src={rocket} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Eight;
