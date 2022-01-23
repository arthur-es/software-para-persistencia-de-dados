import * as xml2js from 'xml2js';

import * as prompts from 'prompts';
import Funcionario from './Funcionario';
import salvaArquivoXML from './utils/salvaArquivo';

async function AulaTresA() {
  const { qtdFuncionarios } = await prompts({
    type: 'number',
    name: 'qtdFuncionarios',
    message: 'Vai entrar com os dados de quantos funcionários?',
    validate: (value: number) => {
      return value > 0
        ? true
        : `Deve ser um número positivo e diferente de zero.`;
    },
  });

  console.log(`Lendo dados de ${qtdFuncionarios} funcionários...`);

  let funcionarios: Funcionario[] = [];

  for (let i = 0; i < qtdFuncionarios; i++) {
    const { cpf } = await prompts({
      type: 'text',
      name: 'cpf',
      message: 'CPF:',
      validate: (value: string) => {
        return value.length === 11 ? true : `O CPF deve ter 11 caracteres!`;
      },
    });

    const { nome } = await prompts({
      type: 'text',
      name: 'nome',
      message: 'Nome:',
    });

    const { idade } = await prompts({
      type: 'number',
      name: 'idade',
      message: 'Idade:',
      validate: (value: number) => {
        return value > 0 ? true : `A idade deve ser um número positivo!`;
      },
    });

    const { salario } = await prompts({
      type: 'number',
      name: 'salario',
      message: 'Salário?',
      validate: (value: number) => {
        return value >= 0
          ? true
          : `Sua idade deve ser um número positivo ou zero!`;
      },
    });

    const { cargo } = await prompts({
      type: 'text',
      name: 'cargo',
      message: 'Cargo:',
    });

    const { habilidades } = await prompts({
      type: 'text',
      name: 'habilidades',
      message: 'Liste as habilidades separadas por vírgula:',
    });

    const parsedHabilidades = habilidades
      .split(',')
      .map((habilidade: string) => habilidade.trim());

    const func = new Funcionario({
      cpf,
      nome,
      idade,
      cargo,
      salario,
      habilidades: parsedHabilidades,
    });

    funcionarios.push(func);
  }

  const xmlBuilder = new xml2js.Builder({
    headless: true,
  });

  console.log('Salvando dados em disco...');
  funcionarios.forEach(async (funcionario: Funcionario) => {
    // converte pra xml
    const xmlFuncionario = xmlBuilder.buildObject(funcionario);

    // salva xml
    await salvaArquivoXML(`./static/${funcionario.cpf}.xml`, xmlFuncionario);
  });
}

AulaTresA();
