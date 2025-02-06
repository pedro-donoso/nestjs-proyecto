import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from './tasks.service';


@Controller({})
export class TaskController {

    constructor(private tasksService:TasksService) {}

   @Get('/tasks')
   getAllTasks(){
    return this.tasksService.getTasks();
   }

    @Post('/tasks')
   createTask(){
    return 'Creando tareas';
   }

    @Put('/tasks')
  updateTask(){
    return 'Actualizando tareas';
   }

    @Delete('/tasks')
  deleteTask(){
    return 'Eliminando tareas';
   }

     @Patch('/tasks')
  updateTaskStatus(){
    return 'actualizando el estado de una tarea';
   }
}
