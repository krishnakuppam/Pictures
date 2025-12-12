const express = require("express");
const mongos = require("mongoose")
const cors = require("cors");
const app = express()

app.use(cors());
app.use(express.json());






app.post("/", (req, res) => {
  res.send(" ");   

});

app.listen(3030, () =>{console.log("server is running on 3030");

})
