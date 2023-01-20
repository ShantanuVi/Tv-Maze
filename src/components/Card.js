import React from "react";

function Card({ url, href }) {
  return (
    <div>
      <a href={href}>
        <img src={url} alt="display"></img>
      </a>
    </div>
  );
}

export default Card;
