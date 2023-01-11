import config from "@/config";
import { Bootstrap } from "@/bootstrap";

import { DataSource, DataSourceOptions } from "typeorm";

let source: DataSource;
export class DatabaseBootstrap extends Bootstrap {
  static get dataSource() {
    return source;
  }

  initialize(): Promise<DataSource | Error> {
    const parametersConnections = {
      type: "mysql",
      host: config.database.host,
      port: config.database.port,
      database: config.database.name,
      username: config.database.username,
      password: config.database.password,
      entities: ["src/**/*.entity.ts"],
      synchronize: true,
      logging: ["error"],
    } as DataSourceOptions;

    const connection = new DataSource(parametersConnections);
    source = connection;

    return connection.initialize();
  }
}
