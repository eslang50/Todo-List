import './styles.css';
import Project from './project';
import Task from './task';
import Todo from './todos';
import { add } from 'date-fns';

let todos = new Todo();

// displays projects on sidebar
export function displayProjects() {
  const projects = document.getElementById('projects');
  projects.classList.add('project-list');
  
  const projectArray = todos.getProjects();

  // iterates through all projects and displays respective names
  projectArray.forEach((p) => {
    const project = document.createElement('div');
    project.classList.add('project');
    
    project.innerHTML = `${p.getName()}`;
    projects.appendChild(project);
  })

}

// causes form to appear
export function removeProject() {
  const removeBtn = document.getElementById('remove-project-button');
  const addBtn = document.getElementById('add-button');
  
  removeBtn.addEventListener('click', function() {
    addBtn.innerHTML = 'Remove';
    const newProjectForm = document.getElementById('project-form');
    newProjectForm.style.opacity = 1;
    newProjectForm.setAttribute('onsubmit', 'return removeProjectForm()');
  })

}

// for onsubmit function to remove specific project
export function removeProjectForm() {
  
  const form = document.querySelector('form');
  const projectName = document.getElementById('name').value;
 
  todos.deleteProject(projectName);

  console.table(todos.getProjects())
  
  // makes form disappear after submitting
  const newProjectForm = document.getElementById('project-form')  
  newProjectForm.style.opacity = 0;

  const projects = document.getElementById('projects')

  // delete the original in order to append the newly modified one
  while(projects.firstChild) {
    projects.removeChild(projects.lastChild);
  }

  // displays in sidebar
  displayProjects();

  // for headers in main content
  displayProject();

  form.reset();
  return false;
}

window.removeProjectForm = removeProjectForm;

// causes the project form to appear
export function addProject() {

  const addProjectButton = document.getElementById('add-project-button');
  const addBtn = document.getElementById('add-button')
  
  addProjectButton.addEventListener('click', function(){
    const newProjectForm = document.getElementById('project-form');
    addBtn.innerHTML = 'Add'
    newProjectForm.style.opacity = 1;
    newProjectForm.setAttribute('onsubmit', 'return submitProjectForm()');
  })

}

// for onsubmit function when adding new project
export function submitProjectForm() {
  
  const form = document.querySelector('form');
  const projectName = document.getElementById('name').value;
  const newProject = new Project(projectName);
  newProject.setName(projectName);
  todos.addProject(newProject);
  console.table(todos.getProjects());
  
  const projects = document.getElementById('projects');
  const project = document.createElement('div');
  project.classList.add('project');
  project.innerHTML = `${newProject.getName()}`

  // removes previous projects header when adding new project
  const mainContent = document.querySelector('.main-content')
  mainContent.removeChild(mainContent.lastChild);
  projects.appendChild(project);

  // makes form disappear after submitting
  const newProjectForm = document.getElementById('project-form')  
  newProjectForm.style.opacity = 0;

  displayProject();

  form.reset();
  return false;
}

window.submitProjectForm = submitProjectForm;

// displays project name in main content
export function displayProject() {
  const projects = document.querySelectorAll('.project')
  const mainContent = document.querySelector('.main-content')

  // to prevent removeChild from removing the button in main content
  const dummy = document.createElement('div');
  mainContent.appendChild(dummy);

  // iterates through projects which allows users to click on each project
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



