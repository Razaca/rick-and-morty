import React, { useState } from "react";
import s from "./Form.module.css";
import validation from "./validation";

const Form = ({ login }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(validation(user));
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(user);
  }

  return (
    <div className={s.container}>
      <form onSubmit={(e) => handleSubmit(e)} className={s.form}>
        <label htmlFor="username">Username: </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          placeholder="username"
        />
        <span>{errors.username}</span>

        <label htmlFor="password">Password: </label>
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          placeholder="password"
        />
        <span>{errors.password}</span>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Form;
