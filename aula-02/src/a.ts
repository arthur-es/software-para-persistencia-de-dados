import * as prompts from 'prompts';
import Funcionario from './Funcionario';
import salvaArquivoJSON from './utils/salvaArquivo';

async function AulaDois() {
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

  console.log('Salvando dados em disco...');
  funcionarios.forEach(async (funcionario: Funcionario) => {
    const functionarioJSON = JSON.stringify(funcionario, null, 4);

    await salvaArquivoJSON(
      `./static/${funcionario.cpf}.json`,
      functionarioJSON,
    );
  });
}

AulaDois();
