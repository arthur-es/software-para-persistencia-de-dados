# Software para Persistência de Dados

## DESAFIO DA AULA 02

### Parte A: Crie uma classe java, chamada Funcionario, com os seguintes atributos

cpf - String
nome - String
idade - int
salario - double
cargo - String
habilidades - Lista de Strings (ArrayList)

### Parte B: Gravação e Pesquisa de funcionários em arquivos JSON. Banco de dados texto.

Crie um classe em Java que faça a leitura dos dados de um Funcionário (dados acima) e instancie um objeto Funcionario. Em seguida, utilizando a API Gson, converta o objeto funcionario em JSON e grave os dados em um arquivo chamado cpf.json (onde cpf é o número do cpf do funcionário).
Cada funcionário será gravado em um arquivo json próprio.
Crie uma classe Java que leia um cpf, abra o arquivo json com este cpf e instancie um objeto funcionário com os dados lidos. Então, escreva o dados do funcionário. Se não existir o cpf informado, dê uma mensagem adequada.

### Como executar esse projeto?

Clone esse repositório, depois entre na pasta da aula-02 e execute os comandos de instalação das bibliotecas/dependência do projeto; build e start;

```sh
git clone https://github.com/arthur-es/software-para-persistencia-de-dados
cd software-para-persistencia-de-dados
cd aula-02
npm install
npm run build
npm run start:a
npm run start:b
```

### Scripts disponíveis para trabalhar nesse projeto

- `build` - compila de TypeScript para JavaScript,
- `start:a` - roda o programa a.js (ref. a PARTE B 1),
- `start:b` - roda o programa b.js (ref. a PARTE B 2),
- `build:watch` - compila de TS para JS sempre que há uma alteração em algum arquivo .ts,
