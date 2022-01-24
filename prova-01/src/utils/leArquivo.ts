import * as fs from 'fs';

export default async function leArquivo(caminhoArquivo: string) {
  let arquivo: any;

  return new Promise((resolve, reject) => {
    fs.createReadStream(caminhoArquivo)
      .on('data', (data) => {
        arquivo = data;
      })
      .on('end', () => {
        resolve(arquivo);
      })
      .on('error', () => {
        reject();
      });
  });
}
