import {controllers} from "../all-controllers";
import BaseControllerInterface from "../controllers/base/interface.base";
import * as express from 'express'
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

const APP = express();

APP.use(session({
    name: 'shisyr_session',
    secret: 'shisyr_m',
    saveUninitialized: false,
    resave: false
}));
APP.use(cookieParser());
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({extended: true}));
export function ConnectControllers(constructorClass: Function) {
    constructorClass.prototype.app = APP;
    controllers.map((controller) => {
        const newController: BaseControllerInterface = new controller(APP);
        if (newController.useMiddleWare) {
            newController.useMiddleWare();
        }
        newController.register();
        constructorClass.prototype[controller.name] = newController;
    });
}
