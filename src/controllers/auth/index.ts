import {Express} from "express";
import BaseController from "../base";
import BaseControllerInterface from "../base/interface.base";
import {injectService} from "../../decorators/injectService";
import UserService from "../../services/user/user.service";
import Paths from '../../consts/paths';

export default class AuthController extends BaseController implements BaseControllerInterface {

  @injectService(UserService)
  private userService: UserService;

  constructor(app: Express) {
    super(app);
  }

  useMiddleWare() {
    this.app.use('/api/v1/me', (req: any, res, next) => {
      console.log(req.session);
      console.log(req.cookies);
      console.log('middleware');
      next();
    })
  }

  register() {
    this.app.post('/api/v1/login', (req: any, res) => {
      if (req.body.email) {
        req.session.email = req.body.email;
      }
      res.cookie('name', 'express', {maxAge: 36000}).send('cookie set');
      // res.send('Hello')
    });
    this.app.get('/api/v1/me', (req, res) => {
      res.send({username: 'YOUR USERNAME', password: 'YOUR PASSWORD'})
    });

    this.app.post(Paths.Auth.register, (req, res) => {
      const {username, password, confirmPassword} = req.body;
    })
  }
}
