## Atividade 17/08

### Questão 1 - Notas e Médias Mágicas

Escreva uma classe cujos objetos representam alunos matriculados em uma
disciplina mágica. Cada objeto dessa classe deve guardar os seguintes dados do
aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes
métodos para esta classe:

```typescript
interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}
```

### Questão 2 - Calendário Mágico

Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta
classe deverá dispor dos seguintes métodos:

```typescript
interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): number;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): string;
    getAno(): number;
    isBissexto(): boolean;
    clone(): Data;
}
```

### Questão 3 - Vôos Encantados

Escreva uma classe em que cada objeto representa um vôo mágico que acontece
em determinada data e horário. Cada vôo possui no máximo 100 passageiros, e a
classe permite controlar a ocupação das vagas. A classe deve ter os seguintes
métodos:

```typescript
interface Voo {
    constructor(numeroVoo: string, data: Data);
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): string;
    getData(): Data;
    clone(): Voo;
}
```

### Questão 4 - Prova Mágica

Escreva uma classe Prova em que cada objeto representa uma prova mágica feita
por um aluno. Esta prova possui 15 questões de múltipla escolha (letras A a E). As
10 primeiras questões valem 0,5 ponto e as 5 últimas questões valem 1 ponto. Esta
classe deverá controlar as questões respondidas pelo aluno. Para isto, a classe
deve implementar os métodos:

```typescript
interface Prova {
    constructor(gabarito: Gabarito);
    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}
```
