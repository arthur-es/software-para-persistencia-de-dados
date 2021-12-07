import * as prompts from 'prompts';

import processaArquivoCSV from './utils/processaArquivoCSV';
import EstadoData from './types/estadoData';

const REGIOES = [
  { codigo: 1, nome: 'Norte' },
  { codigo: 2, nome: 'Nordeste' },
  { codigo: 3, nome: 'Sudeste' },
  { codigo: 4, nome: 'Sul' },
  { codigo: 5, nome: 'Centro Oeste' },
];

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

  const { nome: nomeRegiao } = REGIOES.find((regiao) => {
    return regiao.codigo === Number(dadosEstadoEscolhido.regiao);
  });

  console.log(
    `Estado escolhido: ${dadosEstadoEscolhido.estado} (Região ${nomeRegiao})`,
  );
}

AulaUm();
