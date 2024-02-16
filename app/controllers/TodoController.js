import { todoService } from "../services/TodoService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";


export class TodoController {
    constructor() {
        console.log('controller hooked up');
    }

    async createNewTodo() {
        try {
            event.preventDefault()
            console.log('create new to do in the controller');
            await todoService.createNewTodo()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }
}