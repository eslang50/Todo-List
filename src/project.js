export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
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

  getTasks(taskName) {
    this.tasks.find((task) => task.getName() === taskName);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskName) {
    this.tasks.filter((task) => task.name !== taskName)
  }

  

  
}