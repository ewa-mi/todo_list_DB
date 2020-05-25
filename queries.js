const showUser = require("./models").user;
const showToDo = require("./models").todoitem;
// const { Op } = require("sequelize");

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

// async function showMeUserWithJ() {
//   try {
//     const letterJUser = await showUser.findAll({
//       where: { name: { [Op.startsWith]: "Jimmy" } },
//     });

//     return letterJUser.get({ plain: true });
//   } catch (e) {
//     console.error(e);
//   }
// }

showMeUsers().then((el) => console.log("All users:", el));
showMeToDos().then((el) => console.log("All tasks:", el));
showMeImportantToDos().then((el) => console.log("important tasks", el));
showMeThisUser().then((el) => console.log("This user:", el));
showMeNewUser().then((el) => console.log("The new user:", el));
// showMeUserWithJ().then((el) => console.log("The user with J:", el));
