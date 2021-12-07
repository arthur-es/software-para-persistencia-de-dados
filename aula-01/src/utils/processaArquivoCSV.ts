import * as fs from 'fs';
import * as csv from 'csv-parser';

export default async function processaArquivoCSV(caminhoArquivo: string) {
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
