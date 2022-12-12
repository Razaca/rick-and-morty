import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import s from "./Detail.module.css";

const Detail = () => {
  const [character, setCharacter] = useState();
  const { detailId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          console.log(data)
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }, [detailId]);

  return (
    <div className={s.container}>
      <h2>{character && character.name}</h2>
      <img src={character && character.image} alt={character &&character.name} />
    </div>
  );
};

export default Detail;
