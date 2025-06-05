import db from './databaseInstance';
 import { Despesa } from './despesa';

 class GestorDados {
     public async remover(chave: string){
     db.write(()=>
         db.delete(db.objects('Despesa')
                     .filtered('codigo = $0', parseInt(chave)))
     );
     }
     public async adicionar(despesa: Despesa){
     db.write(() => db.create('Despesa', despesa));
     }
     public async obterTodos(): Promise<Array<Despesa>>{
     let objetos = [];
     for(let obj of db.objects<Despesa>('Despesa')){
         objetos.push(JSON.parse(JSON.stringify(obj)));
     }
     return objetos;
     }
 }

 export default GestorDados;