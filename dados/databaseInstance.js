import Realm from 'realm';

 var db = new Realm({
     path: 'Despesas.realm',
     schema: [
         {
         name: 'despesa',
         primaryKey: 'codigo',
         properties: {
            codigo: 'number',
            descricao: 'string',
            categoria: 'string',
            valor: 'number',
            data: 'date'
         }
         }
     ]
     });

 export default db;
                     