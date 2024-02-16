import { todoService } from "../services/TodoService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML, setText } from "../utils/Writer.js";


export class TodoController {
    constructor() {
        console.log('controller hooked up');
    }

    async createNewTodo() {
        try {
            event.preventDefault()
            // console.log('create new to do in the controller');
            const form = event.target
            // console.log('form', form)
            const todoFormData = getFormData(form)
            await todoService.createNewTodo(todoFormData)
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
