import { Request,Response } from "express";
import TaskService from "../services/TaskService";
import { error } from "console";

const taskService = new TaskService();

class TaskController{
    constructor(){}
    get(Req: Request,Res: Response){
        const status = Req.query.status;
        if(status && (status === "in_progress" || status === "completed")){
            const result = taskService.get(status);
            Res.status(201).json(result);
        }else{
            Res.status(401).json({error:"Invalid parameters"});
        }
    }
    getById(Req:Request,Res:Response){
        const {id_task} = Req.params;
        if(id_task){
            const result = taskService.getById(id_task);
            Res.status(201).json(result);
        }else{
            Res.status(401).json({error:"Invalid parameters"});
        }
    }
    add(Req:Request,Res:Response){
        const { id, descricao, data, status} = Req.body;
        if(id && descricao && data && status){
            if(status === "completed" || status === "in_progress"){
                const result = taskService.add(Req.body)
                Res.status(201).json(result);
            }else{
               Res.status(404).json({ error: "Invalid status: completed or in_progress" });
            }
        }
        else{
            Res.status(401).json({error:"Invalid parameters"});
        }
    }
    update(Req:Request,Res:Response){
        const {id, descricao, data, status} = Req.body
        const {id_task} = Req.params
        if(id && descricao && data && status){
            if(status === "completed" || status === "in_progress"){
                const result =taskService.update(Req.body,id_task)
                Res.status(201).json(result);
            }else{
               Res.status(404).json({ error: "Invalid status: completed or in_progress" });
            }
        }else{
            Res.status(401).json({error:"Invalid parameters"});
        }
    }
    delete(Req:Request,Res:Response){
        const {id_task} = Req.params;
        if(id_task){
            const index =taskService.delete(id_task)
            Res.status(201).json(`Task da posição ${index} excluida`);
        }else{
            Res.status(401).json({error:"Invalid parameters"});
        }

    }
    
}
export default TaskController;