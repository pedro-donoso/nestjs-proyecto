import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TaskController {

   @Get('/tasks')
   getAllTasks(){
        return 'Obteniendo todas las tareas'
   }

   @Get('/')
   index(){
        return 'Página inicial'
   }

}
