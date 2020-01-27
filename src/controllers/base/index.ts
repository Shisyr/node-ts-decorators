import {Express} from "express";
import BaseControllerInterface from "./interface.base";


export default class BaseController implements BaseControllerInterface {
    app: Express;
    constructor(app: Express) {
        this.app = app;
    }

    register() {
        this.app.get('/api/v1/health', (req, res) => {
            res.send('Ok');
        });
    }

}
