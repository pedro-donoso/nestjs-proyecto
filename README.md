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
