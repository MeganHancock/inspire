import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js"

class TodoService {
    async createNewTodo(todoFormData) {
        console.log('new to do in service hook up', todoFormData);
        let newTodo = new Todo(todoFormData)
        console.log('new to do', newTodo)
        AppState.listOfTodos.push(newTodo)
        console.log('new todo list', AppState.listOfTodos)

        const response = await api.post('api/todos', newTodo)
        console.log('posting to do', response.data);
    }


}

export const todoService = new TodoService()