import Card from '../Card/Card';
import style from "./Cards.module.css"
//Si no hago destructuring tengo que usar props.characters
export default function Cards(props) {
   return (
      <div className={style.container}>
          {
            props.characters.map(characters=>{
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
            })
          }
      </div>
   )
};
/*

                     
*/