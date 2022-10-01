export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    if(name === '')
      return
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

  getTasks(taskTitle) {
    return this.tasks.find((task) => task.getTitle() === taskTitle);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskTitle) {
    return this.tasks.filter((task) => task.name !== taskTitle)
  }

  
}