# The 2CanBoard
This simple task based kanban style app allows the user to #1 - Add personal task and #2- Add team tasks and track them through several stages. A simple, elegant UI paired with the beautiful natural background creates a relaxing view of all your busy work. 
- Allows users to add tasks
- Categorize your task as Personal or Team
- Advance your task to the next status
- Filter your view of task by Personal, Team or All.
- Clear all completed tasks with one click
- Delete any single task easily

## How the app was created
 - This project was built with the following;
  - Vue.js and Vue-CLI
  - Node.js
  - Axios
  - Sequelize
  - JawsDB
  - Bootstrap
  - MySql2
  - Deployed on Heroku: https://two-can-board.herokuapp.com/
 
## How the app is structured
 - This is a single page application
 - Components include: Header, Board, and Card
 - App will put, post, get and delete data from the database to populate the board

## How to Use the App
- The 2Can Board is displayed with tasks. 
- ![User Selects Prompt](https://github.com/joshGrossman03/2-can-board/blob/master/images/01_home.png)
- User adds a task: Title, Category: Personal or Team, Description
- ![User Selects Prompt](https://github.com/joshGrossman03/2-can-board/blob/master/images/02_add_task.png)
- User can toggle view to see only Personal tasks, only Team tasks or All tasks. All tasks are shown by default.
- ![User Selects Prompt](https://github.com/joshGrossman03/2-can-board/blob/master/images/03_view_personal_tasks.png)
- ![User Selects Prompt](https://github.com/joshGrossman03/2-can-board/blob/master/images/04_view_team_tasks.png)
- ![User Selects Prompt](https://github.com/joshGrossman03/2-can-board/blob/master/images/05_view_all_tasks.png)
- Move a task to the next phase/status
- ![User Selects Prompt](https://github.com/joshGrossman03/2-can-board/blob/master/images/06_move_task_forward.png)
- ![User Selects Prompt](https://github.com/joshGrossman03/2-can-board/blob/master/images/07_move_task_forward2.png)
- Clear Done tasks with a single click
- ![User Selects Prompt](https://github.com/joshGrossman03/2-can-board/blob/master/images/09_cleared_done_tasks.png)


## Developer Notes
### Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Run your tests
```
npm run test
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
