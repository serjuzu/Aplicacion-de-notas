import './styles.css';


//centralizo todos los import/export en classes/index.js

import {Todo,TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);//forma corta si el callback solo devuelve un único argumento

console.log(todoList);