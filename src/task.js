export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDescription(desc) {
    this.description = desc;
  }

  getDescription() {
    return this.description;
  }

  setDueDate(date) {
    this.dueDate = date;
  } 

  getDueDate() {
    return this.dueDate;
  }

  setPriority(prio) {
    this.priority = prio;
  }

  getPriority() {
    return this.priority;
  }

  formatDate() {
    const day = this.dueDate.split('/')[0];
    const week = this.dueDate.split('/')[1];
    const year = this.dueDate.split('/')[2];
    return `${day}/${week}/${year}`;
  }

}