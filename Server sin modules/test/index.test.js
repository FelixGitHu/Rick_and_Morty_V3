const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS",()=>{})

describe("GET /character/:id",()=>{
    it("Responde con status: 200",async ()=>{
        await agent.get('/character/1').expect(200);
    })
    it("Responde un objeto con las propiedades: id, name, species, gender, status, origin, image",()=>{

    })
    it("Si hay un error responde con status: 500",()=>{
        
    })
})