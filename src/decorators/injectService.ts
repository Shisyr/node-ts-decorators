
interface Services {
    key: string;
    value: any;
}


export let services: Services[] = [];

export function injectService(object: any) {
    return function (target: any, propertyKey: string) {
        let foundedService = services.find(service => service.key === object.name);
        if (!foundedService) {
            foundedService = getNewServiceWithKey(object);
            services.push(foundedService)
        }
        target[propertyKey] = foundedService.value;
    }
}


const getNewServiceWithKey = (object: any) => {
    return {
        key: object.name,
        value: new object()
    };
};
