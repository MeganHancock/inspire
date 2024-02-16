import { generateId } from "../utils/GenerateId.js"

export class Todo {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
    }


    get TodoListHTMLTemplate() {
        return `
        <p><input id="completed" name="completed" value="completed" type="checkbox">${this.description}</p>
        
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
