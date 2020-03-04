import {controllers} from "../all-controllers";
import BaseControllerInterface from "../controllers/base/interface.base";
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';


export function ConnectControllers(app) {
    app.use(session({
        name: 'session',
        secret: 'shisyr_m',
        saveUninitialized: false,
        cookie: {
            maxAge: 60000
        },
        resave: false
    }));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    return function (constructorClass: Function) {
        constructorClass.prototype.app = app;
        controllers.map((controller) => {
            const newController: BaseControllerInterface = new controller(app);
            if (newController.useMiddleWare) {
                newController.useMiddleWare();
            }
            newController.register();
            constructorClass.prototype[controller.name] = newController;
        });
    }
}
