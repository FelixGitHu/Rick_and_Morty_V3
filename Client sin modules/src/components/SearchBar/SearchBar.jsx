import { SearchContainer,NuevoInput,SearchButton } from "./SearchBar.module.js";
import { useState } from "react";
import React from "react";
export default function SearchBar(props) {
   const[id,Setid]=useState("");
   const handleChange =(evento)=> {
      Setid(evento.target.value)
   };
   return (
      <SearchContainer>
          <NuevoInput value={id} onChange={handleChange} type='search' placeholder="Busque un ID..." />
         <SearchButton onClick={()=>{props.onSearch(id)}}>Agregar</SearchButton>
      </SearchContainer>
   );
}
