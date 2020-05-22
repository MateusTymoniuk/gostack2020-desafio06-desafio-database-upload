<h3 align="center">
  Desafio 06: Banco de dados e upload de arquivos no Node.js
</h3>


<p align="center">
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;
</p>


## 🚀 **Sobre**
Esta é uma aplicação feita em NodeJS, que permite criar, listar e deletar transações.
É possível também criar transações à parter do upload de um arquivo, que segue o modelo do arquivo import_template.csv, que se encontra na pasta raiz deste projeto.

Para sua construção utilizamos o conceito de Repositories e Services para retirar do arquivo de routes, a responsabilidade de tratar com as regras de negócio e a comunicação com os dados. E incluiremos o multer para o tratamento dos arquivos que virão na requisição, assim como o csv-parse, para ler os dados do arquivo.

Desafio proposto em: https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-database-upload

## 🚀 **Instalação**
1 - Clonar o [repositório](https://github.com/MateusTymoniuk/gostack2020-desafio06-desafio-database-upload) em seu computador;

2 - **Instalar as dependências do projeto** digitando no terminal o comando:

    yarn

3 - **Subir o container do docker** para criar o banco de dados postgres, digitando no terminal o comando:

    docker-compose up

4 - **Aplicar as migrations para criar as tabelas no banco de dados**:

    yarn typeorm migration:run

5 - **Executar a aplicação**:

    yarn dev:server
