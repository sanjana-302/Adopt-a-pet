import React from "react";
export default function Pet({ name, animal, breed, media, location, id }) {
  let defaulter = "http://placecorgi.com/300/300";
  if (media.length) {
    defaulter = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={defaulter} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
}
