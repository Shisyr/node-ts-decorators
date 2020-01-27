import {createConnection} from "typeorm";
import {Configuration} from "./ormconfig";

export default class Database {
    public async connect() {
        return createConnection(Configuration);
    }

}
