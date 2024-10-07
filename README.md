# Cadastro de Empresas

Este projeto é dividido em duas partes:

- **Cadastro de Empresas API**: Back-end em NestJS.
- **Cadastro de Empresas UI**: Front-end em Angular.

## Requisitos

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)
- [MySQL](https://www.mysql.com/)

## Instalação

### 1. Clonando o repositório

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd cadastro-de-empresas
    ```

### 2. Configurando o Back-end (NestJS)

1. Navegue até a pasta da API:

    ```bash
    cd cadastro-de-empresas/cadastro-de-empresas-API
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` na pasta da API e adicione as variáveis de ambiente necessárias para a conexão com o banco de dados MySQL:

    ```bash
    DATABASE_URL="mysql://user:password@localhost:3306/meubanco"
    ```

    > Substitua `user`, `password` e `meubanco` pelas suas credenciais e nome do banco de dados.

4. Execute as migrações do Prisma para criar as tabelas no banco de dados:

    ```bash
    npx prisma migrate dev
    ```

5. Inicie o servidor:

    ```bash
    npm run start
    ```

    A API estará rodando em `http://localhost:3000`.

### 3. Configurando o Front-end (Angular)

1. Navegue até a pasta da UI:

    ```bash
    cd ../cadastro-de-empresas-UI
    ```

2. Instale as dependências:

    ```bash
    npm install --legacy-peer-deps
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    ng serve
    ```

    O front-end estará disponível em `http://localhost:4200`.

### 4. Testando a aplicação

Agora você pode acessar o front-end em `http://localhost:4200` e interagir com a API que estará rodando em `http://localhost:3000`.