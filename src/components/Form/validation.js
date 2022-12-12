export default function validation(data) {
  const errors = {
    username: "",
    password: "",
  };
  /* username */
  if (!data.username) {
    errors.username = "Debe completar este campo";
  }
  if (data.username.length > 35) {
    errors.username = "Superaste el maximo de caracteres";
  }
  /* password */
  if (!data.password) {
    errors.password = "Debe completar este campo";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.password = "Debe contar entre 6 y 10 caracteres";
  }

  return errors;
}
