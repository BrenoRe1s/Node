import {Task} from '../models/task'

class TaskRepository{
    private tasks: Task[];

    constructor(){
        this.tasks = []
    }

    get(): Task[]{
        return this.tasks
    }
    add(data:Task):Task{
        this.tasks.push(data);
        return data
    }
    update(data:Task,position:number):Task{
        this.tasks[position] = data;
        return data;
    }
    delete(position:number){
        console.log(this.tasks[position])
        delete this.tasks[position];
        return position
    }

}

export default TaskRepository;