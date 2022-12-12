import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((store) => store);

  console.log(favorites);
  return (
    <div>
      {favorites.length &&
        favorites.map((el) => (
          <div>
            <h3>{el.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
