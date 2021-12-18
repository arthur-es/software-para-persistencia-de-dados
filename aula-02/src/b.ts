import * as prompts from 'prompts';

import leArquivoJSON from './utils/leArquivo';
import Funcionario from './Funcionario';

async function AulaDois() {
  const { cpf } = await prompts({
    type: 'text',
    name: 'cpf',
    message: 'Qual é o CPF que você gostaria de buscar?',
    validate: (value: string) => {
      return value.length === 11 ? true : `O CPF deve ter 11 caracteres!`;
    },
  });

  try {
    const arquivoLido = await leArquivoJSON(`./static/${cpf}.json`);

    const funcionarioRaw = arquivoLido.toString();

    const funcionario = new Funcionario(JSON.parse(funcionarioRaw));

    funcionario.imprimeDados();
  } catch (err) {
    console.log(`Funcionário com CPF ${cpf} não encontrado!`);
  }
}

AulaDois();
