import { generateId } from "../utils/GenerateId.js"

export class Todo {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
        this.id = data.id || data._id
    }


    get TodoListHTMLTemplate() {
        return `
        <div class="d-flex justify-content-between todo rounded-2 pe-2 pb-1">
        <p class="mx-2 fs-3">
        <input id="completed" name="completed" value="completed" type="checkbox">
        ${this.description}
        </p>
        <button class="btn btn-danger h-25 p-0 mt-2" type="button" onclick="app.TodoController.removeTodo('${this.id}')">X</button>
        </div>
        `
    }
}

// const apidata = {

//     "completed": {
//         "type": "Boolean",
//         "required": true,
//         "default": false
//     },
//     "description": {
//         "type": "String",
//         "required": true,
//         "maxLength": 500
//     },
//     "creatorId": {
//         "type": "ObjectId",
//         "required": true,
//         "ref": "Account"
//     }
// }
