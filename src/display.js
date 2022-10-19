import './styles.css';
import Project from './project';
import Task from './task';
import Todo from './todos';
import editIcon from './images/pencil.png';
import deleteIcon from './images/delete.png';

const todos = new Todo();
// let todos = Storage.getTodoList()

// localStorage.setItem('todos', JSON.stringify(todos))

// displays projects on sidebar
export function displayProjects() {
  const projects = document.getElementById('projects');
  projects.classList.add('project-list');

  const projectArray = todos.getProjects();

  // localStorage.setItem('projects', JSON.stringify(projectArray))

  // iterates through all projects and displays respective names
  projectArray.forEach((p) => {
    const project = document.createElement('div');
    project.classList.add('project');
    project.innerHTML = `${p.getName()}`;
    projects.appendChild(project);
  });
}

// causes form to appear
export function removeProject() {
  const removeBtn = document.getElementById('remove-project-button');
  const addBtn = document.getElementById('add-button');
  removeBtn.addEventListener('click', () => {
    addBtn.innerHTML = 'Remove';
    const newProjectForm = document.getElementById('project-form');
    newProjectForm.style.opacity = 1;
    newProjectForm.setAttribute('onsubmit', 'return removeProjectForm()');
  });
}

// causes the project form to appear
export function addProject() {
  const addProjectButton = document.getElementById('add-project-button');
  const addBtn = document.getElementById('add-button');
  const rmvBtn = document.getElementById('project-cancel');
  const newProjectForm = document.getElementById('project-form');

  addProjectButton.addEventListener('click', () => {
    addBtn.innerHTML = 'Add';
    newProjectForm.style.opacity = 1;
    newProjectForm.setAttribute('onsubmit', 'return submitProjectForm()');
  });

  rmvBtn.addEventListener('click', () => {
    newProjectForm.style.opacity = 0;
  });
}

// makes form appear after pressing + sign to add new task to project
export function addTask() {
  const addTaskButton = document.getElementById('add-task');
  const addNewTaskForm = document.querySelector('.add-task-form');
  const cancelButton = document.getElementById('cancel');
  const taskFormButton = document.getElementById('add-task-button');
  cancelButton.addEventListener('click', () => {
    addNewTaskForm.reset();
    taskFormButton.setAttribute('disabled', '');
    addNewTaskForm.style.opacity = 0;
    return false;
  });

  addTaskButton.addEventListener('click', () => {
    taskFormButton.textContent = 'Add Task';
    addNewTaskForm.setAttribute('onsubmit', 'return addTaskForm()');
    taskFormButton.removeAttribute('disabled');
    addNewTaskForm.style.opacity = 1;
  });
}

// displays task in each project
export function displayTasks() {
  const projectHeader = document.getElementById('project-header');

  const project = todos.getProject(projectHeader.lastChild.textContent);

  const taskContent = document.getElementById('tasks');
  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('tasks-container');
  // eslint-disable-next-line prefer-destructuring
  const tasks = project.tasks;
  let numOfClicks = 0;

  // iterate through each task in a project
  tasks.forEach((task) => {
    while (taskContent.firstChild) {
      taskContent.removeChild(taskContent.lastChild);
    }
    const taskContainer = document.createElement('div');
    const drop = document.createElement('div');
    drop.classList.add('drop');

    taskContainer.classList.add('task-container');
    let taskTitle = document.createElement('div');
    taskTitle.innerHTML = task.getTitle();
    const taskDescription = task.getDescription();
    const taskDueDate = document.createElement('div');
    taskDueDate.classList.add('task-due-date');

    taskDueDate.innerHTML = task.formatDate();

    drop.appendChild(taskTitle);
    drop.appendChild(taskDueDate);

    // dropdown menu
    const taskDropdown = document.createElement('div');
    taskDropdown.classList.add('task-dropdown');
    const icons = document.createElement('div');
    icons.classList.add('icons');
    const edit = new Image();
    edit.src = editIcon;
    edit.classList.add('edit-icon');
    icons.appendChild(edit);
    const del = new Image();
    del.classList.add('delete-icon');
    del.src = deleteIcon;
    icons.appendChild(del);

    const descIconContainer = document.createElement('div');
    descIconContainer.classList.add('desc-icon-container');
    const taskDescriptionText = document.createElement('div');
    taskDescriptionText.classList.add('description');
    taskDescriptionText.innerHTML = `${taskDescription}`;
    const taskTitleText = document.createElement('div');
    taskTitleText.classList.add('task-title-text');
    taskTitleText.innerHTML = taskTitle.innerHTML;

    descIconContainer.appendChild(taskTitleText);
    descIconContainer.appendChild(taskDescriptionText);
    descIconContainer.appendChild(icons);
    taskDropdown.appendChild(descIconContainer);

    const dateDropdown = document.createElement('div');
    dateDropdown.classList.add('date-dropdown');
    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.innerHTML = 'Due Date';
    const dueDate = document.createElement('div');
    dueDate.innerHTML = taskDueDate.innerHTML;
    dueDate.classList.add('date');

    dateDropdown.appendChild(taskDate);
    dateDropdown.appendChild(dueDate);

    // for the dropdown to drop down and up every click
    drop.addEventListener('click', () => {
      if (numOfClicks % 2 === 0) {
        taskDropdown.style.opacity = 1;
        taskContainer.style.marginBottom = '120px';
      } else {
        taskDropdown.style.opacity = 0;
        taskContainer.style.marginBottom = '10px';
      }

      numOfClicks += 1;
    });

    const updateTask = document.createElement('button');
    updateTask.classList.add('update-task-button');
    updateTask.innerHTML = 'Update';

    updateTask.addEventListener('click', () => {
      // edit task title
      taskTitleText.setAttribute('contenteditable', false);
      taskTitleText.setAttribute('placeholder', 'Task name...');
      taskTitleText.style.backgroundColor = 'rgb(235, 233, 233)';
      taskTitle = taskTitleText.textContent;
      task.setTitle(`${taskTitle}`);

      // edit task description
      taskDescriptionText.setAttribute('contenteditable', false);
      taskDescriptionText.setAttribute('placeholder', 'Description...');
      taskDescriptionText.style.backgroundColor = 'rgb(235, 233, 233)';
      task.setDescription(taskDescriptionText.textContent);

      displayTasks(); // updates tasks
    });

    icons.appendChild(updateTask);

    // delete current task
    del.addEventListener('click', () => {
      tasksContainer.removeChild(taskContainer);
      project.deleteTask(taskTitle.innerHTML);
      console.table(tasks);
      displayTasks();
    });

    // edit icon event lisenter to allow user to edit
    edit.addEventListener('click', () => {
      taskTitleText.setAttribute('contenteditable', true);
      taskDescriptionText.setAttribute('contenteditable', true);
      const updateDueDate = document.createElement('input');

      dueDate.removeChild(dueDate.lastChild);
      updateDueDate.classList.add('update-date-picker');
      updateDueDate.setAttribute('type', 'date');

      updateDueDate.addEventListener('change', (event) => {
        task.setDueDate(event.target.value);
      });

      dueDate.appendChild(updateDueDate);

      taskTitleText.style.cssText = 'background-color: white; border-radius: 4px';
      taskDescriptionText.style.cssText = 'background-color: white; border-radius: 4px';
    });

    taskDropdown.appendChild(dateDropdown);
    taskContainer.appendChild(drop);
    taskContainer.appendChild(taskDropdown);
    tasksContainer.appendChild(taskContainer);
  });

  taskContent.appendChild(tasksContainer);
}

