class Pessoa {
  #nome;
  #dataNascimento;

  constructor(nome, dataNascimento) {
    this.#nome = nome;
    this.#dataNascimento = new Date(dataNascimento);
  }

  #calcularIdade() {
    const hoje = new Date();
    let idade = hoje.getFullYear() - this.#dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = this.#dataNascimento.getMonth();

    if (
      mesAtual < mesNascimento ||
      (mesAtual === mesNascimento && hoje.getDate() < this.#dataNascimento.getDate())
    ) {
      idade--;
    }
    return idade;
  }

  apresentar() {
    return `Me chamo ${this.#nome} e tenho ${this.#calcularIdade()} anos.`;
  }

  dizerOi() {
    return `Oi. Meu nome é ${this.#nome}.`;
  }

  dizerTchau() {
    return `Tchau!`;
  }

  get nome() {
    return this.#nome;
  }
}

class Estudante extends Pessoa {
  #curso;
  #notas;

  constructor(nome, dataNascimento, curso) {
    super(nome, dataNascimento);
    this.#curso = curso;
    this.#notas = [];
  }

  apresentar() {
    return `${super.apresentar()} Eu sou aluno do curso de ${this.#curso} da PUCRS`;
  }

  dizerOi() {
    return `Opa, beleza?. Sou ${this.nome}, estudante de ${this.#curso}.`;
  }

  adicionarNota(disciplina, nota) {
    this.#notas.push(new NotaDisciplina(disciplina, nota));
  }

  listarNotas() {
    if (this.#notas.length === 0) {
      return `${this.nome} ainda não possui notas.`;
    }

    return `Notas de ${this.nome}:\n` + this.#notas.map(n => `- ${n.toString()}`).join('\n');
  }
}

class Professor extends Pessoa {
  #disciplinas;

  constructor(nome, dataNascimento) {
    super(nome, dataNascimento);
    this.#disciplinas = [];
  }

  adicionarDisciplina(disciplina) {
    this.#disciplinas.push(disciplina);
  }

  listarDisciplinas() {
    if (this.#disciplinas.length === 0) {
      return `${this.nome} ainda não ensina nenhuma disciplina.`;
    }

    return `Disciplinas lecionadas por ${this.nome}:\n` +
      this.#disciplinas.map(d => `- ${d.toString()}`).join('\n');
  }

  apresentar() {
    return `${super.apresentar()} Sou professor(a).`;
  }

  dizerTchau() {
    return `Tchau!`;
  }
}

class Disciplina {
  #nome;
  #codigo;

  constructor(nome, codigo) {
    this.#nome = nome;
    this.#codigo = codigo;
  }

  getNome() {
    return this.#nome;
  }

  getCodigo() {
    return this.#codigo;
  }

  toString() {
    return `${this.#nome} (Código da disciplina: ${this.#codigo})`;
  }
}

class NotaDisciplina {
  #disciplina;
  #nota;

  constructor(disciplina, nota) {
    this.#disciplina = disciplina;
    this.#nota = nota;
  }

  getDisciplina() {
    return this.#disciplina;
  }

  getNota() {
    return this.#nota;
  }

  setNota(novaNota) {
    this.#nota = novaNota;
  }

  toString() {
    return `${this.#disciplina}: ${this.#nota}`;
  }
}

// Instância da classe Pessoa
const pessoa = new Pessoa("Mario Fernandes", "2000-01-19")
// Instância da classe Estudante
const aluno = new Estudante("Lucas", "2002-01-12", "Ciência da Computação");
// Instância da classe Professor
const professoraRose = new Professor("Rose Amaral", "1965-06-22", "Matemática");

aluno.adicionarNota("Matemática", 8.5);
aluno.adicionarNota("Lógica de Programação", 9.2);
aluno.adicionarNota("Algoritmos", 7.8);


console.log(pessoa.dizerOi());
console.log(pessoa.apresentar());
console.log(pessoa.dizerTchau());
console.log("--------------------------------------");

console.log(aluno.dizerOi());
console.log(aluno.apresentar());
console.log(aluno.listarNotas());
console.log(aluno.dizerTchau());
console.log("--------------------------------------");

console.log(professoraRose.dizerOi());
console.log(professoraRose.apresentar());
console.log(professoraRose.dizerTchau());
console.log("--------------------------------------");


// Instâncias criadas da classe Disciplina:
const fisica = new Disciplina("Física", "FISICA101");
const matematica = new Disciplina("Matemática", "MATEMATICA101");

// Instância da classe Professor
const professoraMarina = new Professor("Marina Fernandes", "1970-05-13");

professoraMarina.adicionarDisciplina(fisica);
professoraMarina.adicionarDisciplina(matematica);

console.log(professoraMarina.dizerOi());
console.log(professoraMarina.apresentar());
console.log(professoraMarina.listarDisciplinas());
console.log(professoraMarina.dizerTchau());
