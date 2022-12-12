import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./Cards.module.css";

import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

export default function Cards() {
  const [characters, setCharacters] = useState();
  const [lastPage, setLastPage] = useState();
  const { id } = useParams();

  const URL = !id
    ? `https://rickandmortyapi.com/api/character`
    : `https://rickandmortyapi.com/api/character?page=${id}`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLastPage(data.info.pages);
      });
  }, [id]);

  return (
    <>
      <Pagination pagId={id} lastPage={lastPage} />
      <div className={s.container}>
        {characters &&
          characters.map((el, i) => <Card character={el} key={i} />)}
      </div>
      <Pagination pagId={id} lastPage={lastPage} />
    </>
  );
}
