import express, {Request, Response} from 'express';
import router from "./Src/Routers/routes"
import dotenv from 'dotenv';

dotenv.config();

const server = express();

/*
Middleware que permite ao servidor interpretar dados enviados via formulários (com `application/x-www-form-urlencoded`).
O `extended: true` permite interpretar objetos aninhados. 
*/
server.use(express.urlencoded({extended: true}));

//Se alguma rota no router responder (ex: com res.send(...), res.json(...), etc.), a execução para ali — o Express não vai continuar para o próximo middleware.
server.use(router);

//Mas se nenhuma rota no router corresponder à URL requisitada, o Express continua para o próximo middleware
server.use((req: Request,res: Response)=>{
    res.status(404);
    res.json({error:"Vasco"});
});

server.listen(process.env.PORT);