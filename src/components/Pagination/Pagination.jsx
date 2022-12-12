import React from "react";
import { useNavigate } from "react-router-dom";

import s from "./Pagination.module.css";

const Pagination = ({ pagId = 1, lastPage }) => {
  const navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
  }

  return (
    <div>
      <button onClick={() => handleNavigate(`/home/${Number(pagId) - 1}`)}>
        atras
      </button>
      <span>1</span>
      <span>...</span>
      <span>{pagId}</span>
      <span>...</span>
      <span>{lastPage}</span>
      <button onClick={() => handleNavigate(`/home/${Number(pagId) + 1}`)}>
        adelante
      </button>
    </div>
  );
};

export default Pagination;
