import { Router, Request, Response } from "express";

const router = Router();//Cria um novo roteador do Express para definir rotas.

router.get("/id/:id",( req: Request, res: Response)=>{

    const id_number = req.params.id;//Obtém o valor do parâmetro id da URL.

    const {tamanho, cor} = req.query;//Extrai os parâmetros tamanho e cor da query string da requisição.

    console.log(id_number);

    res.json({id_number,tamanho,cor});//Retorna uma resposta JSON com os valores capturados.

});//Define uma rota GET que recebe um parâmetro de rota id

router.get("/",( req: Request, res: Response)=>{

    res.json({status: 'Bom'});

});

router.post("/painel",( req: Request, res: Response)=>{

    const {nome,tamanho,cor,preco,quantidade_estoque} = req.body;//Extrai os dados do corpo da requisição.

    const info = {nome,tamanho,cor,preco,quantidade_estoque};//Cria um objeto *info* com os dados extraídos.

    const authorization = req.headers.authorization;//Obtém o cabeçalho de autorização da requisição.

    if(!authorization){

        res.status(400);//Define o status HTTP da resposta como 400 (Bad Request).

        res.json({error: "Authorization is required"});//Retorna um JSON informando que a autorização é necessária.

    };//Verifica se o cabeçalho de autorização está ausente.

    console.log(info);

    res.json({info,authorization});//Retorna um JSON com os dados e a autorização.

    console.log(authorization)

});//Define uma rota POST para /painel.

export default router;//Exporta o roteador para ser utilizado em outro arquivo.