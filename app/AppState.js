import { BackgroundImage } from './models/BackgroundImage.js'
import { Quote } from './models/Quote.js'
import { Todo } from './models/Todo.js'
import { Weather } from './models/Weather.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**
  * @type {Todo | null}
  */
  newTodo = null

  /**
    * @type {Todo[]}
    */
  listOfTodos = []


  /**
  * @type {Weather | null}
  */
  weather = null

  /**
  * @type {BackgroundImage | null}
  */
  backgroundImage = null


  /**
  * @type {Quote | null}
  */
  quote = null
}

export const AppState = createObservableProxy(new ObservableAppState())