import './styles.css';
import Project from './project';
import Task from './task';
import Todo from './todos';

export function display() {
  
  
}

export function displayProjects() {
  const projects = document.getElementById('projects');
  projects.classList.add('project-list');

  const todos = new Todo();
  const projectArray = todos.getProjects();

  projectArray.forEach((p) => {
    const project = document.createElement('div');
    project.classList.add('project');
    
    project.innerHTML = `${p.getName()}`
    projects.appendChild(project);
  })


}