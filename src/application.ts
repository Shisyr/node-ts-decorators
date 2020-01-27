import {Express} from 'express'
import {ConnectControllers} from "./decorators/connectControllers";

export let instance: Application | null = null;

@ConnectControllers
export default class Application {
  private app: Express;
  constructor() {
    if (!instance) {
      instance = this
    }
    return instance;
  }
  start(port: string | number) {
    this.app.listen(port, () => {
        console.log(`The application listening on port ${port}`)
    })
  }
}
