import { useState } from "react";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [state, setState] = useState();

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className={s.container}>
      <input className={s.searchInput} onChange={handleChange} type="search" />
      <button className={s.searchBtn} onClick={() => onSearch(state)}>ADD</button>
    </div>
  );
}
