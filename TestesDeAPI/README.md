# Prova - testes de API

Lista de testes de API para a prova de laboratório de S206 com data de entrega para 26/11/2024.
API testada: [Fake Store API](https://fakestoreapi.com/docs)

### Tools/packages used
- Postman;
- NPM;
- Newman;
- newman-reporter-htmlextra;

## Requirements

In order to run this project you have to install:

- [Postman (optional)](https://www.postman.com/downloads/);
- [NPM (in order to install newman)](https://www.npmjs.com/package/download);

## How to run

Clone the repository

```bash
git clone https://github.com/AlexandrePossari/S206-ProvaDeLaboratorio.git
```

Open a command line tool in the following relative path: "S206-ProvaDeLaboratorio/TestesDeApi". Then:

```bash
npm install newman
npm install newman-reporter-htmlextra
```

Now, to generate the report:
```bash
newman run 'Prova laboratório - Testes de API.postman_collection.json' -r htmlextra
```

Besides that, you can simply import the "Prova laboratório - Testes de API.postman_collection" into your Postman and run.