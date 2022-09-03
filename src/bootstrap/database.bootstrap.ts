import Bootstrap from "./bootstrap";
import { DataSource, DataSourceOptions } from "typeorm";

let source: DataSource;
export default class DatabaseBootstrap extends Bootstrap {
  static get dataSource() {
    return source;
  }

  initialize(): Promise<DataSource | Error> {
    const parametersConnections = {
      type: process.env.DATABASE_TYPE || "mysql",
      host: process.env.DATABASE_MYSQL_HOST || "localhost",
      port: process.env.DATABASE_MYSQL_PORT || 5000,
      username: process.env.DATABASE_MYSQL_USERNAME || "jrobles",
      password: process.env.DATABASE_MYSQL_PASSWORD || "Jrobles@0123",
      database: process.env.DATABASE_MYSQL_NAME || "dbnodejs",
      entities: [process.env.DATABASE_MYSQL_ENTITIES || "src/**/*.entity.ts"],
      synchronize: true,
      logging: ["error"],
    } as DataSourceOptions;

    const connection = new DataSource(parametersConnections);
    source = connection;

    return connection.initialize();
  }
}
