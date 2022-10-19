export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    if (name === '') {
      return;
    }
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(taskTitle) {
    return this.tasks.find((task) => task.getTitle() === taskTitle);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskTitle) {
    const del = this.tasks.find((task) => task.getTitle() === taskTitle);
    this.tasks.splice(this.tasks.indexOf(del), 1);
  }
}
