import { ADD_FAV, DEL_FAV, GET_CHARACTERS } from "./actions";

const initialState = {
  favorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };
    case ADD_FAV:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case DEL_FAV:
      return {
        ...state,
        favorites: state.favorites.filter((el) => el !== state.payload),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
