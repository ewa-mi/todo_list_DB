const showUser = require("./models").user;
const showToDo = require("./models").todoitem;

async function showMeUsers() {
  try {
    const allUsers = await showUser.findAll();

    return allUsers.map((item) => {
      return item.get({ plain: true });
    });
  } catch (e) {
    console.error(e);
  }
}

async function showMeThisUser() {
  try {
    const oneUser = await showUser.findOne({ where: { name: "Lea Lee" } });

    return oneUser.get({ plain: true });
  } catch (e) {
    console.error(e);
  }
}

async function showMeToDos() {
  try {
    const allToDos = await showToDo.findAll();

    return allToDos.map((item) => {
      return item.get({ plain: true });
    });
  } catch (e) {
    console.error(e);
  }
}

async function showMeImportantToDos() {
  try {
    const importantToDos = await showToDo.findAll({
      where: { important: true },
    });
    return importantToDos.map((item) => {
      return item.get({ plain: true });
    });
  } catch (e) {
    console.error(e);
  }
}

async function showMeNewUser() {
  try {
    const newUser = await showUser.create({
      name: "Jennie Foy",
      email: "jenfoy@gmail.com",
      phone: 1230517,
    });

    return newUser.get({ plain: true });
  } catch (e) {
    console.error(e);
  }
}

showMeUsers().then((el) => console.log(el));
showMeToDos().then((el) => console.log(el));
showMeImportantToDos().then((el) => console.log("important tasks", el));
showMeThisUser().then((el) => console.log("This user:", el));
showMeNewUser().then((el) => console.log("The new user:", el));
