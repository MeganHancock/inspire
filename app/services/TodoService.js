import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js"

class TodoService {


    async getTodosForLoggedInUser() {
        const response = await api.get('api/todos')
        console.log('getting my todos', response.data);
        const myTodos = response.data.map(todoPOJO => new Todo(todoPOJO))
        AppState.listOfTodos = myTodos
    }


    async createNewTodo(todoFormData) {
        // console.log('new to do in service hook up', todoFormData);
        let newTodo = new Todo(todoFormData)
        // console.log('new to do', newTodo)
        AppState.listOfTodos.push(newTodo)
        // console.log('new todo list', AppState.listOfTodos)
        const response = await api.post('api/todos', newTodo)
        // console.log('posting to do', response.data);
    }


}

export const todoService = new TodoService()