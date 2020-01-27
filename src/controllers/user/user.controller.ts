import {Express} from 'express'
import BaseController from '../base';
import BaseControllerInterface from "../base/interface.base";
import {injectService} from "../../decorators/injectService";
import UserService from "../../services/user/user.service";


export default class UserController extends BaseController implements BaseControllerInterface {
    @injectService(UserService) private userService: UserService;
    constructor(app: Express) {
        super(app);
    }

    register() {
        this.app.get('/api/v1/users', async (req, res) => {
            const users = await this.userService.getUsers();
            res.send({list: users, totalCount: 0});
        });
    }
}
