import * as prompts from 'prompts';
import * as xml2js from 'xml2js';

import leArquivoXML from './utils/leArquivo';
import Funcionario from './Funcionario';

async function AulaTresB() {
  const { cpf } = await prompts({
    type: 'text',
    name: 'cpf',
    message: 'Qual é o CPF que você gostaria de buscar?',
    validate: (value: string) => {
      return value.length === 11 ? true : `O CPF deve ter 11 caracteres!`;
    },
  });

  try {
    const arquivoLido = await leArquivoXML(`./static/${cpf}.xml`);

    const funcionarioRaw: any = await parseXml(arquivoLido.toString());

    const funcionarioParsed = {
      cpf: funcionarioRaw.root.cpf[0],
      nome: funcionarioRaw.root.nome[0],
      cargo: funcionarioRaw.root.cargo[0],
      idade: funcionarioRaw.root.idade[0],
      salario: funcionarioRaw.root.salario[0],
      habilidades: funcionarioRaw.root.habilidades,
    };

    const funcionario = new Funcionario(funcionarioParsed);

    funcionario.imprimeDados();
  } catch (err) {
    console.log(`Funcionário com CPF ${cpf} não encontrado!`);
  }
}

AulaTresB();

async function parseXml(xmlString: string) {
  return await new Promise((resolve, reject) =>
    xml2js.parseString(xmlString, (err, jsonData) => {
      if (err) {
        reject(err);
      }
      resolve(jsonData);
    }),
  );
}
