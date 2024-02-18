import { AccountController } from "./controllers/AccountController.js";
import { BackgroundImageController } from "./controllers/BackgroundImageController.js";
import { ClockController } from "./controllers/ClockController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { TodoController } from "./controllers/TodoController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [TodoController, WeatherController, BackgroundImageController, ClockController, QuoteController],
    view: 'app/views/HomeView.html'
  },

  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




