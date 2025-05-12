import {Request, Response} from 'express';
import AlunoService from  '../Services/AlunoService';

const alunoService = new AlunoService;

class AlunoController{
    constructor(){

    };
    getAll(Req: Request, Res: Response){
        //Validar os dados e mais tarde enviar para o service
        const result = alunoService.getAll();
        Res.json({result});

    };//action que vai pegar todos os alunos.
    getById(Req: Request, Res: Response){
        const result = alunoService.getById(Req.params.id);
    };
    add(Req: Request, Res: Response){
        const result = alunoService.add(Req.body);
        Res.json(result)
    };
    update(Req: Request, Res: Response){
        const result = alunoService.update(Req.params.id, Req.body)
        Res.json(result)
    };
    delete(Req: Request, Res: Response){
        const result = alunoService.delete(Req.params.id);
        Res.json(result);
    };
};

export default AlunoController;