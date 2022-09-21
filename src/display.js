import './styles.css';
import Project from './project';
import Task from './task';
import Todo from './todos';

const todos = new Todo();

export function display() {
  
  
}

export function displayProjects() {
  const projects = document.getElementById('projects');
  projects.classList.add('project-list');

  
  const projectArray = todos.getProjects();

  projectArray.forEach((p) => {
    const project = document.createElement('div');
    project.classList.add('project');
    
    project.innerHTML = `${p.getName()}`
    projects.appendChild(project);
  })


}

export function addProjectForm() {

  const addProjectButton = document.getElementById('add-project-button');
  const layout = document.getElementById('layout')
  const addProjects = document.getElementById('add-project');

  addProjectButton.addEventListener('click', function(){
    const newProjectForm = document.getElementById('project-form')
    newProjectForm.style.opacity = 1;
  })


}

export function submitProjectForm() {
  const form = document.querySelector('form');
  const projectName = document.getElementById('name').value;
  const newProject = new Project(projectName);

  todos.addProject(newProject);

  // find a way to add input value to project array -- maybe try input instead of button

  form.reset();
  return false;
}

export function displayInbox() {
  const allTasks = document.createElement('div');
  const tasks = todos.getProjects()[0].getTasks();
  console.table(tasks);
}

export function displayToday() {
  const tasksToday = document.createElement('div');
  const tasks = todos.getProjects()[1].getTasks();
  console.log(tasks);
}

export function displayWeek() {
  const tasksWeek = document.createElement('div');
  const tasks = todos.getProjects()[2].getTasks();

}

export function displayProject() {
  const projects = document.querySelectorAll('.project')
  const mainContent = document.querySelector('.main-content')
  const dummy = document.createElement('div');
  mainContent.appendChild(dummy);
  for(let project of projects) {
    project.addEventListener('click', function(){
      mainContent.removeChild(mainContent.lastChild);
      const projectHeader = document.createElement('h1');
      projectHeader.classList.add('project-header')
      projectHeader.innerHTML = project.textContent;
      mainContent.appendChild(projectHeader);
    })
  }

}



