import React from "react";
import Card from "./Card";

function CardlistShows({ shows }) {
  const listOfShows = () => {
    return shows.map((event) => {
      const image = event.show.image;
      if (!image) {
        return "";
      }
      return (
        <Card
          url={event.show.image.medium}
          key={event.show.id}
          href={event.show.url}
        />
      );
    });
  };
  return <div className="list">{listOfShows()}</div>;
}

export default CardlistShows;
