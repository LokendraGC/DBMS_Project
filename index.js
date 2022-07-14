const express = require('express')
const app = express();
const port = 8000;


//SECTION 1 SENDING ALL THE WEB PAGE FILES STORED IN A DIRECTORY


app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});



//listening to the port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


