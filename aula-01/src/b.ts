import * as prompts from 'prompts';
import salvaArquivoCSV from './utils/salvaArquivoCSV';

async function AulaUm() {
  const { qtdRegistros } = await prompts({
    type: 'number',
    name: 'qtdRegistros',
    message: 'Vai entrar com quantos registros?',
    validate: (qtdRegistros: number) => {
      return qtdRegistros > 0
        ? true
        : `Deve ser um número positivo e diferente de zero.`;
    },
  });

  console.log(`Lendo registros de ${qtdRegistros} pessoas...`);

  const registros = [];

  for (let i = 0; i < qtdRegistros; i++) {
    const { nome } = await prompts({
      type: 'text',
      name: 'nome',
      message: 'Qual é o seu nome?',
      validate: (nome: string) => {
        return nome.length > 3
          ? true
          : `Seu nome deve ter mais do que três caracteres!`;
      },
    });

    const { idade } = await prompts({
      type: 'number',
      name: 'idade',
      message: 'Qual é a sua idade?',
      validate: (idade: number) => {
        return idade > 0 ? true : `Sua idade deve ser um número positivo!`;
      },
    });

    const { salario } = await prompts({
      type: 'number',
      name: 'salario',
      message: 'Qual é o seu salário?',
      validate: (salario: number) => {
        return salario >= 0
          ? true
          : `Sua idade deve ser um número positivo ou zero!`;
      },
    });

    console.log(`Nome: ${nome}.\nIdade: ${idade}\nSalário: ${salario}`);
    registros.push({ nome, idade, salario });
  }

  let csvData = `NOME,IDADE,SALARIO\n`;

  registros.forEach((registro) => {
    csvData += `${registro.nome},${registro.idade},${registro.salario}\n`;
  });

  await salvaArquivoCSV('./static/registros.csv', csvData);
}

AulaUm();
