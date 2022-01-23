interface IFuncionario {
  cpf: string;
  nome: string;
  idade: number;
  salario: number;
  cargo: string;
  habilidades: Array<string>;
}

export default class Funcionario {
  cpf: string;
  nome: string;
  idade: number;
  salario: number;
  cargo: string;
  habilidades: Array<string>;

  constructor({ cargo, cpf, habilidades, idade, salario, nome }: IFuncionario) {
    this.cpf = cpf;
    this.nome = nome;
    this.cargo = cargo;
    this.idade = idade;
    this.salario = salario;
    this.habilidades = habilidades;
  }

  public imprimeDados() {
    let parsedHabilidades = '';

    this.habilidades.forEach((habilidade: string) => {
      parsedHabilidades += `${habilidade};`;
    });

    console.log(
      `Funcionário: ${this.cpf}\nNome: ${this.nome}\nIdade: ${this.idade}\nCargo: ${this.cargo}\nSalário: ${this.salario}\nHabilidades: ${parsedHabilidades}`,
    );
  }
}
