### 1. Instalo Nestjs:

```
npm install -g @nestjs/cli
```

### 2. Revisar version de Nestjs:

```
nest -v
```

### 3. Creo proyecto Nestjs:

```
nest new myfirstapp
```

* Elijo NPM

### 4. Corro app:

```
npm run start:dev
```

### 5. Configuro proyecto:

* Elimino app.controller.ts y app.service.ts, solo dejo app.module.ts

### 6. Agrego Prettier, debajo de rules:

```
rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn'
    },
    "prettier/prettier": [
        "error",
        {
            "endOfLine": "auto"
        }
    ]

```
### 7. Creo service:

```
nest g service tasks
```

```
import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {

    getTasks() {
        return ['Task 1', 'Task 2', 'Task 3']
    }

}
```

### 8. Creo Controller en tasks sin archivo test:

```
nest g controller tasks --no-spec
```

```
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
```

### 9. Creo Módulo tasks:

```
nest g module tasks
```

```
import { Module } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
    controllers: [TaskController],
    providers: [TasksService]
})
export class TaskModule {}
```








