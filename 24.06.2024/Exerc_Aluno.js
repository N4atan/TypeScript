var ask = require('readline-sync');
var Teacher = /** @class */ (function () {
    function Teacher(nome, idade, disciplina) {
        this.nome = nome;
        this.idade = idade;
        this.disciplina = disciplina;
    }
    Teacher.prototype.setTeacher = function () {
        var nomeUp = ask.question('Qual o nome do novo professor? ');
        var idadeUp = Number(ask.question('Qual idade ele tem? '));
        var disciplinaUp = ask.question('Qual disciplina ele dá? ');
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.disciplina = disciplinaUp;
        ask.question('...');
        console.clear();
    };
    Teacher.prototype.getTeacher = function () {
        console.log("??: Ol\u00E1, me chamo ".concat(this.nome, "."));
        console.log("".concat(this.nome, ": Tenho ").concat(this.idade, " anos e serei seu novo professor de ").concat(this.disciplina, "."));
        ask.question('...');
        console.clear();
    };
    return Teacher;
}());
var School = /** @class */ (function () {
    function School(professor, nome_school, end_school) {
        this.professor = professor;
        this.nome_school = nome_school;
        this.end_school = end_school;
    }
    School.prototype.getSchool = function () {
        console.log("Google Maps: A escola ".concat(this.nome_school, " fica na rua ").concat(this.end_school, ". O professor mais conhecido deles \u00E9 o ").concat(this.professor.nome, "."));
        ask.question('...');
        console.clear();
    };
    School.prototype.setSchool = function () {
        var nomeUp = ask.question('Qual o nome da nova escola? ');
        var endUp = ask.question('Qual o novo nome da rua? ');
        this.nome_school = nomeUp;
        this.end_school = endUp;
        ask.question('...');
        console.clear();
    };
    return School;
}());
/*Criar Professor,
Criar Escola,
modificar Professor,
modificar Escola,
visualizar Professor,
 visualizar Escola e
 sair. */
var professor;
var escola;
var whilee = true;
while (whilee) {
    console.log("\n            --MENU--\n        1.CRIAR PROFESSOR\n        2.CRIAR ESCOLA\n        3.MODIFICAR PROFESSOR\n        4.MODIFICAR ESCOLA\n        5.VISUALIZAR PROFESSOR\n        6.VIZUALIZAR ESCOLA\n        7.SAIR\n    ");
    var answerUser = Number(ask.question('Qual deseja? Digite o numero!!'));
    switch (answerUser) {
        case 1: //NOME, IDADE, DISCIPLINA
            if (professor == null) {
                var nome = ask.question('Qual o nome desse professor?');
                var idade = Number(ask.question('Quantos anos ele tem? '));
                var disciplina = ask.question('Ele é professor de qual matéria? ');
                professor = new Teacher(nome, idade, disciplina);
            }
            else {
                console.log('Voce já criou um professor!');
                ask.question('...');
                console.clear();
            }
            break;
        case 2: //professor, nome escola, endereço escola
            if (escola == null) {
                var nomeEscola = ask.question('Qual o nome da escola? ');
                var endEscola = ask.question('Em qual rua ela fica? ');
                escola = new School(professor, nomeEscola, endEscola);
            }
            else {
                console.log('Voce já criou uma escola!');
                ask.question('...');
                console.clear();
            }
            break;
        case 3:
            if (professor != null) {
                professor.setTeacher();
            }
            else {
                console.log('Voce ainda nao pode executar esse código!');
                ask.question('...');
                console.clear();
            }
            break;
        case 4:
            if (escola != null) {
                escola.setSchool();
            }
            else {
                console.log('Voce ainda nao pode executar esse código!');
                ask.question('...');
                console.clear();
            }
            break;
        case 5:
            if (professor != null) {
                professor.getTeacher();
            }
            else {
                console.log('Voce ainda nao pode executar esse código!');
                ask.question('...');
                console.clear();
            }
            break;
        case 6:
            if (escola != null) {
                escola.getSchool();
            }
            else {
                console.log('Voce ainda nao pode executar esse código!');
                ask.question('...');
                console.clear();
            }
            break;
        case 7:
            whilee = false;
            console.clear();
            break;
    }
}
