// const axios = require('axios');

// function  getCharById (res,id){
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) =>{ // podes hacer un response=>response.data y despues hacer otro then con data
//         const {data}=response;
//        const character= {
//             id:data.id,
//             name:data.name,
//             gender:data.gender,
//             species:data.species,
//             origin:data.origin.name,
//             image:data.image,
//             status:data.status,
//         };
        
//             res.writeHead(200,{'Content-Type':'application/json'});
//             return res.end(JSON.stringify(character));
           
//     })
//     .catch((err)=>{
//         res.writeHead(404,{'Content-Type':'text/plain'});
//         return res.end(err.message);
//     })
// }




// module.exports = {
//     getCharById
// } 

const axios = require('axios');
const URL="https://rickandmortyapi.com/api/character/"
function  getCharById (req,res){
    const {id}=req.params;
    axios( `${URL}${id}` )
    .then((response) =>{ // podes hacer un response=>response.data y despues hacer otro then con data
        const {data}=response;
        if(data.error){
            return res.status(404).send(data.error);
        }
        
            const character= {
            id: Number(data.id),
            name:data.name,
            gender:data.gender,
            species:data.species,
            origin:data.origin,//fijarse en el front como lo tengo, en el Front ya saque el name asi que aca mando todo
            image:data.image,
            status:data.status,
            }
            return res.status(200).json(character);
        
               
    })
    .catch((err)=>{
        return res.status(500).send(err.message);
    })
}

module.exports = {
    getCharById
}