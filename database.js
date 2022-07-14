const {Client}= require("pg");

const client= new Client({
    host: "localhost",
    user: "postgres",
    port:5432,
    password:"loke8502",
    database:"postgres"
})
   
client.connect();

client.query(`select * from student1`,(err,res)=>{
    if(!err)
    {
        console.log("database connected");
        console.log(res.rows);
    }
    else{
        console.log(`Error occure ${err}`);
    }
    client.end();
})