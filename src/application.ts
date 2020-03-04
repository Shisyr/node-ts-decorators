import {Express} from 'express'
import {ConnectControllers} from "./decorators/connectControllers";
import * as express from 'express'
import {routes} from "./all-routes";
const app = express();

export let instance: Application | null = null;


@ConnectControllers(app)
export default class Application {
  private app: Express;
  constructor() {
    if (!instance) {
      instance = this
    }
    return instance;
  }
  start(port: string | number) {
    console.log(routes);
    routes.map(route => {
      this.app.use(route.path, route.method);
    });
    this.app.listen(port, () => {
        console.log(`The application listening on port ${port}`)
    })
  }
}
