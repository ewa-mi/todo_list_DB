const TodoItem = require("./models").todoitem;

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      task: "Clean bedroom",
      deadline: "until November",
      important: false,
    });
    const todo2 = await TodoItem.create({
      task: "Learn to code",
      deadline: "until July",
      important: true,
    });
    const todo3 = await TodoItem.create({
      task: "Have fun",
      deadline: "asap",
      important: true,
    });

    return [todo1, todo2, todo3].map((item) => item.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
}

createSampleTodoItems().then((todos) => console.log(todos));
