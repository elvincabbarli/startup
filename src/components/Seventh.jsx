import React from "react";
import heroleft from '../assets/hire-left.png'
import right from '../assets/hire-right.png'

const Seventh = () => {
  return (
    <section className="seventh">
      <img src={heroleft} alt="" />
      <div className="seventh-middle">
        <h1>We are hiring!</h1>
        <p>
          We're always looking for talented people to join and help build our
          startups. Check out our current openings
        </p>
        <button>See current openings</button>
      </div>
      <img src={right} alt="" />
    </section>
  );
};

export default Seventh;
