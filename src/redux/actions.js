export const ADD_FAV = "ADD_FAV";
export const DEL_FAV = "DEL_FAV";
export const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = (url) => {
  return function (dispatch) {
    fetch(url)
    .then((response) => response.json())
    .then((data) =>
      dispatch({ type: GET_CHARACTERS, payload: data })
    );
  };
};

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const delFav = (id) => {
  return {
    type: DEL_FAV,
    payload: id,
  };
};
