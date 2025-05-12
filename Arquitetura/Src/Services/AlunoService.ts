import EmailService from "./EmailService";
import {IAluno} from '../Models/Aluno'
import AlunoRepository from '../repository/AlunoRepository'

const emailService = new EmailService();
const alunoRepository = new AlunoRepository();

class AlunoService{
    constructor(){

    }
    getAll():IAluno[]{
        //Pede para o repository solicitar ao banco de dados todos os registros de alunos
        return [{name: 'string',
            email: 'string',
            phone: 'string',
            matricula: 'string',
            cpf: 'string',
            senha: 'string'}]

    };
    getById(id: string){
        //Pede para o repository solicitar ao banco de dados o registro do user que tenha aquele id
        return alunoRepository.getById(id);

    };
    add(data: IAluno):IAluno{
        //Verifica se o aluno já existe
        //Se exister relata error
        //Se não existir solicita que o repository(que tem acesso ao banco de dos) faça a inserção deste aluno.
        //Enviar um e-mail para o aluno
        emailService.sendEmailWelcomeAluno(data.email);
        alunoRepository.add(data);
        return data;
        
    };
    update(id: string,data: IAluno):IAluno{
        //Verifica se o aluno existe(repository)
        //Se não existir retorna erro
        //Se existir realizar a alteração(repository)
        return alunoRepository.update(id,data);
    };
    delete(id: string):string{
        return alunoRepository.delete(id);
    };
};

export default AlunoService;