const express = require("express");
const app = express();
const PORT = 8000;
const bodyParser = require("body-parser");

let value = 0;

app.use(bodyParser.json());

const users = [];
app.get("/all-users", (req, res) => {
  res.json(users);
});

app.post("/add-user", (req, res) => {
  const { name, dept, degree } = req.body;
  //   const id = users.length;
  const id = value++;
  //console.log({id, name, dept, degree});
  users.push({ id, name, dept, degree });
  res.send(
    "Yes Your Request Is Accepted SuccessFully. Here Im sending Response!!!!"
  );
});

app.put("/edit-user/:id", (req, res) => {
  const { name, dept, degree } = req.body;
  let id = req.params.id;

  //console.log(users[id]);
  let existing = users.filter((e) => e.id == id);
  users.splice(users.indexOf(existing[0]), 1, { id, name, dept, degree });

  //users.splice(id,1,{id,name,dept,degree});
  res.send(users);
  console.log(existing[0]);
});

app.delete("/delete-user/:id", (req, res) => {
  // const { name, dept, degree } = req.body;
  let id = req.params.id;

  //console.log(users[id]);
  let existing = users.filter((e) => e.id == id);
  users.splice(users.indexOf(existing[0]), 1);
  res.send(users);
});

app.listen(PORT, () => {
  console.log("Server is up in " + PORT);
});
