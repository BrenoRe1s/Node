import {Router, Request, Response} from 'express';
import AlunoController from '../Controllers/AlunoController';//Importando a classe que controla o aluno para poder fazer a validação.

const router = Router();

const alunocontroller = new AlunoController();

router.get("/", alunocontroller.getAll);

router.get("/aluno",alunocontroller.getAll);//Vai pegar todos os alunos com a action do controller
router.get("/aluno/:id",alunocontroller.getById);// Vai pegar um alunos com a action do controller
router.post("/aluno",alunocontroller.add);//Vai enviar um aluno com a action do controller
router.put("/aluno/:id",alunocontroller.update);//Vai atualizar um aluno com a action do controller
router.delete("/aluno/:id",alunocontroller.delete);//Vai deletar um aluno com a action do controller


export default router;