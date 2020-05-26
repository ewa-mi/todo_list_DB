//server

const express = require("express");
const app = express();
const PORT = 4000;
const User = require("./models").user;
app.use(express.json());

app.get("/users", async (req, res, next) => {
  try {
    console.log("request recieved");
    const users = await User.findAll();
    console.log("users from data base", users);

    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.get("/users/:id", async (req, res, next) => {
  console.log("look for", req.params);
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).send("user with this id doesn't exist");
    } else {
      res.json(user);
    }
  } catch (error) {
    next(error);
  }
});

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

// app.post("/echo", (req, res) => {
//   res.json(req.body);
// });
app.listen(PORT, console.log(`server running on ${PORT}`));
