/* REACT */
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCharacters } from "./redux/actions";
/* ESTILOS */
import "./App.css";
import About from "./components/About/About";

/* COMPONENTES */
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    !access && navigate("/");
    dispatch(getCharacters("https://rickandmortyapi.com/api/character"));
  }, [access]);

  const username = "renzo";
  const password = "1231233";
  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  return (
    <div className="App">
      <Nav path={location} />
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/home/:id" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

/*   function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          console.log(data)
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  
  function onClose(id) {
    setCharacters(characters.filter((el) => el.id !== id));
  } */
