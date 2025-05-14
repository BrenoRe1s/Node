export interface Task{
    id: string;
    descricao: string;
    data: string
    status: 'completed'|'in_progress'
}
const tarefa:Task = {
    id: "",
    descricao: "",
    data: "",
    status: "in_progress"
}