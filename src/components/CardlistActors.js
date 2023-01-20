import React from "react";
import Card from "./Card";

function CardlistActors({ person }) {
  const listofPersons = () => {
    return person.map((person) => {
      const image = person.person.image;
      // console.log(image);

      if (image === null) {
        return "";
      }
      return (
        <Card
          url={person.person.image.medium}
          key={person.person.id}
          href={person.person.url}
        />
      );
    });
  };
  return <div className="list">{listofPersons()}</div>;
}

export default CardlistActors;
