import * as fs from 'fs';

export default async function salvaArquivoJSON(
  caminhoArquivo: string,
  data: string,
) {
  console.log('Salvando arquivo...');

  return new Promise((resolve, reject) => {
    fs.writeFile(caminhoArquivo, data, function (err) {
      if (err) {
        console.log(err);

        return reject(err);
      }

      return resolve(data);
    });
  });
}
