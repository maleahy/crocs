let express = require("express");
let app = new express();

console.log('hello world');

// set up database connection
const knex = require("knex")({ client: "mysql", connection: {
  host:"myrdsinstance.c5umum2q4xak.us-east-2.rds.amazonaws.com", 
  user: "admin", password: "Password1", database:"crocs", port: 
  3306,
 },
});

app.get("/",(req,res) => { knex .select() .from("CrocsShoes") 
 .then((result) => {
  console.log(result); res.send(result);
 });
});

console.log('Server is listening on port 3000');
app.listen(3000);

