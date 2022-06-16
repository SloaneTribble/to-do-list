import {projectSubmit} from './project-submit';
import {toDoSubmit} from './todo-submit';


function form(input, index){

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    let type = input;

    const form = document.createElement("form");
    form.classList.add('project-form');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerText = (type === 'project')? "Project Title: " : "To-do";

    const title = document.createElement('input');
    title.type = 'text';
    title.name = 'title';
    title.placeholder = 'Title';
    title.id = 'title';

    const descriptionLabel = document.createElement('label');
    descriptionLabel.for = 'description';
    descriptionLabel.innerText = "Description: ";

    const description = document.createElement('input');
    description.type = 'text';
    description.name = 'description';

    let placeHolder = (type === 'project')? "50" : "500";
    description.placeholder = `Description (<${placeHolder} characters)`;
    description.maxLength = placeHolder - 1;
    description.id = 'description';

    const dueDateLabel = document.createElement('label');
    dueDateLabel.for= 'due-date';
    dueDateLabel.innerText = "Due date: ";

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.name = 'due-date';
    dueDate.id = 'due-date';

    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Priority: ';
    priorityLabel.htmlFor = 'priority';

    let priorities = ['low', 'medium', 'high'];

    const select = document.createElement('select');
    select.name = 'priority';
    select.id = 'priority';

    for (const priority of priorities){
        let option = document.createElement('option');
        option.value = priority;
        option.text = priority.charAt(0).toUpperCase() + priority.slice(1);
        select.appendChild(option);
    }

    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.type = 'submit';
    submit.innerText = "Submit";

    submit.addEventListener('click', function(){
        if (title.value === ""){
            alert("Please include a title.");
            return;
        }
        if(type === 'project'){
            projectSubmit();
        } else if (type === 'todo'){
            toDoSubmit(index);
        }
        form.reset();
    });

    const cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.innerText = 'cancel';
    cancel.addEventListener('click', function(){
        const pageContainer = document.querySelector('.page-container');
        const formContainer =document.querySelector('.form-container');
        pageContainer.removeChild(formContainer);
        window.location.reload();
    })

    
    
    form.appendChild(titleLabel);
    form.appendChild(title);

    form.appendChild(descriptionLabel);
    form.appendChild(description);

    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);

    form.appendChild(priorityLabel);
    form.appendChild(select);

    form.appendChild(submit);

    form.appendChild(cancel);

    function handleForm(event) {event.preventDefault();}
    form.addEventListener('submit', handleForm);

    formContainer.appendChild(form);
    

    return formContainer;
}


export{form};

