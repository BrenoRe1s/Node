import {IAluno} from '../Models/Aluno'
class AlunoRepository{
    constructor(){

    }
     getAll():IAluno[]{
            //Pede ao BD os dados de todos os alunos
            return [{name:"Breno",email: 'string',
                phone: 'string',
                matricula: 'string',
                cpf: 'string',
                senha: 'string'}]

        };
        getById(id: string){
            //Solicitar ao BD os dados pertencente auele id
            return [{name:"Breno",email: 'string',
                phone: 'string',
                matricula: 'string',
                cpf: 'string',
                senha: 'string'}]
        };
        add(data:IAluno){
            //Solicita ao BD adicione aquele usuario
            return data;
        };
        update(id: string,data:IAluno){
            //Solicita ao BD atualize os dados pertencente aquele id
            return data;
        };
        delete(id: string){
            //Solicita ao BD a exclusão dos dados pertencente aquele id
            return id;
        };
}
export default AlunoRepository;