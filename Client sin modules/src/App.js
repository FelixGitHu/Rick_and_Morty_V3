import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Login from "./components/Login/Login";
import { useState, useEffect,} from "react";
import { Routes,Route, useLocation, useNavigate,} from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";
import Favoritos from "./components/Favoritos/Favoritos";
import axios from "axios";
function App() {
 const location = useLocation();

 var [characters, Setcharacters] = useState([]);
 function onSearch(dato) {
  // agrega personajes a characters
  fetch(
   //`https://rickandmortyapi.com/api/character/${dato}`
   `http://localhost:3001/character/${dato}`
  )
   .then((respuesta) =>
    respuesta.json()
   )
   .then((respuestaJson) => {
    if (respuestaJson.name && !characters.find((character) =>
       character.id === respuestaJson.id)
    ) {
     Setcharacters((oldChars) => [
      ...oldChars,
      respuestaJson,
     ]);
    } else if (respuestaJson.name) {
    } else {
     window.alert(
      "¡No hay personajes con este ID!"
     );
    }
   })
   .catch((err) =>
    window.alert(
     "No se encontro el ID!"
    )
   );
 }
 function onClose(id) {
  // elimina personajes de characters
  // window.alert("onClose :)")
  Setcharacters(
   characters.filter((pj) => {
    return pj.id !== Number(id);
   })
  );
 }
   const navigate = useNavigate();
   const [access, setAccess] =useState(false);
   const EMAIL = "ejemplo@gmail.com";
   const PASSWORD = "unaPass3";

   function logout() {
      setAccess(false);
    }
    function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/user/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }
 useEffect(() => {!access && navigate("/");
 }, [access]);
 return (
  <div className='App'>
   <img
    className='img'
    src='https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Rick_and_Morty_season_2.png/250px-Rick_and_Morty_season_2.png'
    alt='logo'
   />
   {location.pathname !== "/" && (<Nav onSearch={onSearch} out={logout}/>)}
   <Routes>
    <Route
     path='/'
     element={<Login login={login} />}
    />
    {/* <Route path="*" element={<Nav onSearch={onSearch} />} /> */}
    <Route
     path='/home'
     element={
      <Cards
       characters={characters}
       onClose={onClose}
      />
     }
    />
    <Route
     path='/about'
     element={
      <h1>
       Me encantaria decir que Cree esto pero NO, culpa de RAu...
      </h1>
     }
    />
    <Route
     path='/detail/:id'
     element={<Detail  />}
    />
    <Route
    path="/favorite"
    element={<Favoritos onClose={onClose} />}
    />
   </Routes>
  </div>
 );
}

export default App;
