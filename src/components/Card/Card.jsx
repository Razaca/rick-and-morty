import { Link } from "react-router-dom";
import s from "./Card.module.css";

export default function Card({ character, onClose }) {
  const { name, id, image } = character;
  return (
    <div className={s.card}>
      <span></span>
      <span></span>
      <span></span>

      <div className={s.info}>
        <h5 className={s.name}>{name}</h5>
        <div className={s.buttons}>
          <button className={s.buttonClose} onClick={() => onClose(id)}>
            X
          </button>
          <button className={s.buttonClose} onClick={() => onClose(id)}>
            F
          </button>
        </div>
      </div>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
      </Link>
    </div>
  );
}
