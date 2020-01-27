import {ConnectionOptions} from "typeorm";

export const Configuration: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [
    __dirname + "/entity/**/*.entity.ts"
  ],
  migrations: [
    "migration/**/*.ts"
  ],
  subscribers: [
    "subscriber/**/*.ts"
  ]
};
