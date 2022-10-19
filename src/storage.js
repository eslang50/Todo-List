import Project from './project';
import Task from './task';
import Todo from './todos';

export default class Storage {
  static saveTodoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data))
  }

  static getTodoList() {
    const todoList = Object.assign(
      new Todo(),
      JSON.parse(localStorage.getItem('todoList')),
    );

    todoList.setProjects(
      Todo
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    )

    todoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new Task(), task))
        )
      )

    return todoList
  }}