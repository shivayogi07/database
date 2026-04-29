const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'shivu0710'
});
let q = "SHOW tables";
try{
  connection.query(q,(err,result)=>{
  if(err) throw err;
  console.log(result);
  console.log(result[0]);
})
}catch(err){
    console.log(err);
}
connection.end();


// let  getRandomData = ()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// }
