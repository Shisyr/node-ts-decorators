import {routes} from '../all-routes';

export function POST(path: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    routes.push({path, method: descriptor.value});
  }
}
