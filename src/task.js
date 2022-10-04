export default class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
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

  formatDate() {
    const day = this.dueDate.split('-')[1];
    const week = this.dueDate.split('-')[2];
    const year = this.dueDate.split('-')[0];
    return `${day}/${week}/${year}`;
  }

  // formatEditDate() {
  //   const day = this.dueDate.split('/')[1];
  //   const month = this.dueDate.split('/')[0]
  //   const year = this.dueDate.split('/')[]
  // }

}