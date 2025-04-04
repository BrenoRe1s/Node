import express,{ Request, Response } from "express";//Importando o express junto com duas classes importantes do módulo express.
import router from '../routers/routes'//Importando as rotas.
import dotenv from 'dotenv';//Importando o Dotenv.
import cors from "cors";//Importando o CORS.
import { METHODS } from "http";

dotenv.config();

const server = express();//Criando uma constante chamada server para armazenar a instância do seu servidor Express.

const corsOptions = {
    origin:[""],//Onde voce guarda os sites que podem requisitar o servirdor(Use a url do site)
    methods: "GET,POST,PUT,DELETE",//Por meio de string coloque os metodos permitidos a serem requisitados para API
}

server.use(express.json());//Esse middleware é fornecido pelo Express para analisar o corpo de requisições HTTP que contêm dados no formato JSON. Ele transforma o corpo da requisição em um objeto JavaScript que você pode usar em seu código.

server.use(express.urlencoded({extended: true}));//Autoriza as rotas a usarem dados enviados via POST(Tem que ser usado antes do use(router)).

server.use(cors(corsOptions));//Para habilitar o CORS em seu servidor e dentro de cors passe a variavel que guarda as configurações dele.

server.use(router);//Usando as rotas.

server.use(( req: Request, res: Response)=>{

    res.status(404).json({error: "Not Found"})

});//Usado depois de use(router) ele faz com que caso não seja encontrado esse caminha ele execute isso.

server.listen(process.env.PORT);