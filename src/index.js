import { Html } from "./Html";
import { parent } from "./Application";
import { todos } from "./Request";

const app = parent();

todos().then(function(todo) {
  const todos = [];
  const Builder = Html.table({
    thead: {
      attribute: {
        id: "sample-id"
      },

      data: ["#", "User ID", "Title", "Completed"]
    },
    tbody: {
      attribute: {
        id: "sample-tbody-id"
      },

      data: todo.map( data => {
        todos.push(data.id, data.userId, data.title, data.completed);

        return todos;
      })
    }
  });

  app.innerHTML = Builder;
});

document.body.appendChild(app);
