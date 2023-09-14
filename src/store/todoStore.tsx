import { makeAutoObservable } from "mobx";
import { ITodo } from "../additional/types";
import { generateId } from "../additional/api";

const getCurrentTodos = () => {
  try {
    const initial = JSON.stringify([{"id":"0ac895f128481lmjcwh66","title":"One more task","completed":false},{"id":"8e13bdc1640f7lmjcvtyd","title":"My other task","completed":false},{"id":"7c4f7530d2d62lmjcvoux","title":"My first task","completed":true}]);

    return JSON.parse(window.localStorage.getItem("todos") || initial);
  } catch (err) {
    window.localStorage.setItem("todos", "[]");
  }

  return [];
};

class todoStore {
  constructor() {
    makeAutoObservable(this);
  }

  todos: Array<ITodo> = getCurrentTodos();
  show: string = "showAll";
  lang: string = "en";

  createTodo = (title: string) => {
    if (title) {
      this.todos.unshift({
        id: generateId(),
        title: title,
        completed: false,
      });

      window.localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  };

  updateTodo = (id: string, title: string) => {
    this.todos.forEach((item) => {
      if (item.id === id && title.trim() != "") {
        item.title = title;
      }
    });
    window.localStorage.setItem("todos", JSON.stringify(this.todos));
  };

  removeTodo = (id: string) => {
    const arr = this.todos.filter((item) => {
      return item.id !== id;
    });
    this.todos.splice(0, this.todos.length, ...arr);
    window.localStorage.setItem("todos", JSON.stringify(this.todos));
  };

  completeTodo = (id: string) => {
    this.todos.forEach((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    window.localStorage.setItem("todos", JSON.stringify(this.todos));
  };

  saveShow = (show: string) => {
    this.show = show;
  };

  saveLang = (lang: string) => {
    this.lang = lang;
  };
}

const store = new todoStore();
export default store;
