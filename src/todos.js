import Project from './project';

const localStorage = require('localstorage-memory');

export default class Todo {
  constructor() {
    // Check if there are any saved projects in local storage
    const savedProjects = localStorage.getItem('projects');

    // If there are saved projects, use them, otherwise create an Inbox project
    if (savedProjects) {
      this.projects = savedProjects;
    } else {
      this.projects = [new Project('Inbox')];
    }
  }

  setProjects(projects) {
    this.projects = projects;
    localStorage.setItem('projects', projects);
  }

  getProjects() {
    return this.projects;
  }

  getProject(name) {
    return this.projects.find((project) => project.getName() === name);
  }

  addProject(project) {
    this.projects.push(project);
    localStorage.setItem('projects', this.projects);
  }

  deleteProject(name) {
    const del = this.projects.find((project) => project.getName() === name);
    this.projects.splice(this.projects.indexOf(del), 1);
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }
}
