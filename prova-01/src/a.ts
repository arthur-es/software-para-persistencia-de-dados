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
      pesquisaPorTexto();
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
      console.log('default');
  }
}

async function pesquisaPorTexto() {
  console.log(`Você escolheu pesquisaPorTexto`);
}

async function pesquisaPorNumeroETexto() {
  console.log(`Você escolheu pesquisaPorNumeroETexto`);
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
