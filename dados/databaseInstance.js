import Realm from 'realm';

 var db = new Realm({
     path: 'DespesasDB.realm',
     schema: [
         {
         name: 'Despesa',
         primaryKey: 'codigo',
         properties: {
             codigo: 'int',
             desc: 'string',
             data: 'string',
             valor: 'float'
         }
         }
     ]
     });

 export default db;
                     