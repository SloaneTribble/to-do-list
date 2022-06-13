export default class Project{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.toDos = [];
    }

    addToDo(toDo){
        this.toDos.push(toDo);
    }

    getToDos(){
        let toDos = [];
        for(let i = 0; i < this.toDos.length; i++){
            toDos.push(this.toDos[i]);
        }
        return toDos;
    }

    setTitle(title){
        this.title = title;
    }

    setDescription(description){
        this.description = description;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    setPriority(priority){
        this.priority = priority;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getDueDate(){
        return this.dueDate
    }

    getPriority(){
        return this.priority
    }


}