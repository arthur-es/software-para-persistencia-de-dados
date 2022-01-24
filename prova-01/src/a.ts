import * as convert from 'xml-js';

import { exit } from 'process';
import * as prompts from 'prompts';
// import leArquivo from './utils/leArquivo';
import dados from '../static/dados';

async function Prova01() {
  const { opcao } = await prompts({
    type: 'number',
    name: 'opcao',
    message: `📋 MENU:\n
1 - Pesquisar por texto
2 - Pesquisar por número e texto
3 - Listar todos os cursos
4 - Sair\n`,
    validate: (value: number) => {
      return value >= 1 && value <= 4
        ? true
        : `Deve ser um número entre 1 e 4.`;
    },
  });

  switch (opcao) {
    case 1:
      opcaoPesquisaPorTexto();
      break;

    case 2:
      pesquisaPorNumeroETexto();
      break;

    case 3:
      listarTodosOsCursos();
      break;

    case 4:
      fecharPrograma();
      break;

    default:
      console.log('Erro: caiu dentro do default do SWITCH CASE');
  }
}

async function opcaoPesquisaPorTexto() {
  console.log(`Você escolheu pesquisar por texto!`);

  const { campoDePesquisa } = await prompts({
    type: 'text',
    name: 'campoDePesquisa',
    message: `Você gostaria de pesquisar por:\n1 - NOME\n2 - DISCIPLINA\n`,
    validate: (value: number) => {
      return value == 1 || value == 2 ? true : `Deve ser a opção 1 ou 2.`;
    },
  });

  const { textoPesquisa } = await prompts({
    type: 'text',
    name: 'textoPesquisa',
    message: `Entre com o texto para pesquisar: `,
    validate: (value: string) => {
      return value.length >= 0 && value.length <= 256
        ? true
        : `Deve ter no mínimo 1 caracter e no máximo 256.`;
    },
  });

  pesquisaPorTexto(campoDePesquisa, textoPesquisa);
}

async function pesquisaPorTexto(campo: number, texto: string) {
  const cursos = pegaTodosOsCursos();

  if (campo == 1) {
    console.log(
      `Pesquisando nos cursos todos que incluem no campo NOME o texto: ${texto}`,
    );

    const todosCursosEncontrados = cursos.filter((curso: any) => {
      return curso.nome.toLowerCase().includes(texto.toLocaleLowerCase());
    });

    if (todosCursosEncontrados.length === 0) {
      console.log('Nenhum curso encontrado!');
    } else {
      console.log('Cursos encontrados: ', todosCursosEncontrados);
    }
  } else if (campo == 2) {
    console.log(
      `Pesquisando nos cursos todos que incluem no campo DISCIPLINA o texto: ${texto}`,
    );

    const todosCursosEncontrados = cursos.filter((curso: any) => {
      return curso.disciplina.toLowerCase().includes(texto.toLocaleLowerCase());
    });

    if (todosCursosEncontrados.length === 0) {
      console.log('Nenhum curso encontrado!');
    } else {
      console.log('Cursos encontrados: ', todosCursosEncontrados);
    }
  }
}

async function pesquisaPorNumeroETexto() {
  console.log(`Você escolheu pesquisaPorNumeroETexto`);
  console.log(
    'Não entendi o enunciado: Na pesquisa por número e texto, você deve escolher se vai usar as opções de maior ou menor, também é fixo e a cargo do aluno. O texto, segue o item anterior.',
  );
}

async function listarTodosOsCursos() {
  console.log(`Lista de todos os cursos da universidade:`);

  console.log(pegaTodosOsCursos());
}

async function fecharPrograma() {
  console.log(`Fechando programa...`);

  exit();
}

function pegaTodosOsCursos() {
  // const arquivoLido = await leArquivo('./static/dados.xml');

  const arquivoRaw: any = parseXml(dados);
  const cursosRaw = arquivoRaw.universidade.curso;

  let cursos = cursosRaw.map((curso) => {
    const novoCurso = {
      ano: Number(curso.ano._text),
      ch: Number(curso.ch._text),
      nome: curso.nome._text,
      iden: curso.iden._text,
      disciplina: curso.disciplina._text,
    };

    return novoCurso;
  });

  return cursos;
}

function parseXml(xmlString: string) {
  return JSON.parse(
    convert.xml2json(xmlString, {
      compact: true,
      ignoreComment: true,
      spaces: 4,
      trim: true,
    }),
  );
}

Prova01();
