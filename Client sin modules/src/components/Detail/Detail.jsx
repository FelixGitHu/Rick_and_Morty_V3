import React, { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import style from "./Detail.module.css"
import axios from "axios"
export default function Detail() {
  //const { id, name } = useParams();
  const {id} = useParams()
  console.log(id);
  const navigate = useNavigate();
  const[character,setCharacter]=useState({})
  useEffect(() => {
    axios(/*rickandmortyapi.com/api/character/${id}`*/`http://localhost:3001/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
          console.log("ok",data)
       } else {
          window.alert('No hay personajes con ese ID');
       }
    }).catch((err) => window.alert("No se encontro el ID!"));
    return ()=>{
      //setCharacter 
      console.log("adios")
    };
 }, []);
 function navegar(evento){
  evento.preventDefault();
  navigate("/home");
 }
//dependencia vacia [ ] es el montaje did mount
//depencian con algo [] es el update
//depencia vacia pero un return es el adios
    const aux="No existe";
  return (
    <div className={style.divContains}>
      <button onClick={navegar}>X</button>
      <h3>{character.name && character.name}</h3>
      <h5>{character.status ? character.status : aux}</h5>
      <img src={character.image} alt={character.name}></img>
      <span>{character.species || aux}</span>
      <span>{character.gender || aux}</span>
      <span>{character.origin?.name }</span>
    </div>
  );
}
