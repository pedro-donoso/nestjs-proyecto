import { Controller, Get } from "@nestjs/common";
import { TasksService } from './tasks.service';


@Controller({})
export class TaskController {
    tasksService:TasksService;

    constructor(tasksService:TasksService) {
        this.tasksService = tasksService;
    }

   @Get('/tasks')
   getAllTasks(){
    return this.tasksService.getTasks();
   }

}
