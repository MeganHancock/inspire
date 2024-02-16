class TodoService {
    createNewTodo() {
        console.log('new to do in service hook up');
    }


}

export const todoService = new TodoService()