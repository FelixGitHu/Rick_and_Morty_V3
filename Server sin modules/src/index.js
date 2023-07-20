const PORT = 3001;
const server =require("./app");


server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});


//const http = require('http');
//const { getCharById } = require('./controllers/getCharById');

// const PORT=3001;
// const server=http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url}=req;
//     if(url.includes("/rickandmorty/character/")){
//             let arr=url.split('/');
//             let id=arr.pop();
//             return getCharById(res,id);
//     }
// }).listen(PORT);

// module.exports=server;


