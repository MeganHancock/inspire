import { todoService } from "../services/TodoService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML, setText } from "../utils/Writer.js";
import { AppState } from "../AppState.js";


function _drawTodoList() {
    const todos = AppState.listOfTodos
    let htmlString = ''
    todos.forEach(todo => htmlString += todo.TodoListHTMLTemplate)
    setHTML('listOfTodos', htmlString)

    const incompleteTodos = AppState.listOfTodos.filter(todo => !todo.completed)

    setText('todoRemainingCount', `${incompleteTodos.length}`)
    setText('todoCount', AppState.listOfTodos.length)
}

// function _drawTodoCount() {
//     setText('todoCount', AppState.listOfTodos.length)
// }


export class TodoController {
    constructor() {
        // console.log('controller hooked up');

        AppState.on('listOfTodos', _drawTodoList)
        AppState.on('account', this.getTodosForLoggedInUser)
        // AppState.on('listOfTodos', _drawTodoCount)
    }



    async createNewTodo() {
        try {
            event.preventDefault()
            // console.log('create new to do in the controller');
            const form = event.target
            // console.log('form', form)
            const todoFormData = getFormData(form)
            await todoService.createNewTodo(todoFormData)
            // @ts-ignore
            form.reset()

        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }

    async getTodosForLoggedInUser() {
        try {
            await todoService.getTodosForLoggedInUser()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }

    async removeTodo(todoId) {
        try {
            const wantsToRemove = await Pop.confirm('Are you sure you would like do delete this Todo?')
            if (!wantsToRemove) {
                return
            }
            await todoService.removeTodo(todoId)
            Pop.success('Your todo list just got shorter!')
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }


    async updateTodoAsCompleted(todoId) {
        try {
            // console.log('marking to do as complete')
            await todoService.updateTodoAsComplete(todoId)
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }
}


// createNewJot() {
//     try {
//         event.preventDefault()
//         console.log('createNewJot hooked up')
//         const form = event.target
//         console.log('form', form)
//         const jotFormData = getFormData(form)
//         console.log('form data', jotFormData)
//         jotsService.createNewJot(jotFormData)
//         setText('jotCount', AppState.jots.length)
//         // @ts-ignore
//         form.reset()

//     } catch (error) {
//         console.error(error);
//         Pop.error(error)
//     }
