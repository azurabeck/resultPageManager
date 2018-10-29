/* 
isso é usado para recuperarmos todas as informações 
de um determinado nó do banco de dados do Firebase.

Este método irá retornar a lista através de um callback 
para o método setState de nossa classe App. Repare que
o método recebe como parametros um caminho para o nó 
nodePath, uma função de callback e o tamanho limitante 
para a listagem size com um valor padrão de dez items.
*/

import { firebaseDatabase } from './firebaseUtils.js'

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath)
                                   .limitToLast(size);

        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

}

