const express = require("express");
const mongos = require("mongoose")

const app = express()






app.get("/", (req, res) => {
  res.send("Backend Running!");
});

app.listen(3030, () =>{
    console.log("server is running on 3030");
})
