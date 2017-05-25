const express = require("express");
const app = express();

app.use(express.static("./"));

app.get("/", function(req, res){
  res.send("./index.html");
});

app.get("/:id", function(req, res){
  if(req.params.id === "api"){
    res.send("Hello from API");
  } else {
    res.sendStatus(404);
  }
});

app.listen(8000, function(req, res){
  console.log("listening on port 8000");
});
