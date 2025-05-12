Arquitetura

Caminho de uma API:

Rota->Controller->Service->Model->Repositories->->->



Responsabilidades:

ROTAS - ROTAS
 Recebe uma chamada com os dados
Validador - Controllers
 Valida os dados
Services
 Faz uma ação/operação(Calcular uma raiz,enviar algo...)
Model
 Um modelo de dados para serem guardados como um User que tem(nome,email,cpf)
Repositories
 Salva as informações no banco de dados
Rota/Controller
 Ficam responsaveis de devolver uma resposta se houver algo a responder

Models:
-Modelar dados(Determinar as caracteristicas do que está sendo modelado)
Ex: Aluno(Matricula,id,Nome,Turma,Serie,Telefone,Email)
-Modelar o banco de dados
Ex: Aluno(Matricula,id,Nome,Turma,Serie,Telefone,Email)

Repositorys:
-Manipula o banco de dados(podendo ser mais de 1)
-Ele não processa dados, apenas solicita ao banco de dados



Ex:

Cadastro de Aluno
-Recebo dados da rota
-Envio para o controller validar
-Enviar dedos dados para o service
-O service solicita ao repository ao banco de dados se aquele e-mail ue o aluno informou já existe
-O repository apenas retorna o que o banco de dados respondeu
-O service analisa o que o banco de dados respondeu
-Faz ou não a inserção de dados, insere caso não existir e se existir não insere
-O repository pede ao banco de dados que insira o aluno
-Retorna um status TRUE caso o banco de dados tiver retornado ok para a inserção
-O service prescisa enviar um e-mail para o aluno
-Não deve usar o mesmo service de alunos para fazer o envio, pois está não é sua função
-Devo criar um outro service de alunos para fazer o envio do e-mailç
-Devo chamar este service que é responsável apenas por envio de e-mail com um nome que indique claramente sua função
-Solicitando que o service de e-mails faça um disparo para o e-mail do aluno
-O service de adicionar o aluno retorna para o controller a resposta
-O controller retorna para a rota
-o express retorna para o client