export interface ICurso {
  iden: number;
  ano: number;
  nome: number;
  disciplina: string;
  ch: number;
}

export default class Curso {
  iden: number;
  ano: number;
  nome: number;
  disciplina: string;
  ch: number;

  constructor({ iden, nome, ano, ch, disciplina }: ICurso) {
    this.iden = iden;
    this.ano = ano;
    this.nome = nome;
    this.disciplina = disciplina;
    this.ch = ch;
  }

  public imprimeDados() {
    console.log(`Curso: ${this.nome}\n`);
  }
}
