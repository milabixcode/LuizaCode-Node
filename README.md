# Introdução ao NODEJS
Aula 1 - Iniciando com ExpressJs (Framework para Node.js que fornece recursos mínimos para construção de servidores web)
Aula 2 - Relacionamento com o Banco de Dados
Aula 3 - Criando usuário e utilizando o bcrypt

Serviços usados:
Banco de dados: ElephantSQL
API Client: Insomnia
Conexão com o Banco de Dados: PostBird
Editor/IDE: Visual Studio Code

Comandos:
*npm i
*npm i sequelize-cli -D
*npm i sequelize
*npm install pg --save
*npm i pg-hstore //Instala o drive do postgree

//Conectando ao banco de dados
*npx sequelize migration:create --name=users //Cria o banco
*npx sequelize db:migrate                    //Executa o banco
*npx sequelize db:migrate:undo:all           //Reverte
*npm run dev                                 //Subindo um servidor
*npm i bcryptjs                              //Instala o bcryptjs para criptografia da senha do tipo hash
*lsof -i :'numero da porta'                  //Identificar a porta que está em uso
*kill -9 'PID'                               //Mata o processo do PID 