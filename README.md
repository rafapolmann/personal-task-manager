# Managing Personal Tasks

This project presents a system developed during a course of TypeScript with VueJS.
Basically, it’s a system to manage a personal tasks. 
It provides the possibility to create boards where be able to create specific columns and card for each activity attributing values in order to measure how much effort is necessary to conclude all items in the system. 

The purpose of this project was the study of it's used components and frameworks.

## Built With
* [TypeScript 4.8.4](https://www.typescriptlang.org/)
* [Nodejs 18.12.0](https://nodejs.org/)

### Back-end
1. REST API
    1. express
2. GraphQL ***(just as example)***
    1. apollo-server
3. Automated Tests
    1. jest
    2. ts-jest
    3. axios
4. Database Access
    1. pg-promise
5. Development Debug
    1. ts-node
    2. nodemon

### Front-end
* [Vue.js 3.2.41](https://vuejs.org/)
1. Http Client
    1. axios
2. Store
    1. pinia
3. Automated Tests
    1. vitest
    2. happy-dom

### Database
* [PostgreSQL](https://www.postgresql.org/)

### Package Manager
* [npm](https://www.npmjs.com/)
* [Yarn](https://yarnpkg.com/)


### Development tools
* [Visual Studio Code](https://code.visualstudio.com/)

## Starting

These instructions will permit you getting a copy of the project in your local machine for tests and developing. 

### Requirements

#### Editing the source code:
* You will need a code editor installed in your machine, such as **VS Code**.
* You must have NodeJs installed

### Clone Git Repository

For cloning the repository in your local machine, you just create a folder, open a Terminal Command in this directory and execute the command below:

```
git clone https://github.com/rafapolmann/personal-task-manager
```

#### Editing
You should just open **personal-task-manager** directory with **VS Code**.

#### Back-end editing
Open a new Terminal Command tab and execute the commands below:

```
cd server
npm install yarn
yarn install
```
#### Front-end editing
Open a new Terminal Command tab and execute the commands below:

```
cd client
npm install yarn
yarn install
```

## Debugging execution

#### Back-end
Will necessary the PostgreSQL installed for database. There is a file ***create.sql*** with script to create the application database tables.

After create database with name ***db_fullstack***, you could create the database tables executing the command below in a Terminal Command:

```
psql -U postgres -d db_fullstack -f create.sql
```

For back-end server execution, you should open a new Terminal Command tab and execute the commands below: 

```
cd server
npx nodemon src/main.ts
```

#### Front-end
For front-end execution, you should open a new Terminal Command tab and execute the commands below: 

```
cd client
yarn dev
```

#### After above steps:
* Access this address: http://localhost:5173/

## Tests Execution

#### Back-end
Back-end depends on server API  running. You should open a new Terminal Command tab and execute the commands below:

```
cd server
npx nodemon src/main.ts
```

After API is up, you should open another new Terminal Command tab and execute the commands below:

```
cd server
npx jest --runInBand
```

For more accurate tests, you must have database exactly equals of the ***create.sql*** script. 

The command ***--runInBand*** is necessary because some tests are going to persist on database. The concurrency would cause conflict in assertions.

#### Front-end

You must create and configure file ***vite.config.ts*** in the root path of front-end application with following instructions:

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [vue()]
})
```

In the ***package.json*** you must configure ***scripts*** section with following instructions: 

```
...
scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview",
    "test": "vitest --dom"
  },
...
```

After the above steps, open another new Terminal Command tab and execute the commands below:

```
cd client
yarn test
```

## Author

* [**Rafael Polmann**](https://github.com/rafapolmann) - *developer*

## License

This project is licensed under the MIT License - see [LICENSE](https://github.com/rafapolmann/personal-task-manager/blob/master/LICENSE) for details.
