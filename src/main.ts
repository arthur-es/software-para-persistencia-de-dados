const prompts = require('prompts');
import * as fs from 'fs';
import * as csv from 'csv-parser';

async function processaArquivoCSV(caminhoArquivo: string) {
  const resultados = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(caminhoArquivo)
      .pipe(
        csv({
          mapHeaders: ({ header }) => header.toLowerCase(),
        }),
      )
      .on('data', (data) => {
        resultados.push(data);
      })
      .on('end', () => {
        resolve(resultados);
      })
      .on('error', () => {
        reject();
      });
  });
}

type EstadoData = {
  codigo: string;
  sigla: string;
  estado: string;
  regiao: string;
};

async function AulaUm() {
  let todosEstados: Array<EstadoData> = [];

  todosEstados = (await processaArquivoCSV(
    './static/UF.csv',
  )) as Array<EstadoData>;

  const { sigla } = await prompts({
    type: 'text',
    name: 'sigla',
    message: 'Qual é a sigal do estado desejado?',
    validate: (sigla: string) => {
      return sigla.length !== 2 ? `A sigla deve ter 2 caracteres!` : true;
    },
  });

  const dadosEstadoEscolhido = todosEstados.find((estado) => {
    return estado.sigla === sigla.toUpperCase();
  });

  console.log(
    `Estado escolhido: ${dadosEstadoEscolhido.estado} (Região ${dadosEstadoEscolhido.regiao})`,
  );
}

AulaUm();
