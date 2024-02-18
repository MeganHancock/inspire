

export class Todo {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
        this.id = data.id || data._id
    }


    get TodoListHTMLTemplate() {
        return `
        <div class="d-flex justify-content-between align-items-center todo rounded-2 pe-2 pb-1">
        <div class="mx-2 fw-bold">
        ${this.CompletedCheckbox} 
        ${this.description}
        </div>
        <div>
        <button class="btn btn-danger h-25  p-0 mt-2" type="button" onclick="app.TodoController.removeTodo('${this.id}')"> <span class=" fs-4 mdi mdi-trash-can-outline"></span> </button>
        </div>
        </div>
        `
    }

    get CompletedCheckbox() {
        return `
        <input onchange="app.TodoController.updateTodoAsCompleted('${this.id}')" ${this.completed ? 'checked' : ''} type="checkbox">
        `
    }

}

// get ListButtonHTMLTemplate() {
//     return `
//     <div class="mb-2">
//       ${this.PreparedCheckbox}
//       <button onclick="app.SandboxSpellsController.setActiveSpell('${this.id}')" class="btn btn-info w-75">${this.name}</button>
//     </div>
//     `
//   }

//   get PreparedCheckbox() {
//     // NOTE onchange will execute code every time an inputs value is changed. Very handy for checkboxes
//     // NOTE ternary conditionally adds the 'checked' attribute to our input if the spell.prepared == true
//     return `
//     <input onchange="app.SandboxSpellsController.prepareSpell('${this.id}')" ${this.prepared ? 'checked' : ''} type="checkbox">
//     `
//   }

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
