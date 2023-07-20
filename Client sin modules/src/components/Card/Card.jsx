// en vez de usar props podes usar {con las caracteristicas adentro}
import style from "./Card.module.css"
import { removeFav } from "../../redux/action";
import { addFav } from "../../redux/action";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

 export function Card(props) {
   const {addFav,removeFav}=props;
   const{id,name,gender,status,origin,image,onClose,species}=props;
   console.log(props);
   const navigate=useNavigate()
   const [fav,setFav]=useState(false)
   function handleFavorite(props){
      if(!fav){
         addFav({id,name,gender,status,origin,image,onClose,species})
         setFav(true)
      }
      else{
         removeFav(id)
         setFav(false)
      }
   }
   function navigateHandler(){
      navigate(`/detail/${id}`)
   }
   useEffect(() => {
      console.log(props.myFavorites)
      props.myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [props.myFavorites]);
   return (
      <div className={style.container}>
         <button className={style.closeButton} onClick={()=>onClose(id)} >X</button>
         <img className={style.img} src={image} alt={name} />
         {
         fav ? (
         <button className={style.btn} onClick={handleFavorite}>❤️</button>
          ) : (
          <button className={style.btn} onClick={handleFavorite}>🤍</button>
   )
}
         
         <div className={style.card}>
            
            <h2>name : {name}</h2>
            <h2>status : {status}</h2>
            
         </div>
         
         <button className={style.boton} onClick={()=>navigateHandler()}>Details</button>
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return {
         removeFav: (id) => dispatch(removeFav(id)),
         addFav: (character) => dispatch(addFav(character))
      }
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Card);
{/* <div>
               <h2>id: {props.id}</h2>
               <h2>species : {props.species}</h2>
               <h2>gender: {props.gender}</h2>
               <h2>origin : {props.origin.name}</h2> 
            </div> */}