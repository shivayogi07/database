const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'shivu0710'
});

console.log(connection());

// try{
//   connection.query("SHOW tables",(err,result)=>{
//   if(err) throw err;
//   console.log(result);
// })
// }catch(err){
//     console.log(err);
// }

// connection.end();


// let  getRandomData = ()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }
