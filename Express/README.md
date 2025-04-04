# Node
Feito para guardar conceitos básicos 
pack.json é onde vai ficar todas as dependencias
yarn.lock é onde fica informações como versãos
node_modules onde ficaram instaladas as dependencias

# Iniciando a aplicação Node
Para iniciar *yarn -y init* (para yarn)
Para iniciar *npm -y init* (para npm)

# Nodemon
yarn add nodemon *instala naquele projeto*
yarn global add nodemon *instala globalmente o nodemon na sua maquina*
yarn nodemon *pra iniciar o nodemon*
nodemon ("nome do arquivo") *Roda o arquivo usando o nodemon(tem que iniciar o nodemon)*

# Express
*Ele oferece uma série de funcionalidades que facilitam a criação de servidores e APIs*
yarn add express *instala naquele projeto*

# Typerscript
yarn add @types/express -D(isso é pra ser instalado como dependencia de desenvolvimento) *Adiciona os Types do Typescript que é algo muito usado junto do Express*
yarn add ts-node -D *bliblioteca que compila pro node*
npx tsc --init *Pra fazer o tsconfig.json*(se não fizer não rechonhece .ts)

# Dotenv

É uma biblioteca usada para carregar variáveis de ambiente de um arquivo .env(Crie ele dentro da pasta raiz do projeto) para o ambiente de execução da aplicação. Ele é muito útil para armazenar informações sensíveis, como credenciais de banco de dados, chaves de API e configurações específicas do ambiente (desenvolvimento, produção etc.).

npm install dotenv *Instalar o dotenv*

# Cors

O cors (Cross-Origin Resource Sharing) é um mecanismo de segurança que permite ou restringe requisições feitas de um domínio diferente do servidor da API. No Node.js, a biblioteca cors é usada para configurar essas permissões.

npm install cors
npm install @types/cors