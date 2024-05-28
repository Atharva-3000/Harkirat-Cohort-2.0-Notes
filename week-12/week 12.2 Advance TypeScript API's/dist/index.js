"use strict";
// interface User{
//     name:string;
//     age:number;
// }
const config = {
    endpoint: '<https://api.example.com>',
    apiKey: 'abcdef123456',
};
const users = {
    "id1": {
        id: 'id1',
        name: 'Atharva',
    },
    "id2": {
        id: 'id2',
        name: 'Rahul',
    },
};
// map: map is used to create a new object type by transforming the properties of an existing object type.
const users1 = new Map();
users1.set('id1', { id: 'id1', name: 'Atharva' });
users1.set('id2', { id: 'id2', name: 'Rahul' });
const getUser = users1.get('id1');
console.log(getUser);
