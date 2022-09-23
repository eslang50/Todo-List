import { format, compareAsc } from 'date-fns';
import Task from "./task";
import Project from "./project";


export default class Todo {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('Inbox'));
    this.projects.push(new Project('Today'));
    this.projects.push(new Project('This Week'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(name) {
    return this.projects.find((project) => project.getName() === name);
  }

  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(name) {
    const del = this.projects.find((project) => project.getName() === name)
    this.projects.splice(this.projects.indexOf(del), 1);
  }

} 
