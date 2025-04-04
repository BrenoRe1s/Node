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

# Typerscript
yarn add @types/express -D(isso é pra ser instalado como dependencia de desenvolvimento) *Adiciona os Types do Typescript que é algo muito usado junto do Express*
yarn add ts-node -D *bliblioteca que compila pro node*
npx tsc --init *Pra fazer o tsconfig.json*(se não fizer não rechonhece .ts)