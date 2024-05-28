// interface User{
//     name:string;
//     age:number;
// }


// function sumOfAge(user1:User, user2:User){
//     return user1.age + user2.age;
// }

// const sums=sumOfAge({name:'Atharva', age:21}, {name:'Rahul', age:22});
// console.log(sums);

//  Pick: Pick is used to select the properties from the object.

// interface User{
//     id:string;
//     name:string;
//     age:number;
//     email:string;
//     password:string;
// };

type UserSubset = Pick<User,'id' | 'name'>;

// Partial: Partial is used to make all the properties of the object optional.

type partialUser = Partial<User>;
// bascially it will make all the properties of the object optional.

// Readonly: Readonly is used to make all the properties of the object readonly.

// type readOnlyUser = Readonly<User>;

interface Config {
    endpoint: string;
    apiKey: string;
  }

  const config: Readonly<Config> = {
    endpoint: '<https://api.example.com>',
    apiKey: 'abcdef123456',
  };
  
  // Attempting to modify the object will result in a TypeScript error
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.


// Record: Record is used to create an object type whose property keys are of a specific type.
type User = {
    id:string;
    name:string;
}
type users={
    [key:string]:User;
}

const users = {
    "id1":{
        id:'id1',
        name:'Atharva',
    },
    "id2":{
        id:'id2',
        name:'Rahul',
    },
}

// map: map is used to create a new object type by transforming the properties of an existing object type.

const users1  = new Map<string, User>()
users1.set('id1',{id:'id1', name:'Atharva'});
users1.set('id2',{id:'id2', name:'Rahul'});

const getUser = users1.get('id1');
console.log(getUser);

// Exclude: Exclude is used to exclude the properties from the object.

type User1 = {
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
};

type UserSubset1 = Exclude<keyof User1,'id' | 'name'>;



