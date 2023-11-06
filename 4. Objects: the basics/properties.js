/* create an object with multiple properties 
we are creating a user object two properties
name and age are two properties of object user
 */
let user = {
    name: 'Nitesh',
    age: 30
}

console.log('user created with properties: ', user);

/* 
 Add one more property to created object user
*/

user.isAdmin = true;
console.log('object user after adding one more property isAdmin: ', user);

/* 
    properties can be removed from existing object using delete keyword
    lets remove the added property isAdmin from user
*/
delete user.isAdmin
console.log('object after removing property: ', user);