// displays project name in main content
export function displayProject() {
  const projects = document.querySelectorAll('.project');
  const mainContent = document.getElementById('project-header');
  const projectHeader = document.createElement('h1');
  projectHeader.classList.add('project-header');
  projectHeader.innerHTML = 'Inbox';
  mainContent.appendChild(projectHeader);

  // iterates through projects which allows users to click on each project
  projects.forEach((project) => {
    project.addEventListener('click', () => {
      mainContent.removeChild(mainContent.lastChild);
      const header = document.createElement('h1');
      header.classList.add('project-header');
      header.innerHTML = project.textContent;
      mainContent.appendChild(header);
      const taskContent = document.getElementById('tasks');
      if (taskContent.firstChild) {
        taskContent.removeChild(taskContent.lastChild);
      }
      displayTasks();
    });
  });
}

// for onsubmit function when adding new project
export function submitProjectForm() {
  const form = document.querySelector('form');
  const projectName = document.getElementById('name').value;
  const newProject = new Project(projectName);
  localStorage.setItem('project', JSON.stringify(newProject));

  newProject.setName(projectName);
  todos.addProject(newProject);

  const projects = document.getElementById('projects');
  const project = document.createElement('div');
  project.classList.add('project');
  project.innerHTML = `${newProject.getName()}`;

  // removes previous projects header when adding new project
  const mainContent = document.getElementById('project-header');
  mainContent.removeChild(mainContent.lastChild);
  projects.appendChild(project);

  // makes form disappear after submitting
  const newProjectForm = document.getElementById('project-form');
  newProjectForm.style.opacity = 0;

  displayProject();

  form.reset();
  return false;
}

window.submitProjectForm = submitProjectForm;

// onsubmit form to retrieve values for adding new task
export function addTaskForm() {
  const form = document.querySelector('.add-task-form');
  const projectHeader = document.getElementById('project-header');
  const project = todos.getProject(projectHeader.lastChild.textContent);
  const taskFormButton = document.getElementById('add-task-button');
  taskFormButton.setAttribute('disabled', '');
  const title = document.querySelector('.title-input').value;
  const description = document.querySelector('.task-description').value;
  const dueDate = document.querySelector('.due-date-picker').value;

  const newTask = new Task(title, description, dueDate);

  project.addTask(newTask);
  form.style.opacity = 0;

  displayTasks();
  form.reset();
  return false;
}

window.addTaskForm = addTaskForm;

// for onsubmit function to remove specific project
export function removeProjectForm() {
  const form = document.querySelector('form');
  const projectName = document.getElementById('name').value;
  todos.deleteProject(projectName);

  // makes form disappear after submitting
  const newProjectForm = document.getElementById('project-form');
  newProjectForm.style.opacity = 0;
  const projects = document.getElementById('projects');
  // delete the original in order to append the newly modified one
  while (projects.firstChild) {
    projects.removeChild(projects.lastChild);
  }

  const mainContent = document.getElementById('project-header');
  mainContent.removeChild(mainContent.lastChild);

  // displays in sidebar
  displayProjects();

  // for headers in main content
  displayProject();

  form.reset();
  return false;
}

window.removeProjectForm = removeProjectForm;
