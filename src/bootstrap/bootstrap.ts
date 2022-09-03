import { DataSource } from "typeorm";
export default abstract class Bootstrap {
  abstract initialize(): Promise<boolean | DataSource | Error>;
}

export abstract class DatabaseListen extends Bootstrap {
  abstract listen(): void;
}
