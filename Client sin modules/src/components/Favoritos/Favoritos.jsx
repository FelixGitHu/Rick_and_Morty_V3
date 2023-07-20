import {connect} from 'react-redux'
import Card from '../Card/Card'
import style from "./Favoritos.module.css"
import { filterCards,orderCards } from '../../redux/action'
import { useDispatch } from 'react-redux'
import React from 'react'

function Favorites(props){
    console.log(props.favorites)
    const [aux,setAux]=React.useState(false);
    const dispatch = useDispatch()
    function handleOrder(evento){
        dispatch(orderCards(evento.target.value))
        setAux(true)
    }
    function handleFilter(evento){
        dispatch(filterCards(evento.target.value))
        setAux(true)
    }
    
    return(
        <div className={style.container}>
            <div>
                <select onChange={handleOrder} placeholder='A o D'>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter} placeholder='Gender'>
                    {/* otra manera de hacerlo es un arreglo de todos {['Male',"Female","Genderless","unknown"].map(gender=><optionvalue={gender}>{gender}<option/> )} */}
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
             {props.favorites?.map(characters=>{
               return(
                  <Card
                  key={characters.id}
                  id={characters.id}
                  name={characters.name}
                  status={characters.status}
                  species={characters.species}
                  gender={characters.gender}
                  origin={characters.origin}
                  image={characters.image}
                  onClose={props.onClose}
                  />
               )
            })}
        </div>
    )
}

export function mapStateToProps(state){
    return {
            favorites: state.myFavorites
        }
}

export default connect(mapStateToProps, null)(Favorites);