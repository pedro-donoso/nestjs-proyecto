import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from './tasks.service';


@Controller('/tasks')
export class TaskController {

    constructor(private tasksService:TasksService) {}

   @Get()
   getAllTasks(){
    return this.tasksService.getTasks();
   }

    @Post()
   createTask(){
    return this.tasksService.createTask();
   }

    @Put()
  updateTask(){
    return this.tasksService.updateTask();
   }

    @Delete()
  deleteTask(){
    return this.tasksService.deleteTask();
   }

     @Patch()
  updateTaskStatus(){
    return this.tasksService.updateTaskStatus();
   }
}
