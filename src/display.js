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

  const mainContent = document.getElementById('project-header')
  mainContent.removeChild(mainContent.lastChild);

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
  const mainContent = document.getElementById('project-header')
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
  const mainContent = document.getElementById('project-header')
  const projectHeader = document.createElement('h1')
  projectHeader.classList.add('project-header')
  projectHeader.innerHTML = 'Inbox'
  mainContent.appendChild(projectHeader);

  // iterates through projects which allows users to click on each project
  for(let project of projects) {
    project.addEventListener('click', function(){
      mainContent.removeChild(mainContent.lastChild);
      const projectHeader = document.createElement('h1');
      projectHeader.classList.add('project-header')
      projectHeader.innerHTML = project.textContent;
      mainContent.appendChild(projectHeader);
      const taskContent = document.getElementById('tasks')
      if(taskContent.firstChild)
        taskContent.removeChild(taskContent.lastChild)
      displayTasks();
    })
  }
}

export function addTask() {
  const addTaskButton = document.getElementById('add-task');
  const addTaskForm = document.querySelector('.add-task-form');
  const cancelButton = document.getElementById('cancel');
  cancelButton.addEventListener('click', function() {
    addTaskForm.reset();
    addTaskForm.style.opacity = 0
    return false;
  })
  
  addTaskButton.addEventListener('click', function() {
    addTaskForm.setAttribute('onsubmit', 'return addTaskForm()')
    addTaskForm.style.opacity = 1;
  })

}

export function addTaskForm() {
  const form = document.querySelector('.add-task-form')
  const projectHeader = document.getElementById('project-header')
  
  const project = todos.getProject(projectHeader.lastChild.textContent);

  const title = document.querySelector('.title-input').value
  const description = document.querySelector('.task-description').value;
  const dueDate = document.querySelector('.due-date-picker').value;

  const newTask = new Task(title, description, dueDate);

  project.addTask(newTask);
  
  form.style.opacity = 0;

  displayTasks()
  
  form.reset();
  // return false;
}

window.addTaskForm = addTaskForm;

export function displayTasks() {
  const projectHeader = document.getElementById('project-header')

  const project = todos.getProject(projectHeader.lastChild.textContent);

  const taskContent = document.getElementById('tasks')
  const tasksContainer = document.createElement('div')

  const tasks = project.tasks;
  
  console.table(tasks)

  for(let task of tasks) {
    while(taskContent.firstChild)
      taskContent.removeChild(taskContent.lastChild)
    const taskContainer = document.createElement('div')
    const taskTitle = task.getTitle();
    const taskDescription = task.getDescription();
    const taskDueDate = task.getDueDate();

    taskContainer.innerHTML = `<strong>${taskTitle}</strong> <br>${taskDescription}`
    tasksContainer.appendChild(taskContainer)
  }
  
  taskContent.appendChild(tasksContainer)
}

