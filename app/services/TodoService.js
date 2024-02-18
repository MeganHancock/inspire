import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js"

class TodoService {


    async updateTodoAsComplete(todoId) {
        const indexOfTodoToUpdate = AppState.listOfTodos.findIndex(todo => todo.id == todoId)

        if (indexOfTodoToUpdate == -1) {
            throw new Error('find index is -1')
        }

        const foundTodo = AppState.listOfTodos[indexOfTodoToUpdate]
        const todoUpdateData = { completed: !foundTodo.completed }
        // console.log('todo update data', todoUpdateData)

        const response = await api.put(`api/todos/${todoId}`, todoUpdateData)
        // console.log('updated todo', response.data);
        // console.log('old object', foundTodo);

        const updatedTodo = new Todo(response.data)
        AppState.listOfTodos.splice(indexOfTodoToUpdate, 1, updatedTodo)
    }


    async removeTodo(todoId) {
        const response = await api.delete(`api/todos/${todoId}`)
        // console.log('deleting todo', response.data);
        const todoIndex = AppState.listOfTodos.findIndex(todo => todo.id == todoId)
        if (todoIndex == -1) {
            throw new Error('Index was -1')
        }
        AppState.listOfTodos.splice(todoIndex, 1)
    }


    async getTodosForLoggedInUser() {
        const response = await api.get('api/todos')
        // console.log('getting my todos', response.data);
        const myTodos = response.data.map(todoPOJO => new Todo(todoPOJO))
        AppState.listOfTodos = myTodos
    }


    async createNewTodo(todoFormData) {
        const response = await api.post('api/todos', todoFormData)
        const newTodo = new Todo(response.data)
        AppState.listOfTodos.push(newTodo)


        // console.log('new to do in service hook up', todoFormData);
        // console.log('new to do', newTodo)
        // console.log('new todo list', AppState.listOfTodos)
        // console.log('posting to do', response.data);
    }

    // async createNewTodo(todoFormData) {
    //     // console.log('new to do in service hook up', todoFormData);
    //     let newTodo = new Todo(todoFormData)
    //     // console.log('new to do', newTodo)
    //     AppState.listOfTodos.push(newTodo)
    //     // console.log('new todo list', AppState.listOfTodos)
    //     const response = await api.post('api/todos', newTodo)
    //     // console.log('posting to do', response.data);
    // }


}

export const todoService = new TodoService()