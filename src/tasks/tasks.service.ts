import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {

    getTasks() {
        return ['Task 1', 'Task 2', 'Task 3']
    }

    createTask() {
        return 'Creando tareas'
    }

    updateTask() {
        return 'Actualizando tareas'
    }

    deleteTask() {
        return 'Eliminando Tarea'
    }

    updateTaskStatus() {
        return 'Actualizando el estado de una tarea'
    }

}