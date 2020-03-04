import {routes} from '../all-routes';


export function GET(path: string) {
  console.log('get decorator');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('*******************************');
    target[propertyKey] = descriptor.value;
    descriptor.value.prototype = target;
    console.log('*******************************');
    // target[propertyKey] = descriptor.value;
    routes.push({path, method: descriptor.value});
    // descriptor.value = target;
    return descriptor;
  }
}
