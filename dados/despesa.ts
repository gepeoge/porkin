export class Despesa{
    codigo: number;
    descricao: string;
    categoria: string;
    valor: number;
    data: Date;
    constructor (codigo: number, descricao: string, categoria: string, valor: number){
        this.codigo = codigo;
        this.descricao = descricao;
        this.categoria = categoria;
        this.valor = valor;
        this.data = new Date();
    }
}