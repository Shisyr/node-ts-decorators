import {createConnection, getCustomRepository} from "typeorm";
import {Configuration} from "../ormconfig";

interface RepositoryInterface {
    key: string;
    value: any;
}


export let repositories: RepositoryInterface[] = [];

export function injectRepository(object: any) {
    return function (target: any, propertyKey: string) {
        createConnection(Configuration).then(_ => {
            let foundedRepository = repositories.find(repository => repository.key === object.name);
            if (!foundedRepository) {
                foundedRepository = getNewRepositoryWithKey(object);
                repositories.push(foundedRepository)
            }
            target[propertyKey] = getCustomRepository(object);
        }).catch(e => {
            console.log(e);
        });
    }
}


const getNewRepositoryWithKey = (object: any) => {
    return {
        key: object.name,
        value: new object()
    };
};
