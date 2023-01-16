import React from "react";

const Card = ({ details }) => {
  return (
    <div>
      <div className="card card-menu-dashboard" style={{ width: "18rem" }}>
        <img
          className="card-img-top card-img"
          src={details.img}
          alt="Card image"
        />
        <div className="card-body card-foter">
          <p className="card-text card-title-1">{details.Title}</p>
          <p className="card-text card-description-1">{details.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
