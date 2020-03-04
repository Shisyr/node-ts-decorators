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

  async login(req, res) {
    console.log(req);
  };

  useMiddleWare() {
    this.app.use('/api/v1/me', (req: any, res, next) => {
      next();
    })
  }

  register() {

    this.app.post(Paths.Auth.login, (req: any, res) => {
      const {email, password} = req.body;
      if (email) {
        req.session.email = email;
      }
      res.status(200).send({message: 'Success!'});
    });

    this.app.get(Paths.Auth.me, (req: any, res) => {
      if (!req.session.email) {
        return res.status(401).send({message: 'Unauthorized!'});
      }
      const currentDate = new Date(Date.now());
      console.log(currentDate);
      console.log(req.session.cookie.expires);
      // req.session.regenerate((err) => {
      //   if (err) {
      //    return res.status(401).send({message: 'Unauthorized!'});
      //   }
      // });
      res.send({username: 'YOUR USERNAME', password: 'YOUR PASSWORD'});
    });

    this.app.post(Paths.Auth.register, (req, res) => {
      const {username, password, confirmPassword} = req.body;
    })
  }
}
