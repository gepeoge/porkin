export class Despesa{
    codigo: number;
    desc: string;
    valor: number;
    data: string;
    constructor(codigo: number, desc: string, valor: number, data: string){
        
        this.codigo = codigo;
        this.desc = desc;
        this.valor = valor;
        this.data = data;
    }
}