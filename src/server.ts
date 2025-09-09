import fastify from "fastify";

const server = fastify({ logger: true });

const teams =[
    { id: 1, name: "ferrari", base:"Woking United kingdom" },
    { id: 2, name: "mercedes", base:"Brackley United kingdom" },
    { id: 3, name: "red bull racing", base:"Milton Keynes United kingdom" },
    { id: 4, name: "mclaren", base:"Woking United kingdom" },
    { id: 5, name: "alpine", base:"Enstone United kingdom" },
]

const drivers = [
    { id: 1, name: "lewis hamilton" , team: "mercedes" },
    { id: 2, name: "max verstappen" , team: "red bull racing" },
    { id: 3, name: "charles leclerc" , team: "ferrari" },
    { id: 4, name: "lando norris" , team: "mclaren" },
    { id: 5, name: "fernando alonso" , team: "alpine" },
]

server.get("/teams", async (request, response) => {

    response.type("application/json").code(200);

    return teams;
});

server.get("/drivers", async (request, response) => {

    response.type("application/json").code(200);

    return drivers;
});

server.listen({ port: 3333}, ()=>{
    console.log("Server init");
    
}); 