"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = require("fs");
const csv = require("csv-parser");
function processaArquivoCSV(caminhoArquivo) {
    return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
        const resultados = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(caminhoArquivo)
                .pipe(csv({
                mapHeaders: ({ header }) => header.toLowerCase(),
            }))
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
    });
}
exports.default = processaArquivoCSV;
//# sourceMappingURL=processaArquivoCSV.js.map