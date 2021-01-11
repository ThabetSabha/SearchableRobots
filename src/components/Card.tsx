import React from "react";

interface CardProps {
  id: number;
  name: string;
  email: string;
}

const Card = ({ id, name, email }: CardProps) => {
  return (
    <div
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      style={{ minWidth: "350px" }}
    >
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`}></img>
      <div>
        {" "}
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </div>
  );
};

export default Card;
