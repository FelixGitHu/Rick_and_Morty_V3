import { ADD_FAV,REMOVE_FAV,FILTER,ORDER } from "./action"

const initialState ={
    myFavorites:[],
    allCharacters:[],
}

export default function rootReducer (state=initialState,action){
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload 
            }
        case REMOVE_FAV:
            return {
                ...state, 
                myFavorites: action.payload,
                allCharacters: action.payload
            }
            case FILTER:
                return{
                    ...state,
                    myFavorites:state.allCharacters.filter(character => character.gender===action.payload),

                }
            case ORDER:
                let ordenados=[];
                if(action.payload==="Ascendente")
                {
                    ordenados=state.myFavorites.sort((a,b)=>{ 
                        if(a.id > b.id) return 1;
                        if(a.id < b.id) return -1;
                        return 0;
                    });
                }
                else{
                    ordenados=state.myFavorites.sort((a,b)=>{ 
                        if(a.id < b.id) return 1;
                        if(a.id > b.id) return -1;
                        return 0;
                    }); 
                }
                return{
                    ...state,
                    myFavorites:[...ordenados],

                }
        default:
            return {...state}

        }
}

 