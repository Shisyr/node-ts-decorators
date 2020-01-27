import AuthController from './controllers/auth'
import CourseController from './controllers/course';
import BaseController from "./controllers/base";
import UserController from "./controllers/user/user.controller";

export const controllers = [
    BaseController,
    AuthController,
    UserController,
    CourseController
];
