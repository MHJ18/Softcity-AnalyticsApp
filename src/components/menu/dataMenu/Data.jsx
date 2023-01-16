import React from "react";

const Card = ({ details }) => {
  return (
    <div>
      <div className="card card-menu" style={{ width: "18rem" }}>
        <img className="card-img-top" src={details.img} alt="Card image" />
        <div className="card-body">
          <p className="card-text card-title-2">{details.Title}</p>
          <p className="card-text card-description-2">{details.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
