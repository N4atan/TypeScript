/* ==================================================================================================
    QUESTÃO 2:
- Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta classe deverá dispor dos seguintes métodos: */

export interface Datee {
    compara(outraData: Datee): number;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): string;
    getAno(): number;
    isBissexto(): boolean;
    clone(): Datee;
}

export class NewDate implements Datee {
    private dia: number;
    private mes: number;
    private ano: number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    compara(outraData: Datee): number {
        if (this.ano !== outraData.getAno()) {
            return this.ano - outraData.getAno();
        } else if (this.mes !== outraData.getMes()) {
            return this.mes - outraData.getMes();
        } else {
            return this.dia - outraData.getDia();
        }
    }

    getDia(): number {
        return this.dia;
    }

    getMes(): number {
        return this.mes;
    }


    getMesExtenso(): string {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[this.mes - 1];
    }

    getAno(): number {
        return this.ano;
    }

    isBissexto(): boolean {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0);
    }

    clone(): Datee {
        return new NewDate(this.dia, this.mes, this.ano);
    }
}