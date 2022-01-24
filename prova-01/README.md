# Software para Persistência de Dados

## PROVA 01

Utilize o arquivo XML anexo para resolver as questões.

#### Parte A: construa um menu com as seguintes opções:

1 - Pesquisar por texto
2 - Pesquisar por número e texto
3 - Listar todos os cursos
4 - Sair

#### Parte B: Em cada uma das opções acima faça os filtros apropriados. Veja comentários:

Na pesquisa por texto, escolha um campo no qual deseja aplicar o filtro. Esta escolha é fixa, ou seja, cada aluno tem liberdade para definir em qual campo deseja aplicar o filtro. A pesquisa deve ser do tipo "contem", ou seja, listar todos que contém aquele texto.
Na pesquisa por número e texto, você deve escolher se vai usar as opções de maior ou menor, também é fixo e a cargo do aluno. O texto, segue o item anterior.
A última opção deve listar todos os dados dos objetos.

### Como executar esse projeto?

Clone esse repositório, depois entre na pasta da aula-02 e execute os comandos de instalação das bibliotecas/dependência do projeto; build e start;

```sh
git clone https://github.com/arthur-es/software-para-persistencia-de-dados
cd software-para-persistencia-de-dados
cd aula-03
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
