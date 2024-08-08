/* ==================================================================================================
    QUESTÃO 3:
- Escreva uma classe em que cada objeto representa um vôo mágico que acontece
em determinada data e horário. Cada vôo possui no máximo 100 passageiros, e a
classe permite controlar a ocupação das vagas. A classe deve ter os seguintes
métodos: */

import { NewDate } from "./calendar";

export interface Voo {
    //To usando a classe do Q2 como classe data
    constructor(numeroVoo: string, data: NewDate);
    //no caso proximo assento livre
    proximoLivre(): number;
    //checa ver se tá livre
    verifica(cadeira: number): boolean;
    //ocupa lugar
    ocupa(cadeira: number): boolean;
    //total de vagas livre
    vagas(): number;
    getVoo(): string;
    getData(): NewDate;
    clone(): Voo;
}

export class Voo implements Voo {
    numeroVoo: string
    data: NewDate
    assentosLivres: number
    assentosOcupados: Array<number>

    constructor(numeroVoo: string, data: NewDate) {
        this.numeroVoo = numeroVoo
        this.data = data

        this.assentosLivres = 100
        this.assentosOcupados = []
    }

    getVoo(): string {
        return `Voo Nº ${this.numeroVoo} \nAssentos Livres: ${this.assentosLivres}\nAssentos Ocupados: ${this.assentosOcupados.length} 
        `
    }

    getData(): NewDate {
        return this.data
    }

    vagas(): number {
        return this.assentosLivres - this.assentosOcupados.length
    }

    proximoLivre(): number {
        for (let i = 0; i < this.assentosLivres; i++) {
            if (!this.assentosOcupados.includes(i)) {
                return i
            }
        }

        return -1
    }

    verifica(cadeira: number): boolean {
        return !this.assentosOcupados.includes(cadeira)
    }

    ocupa(cadeira: number): boolean {
        if (this.verifica(cadeira)) {
            this.assentosOcupados.push(cadeira)
            return true
        }
        return false
    }

    clone(): Voo {
        let newVoo = new Voo(this.numeroVoo, this.data)
        newVoo.assentosOcupados = this.assentosOcupados
        return newVoo
    }

}
