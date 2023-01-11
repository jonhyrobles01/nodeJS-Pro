import { DataSource } from "typeorm";
export abstract class Bootstrap {
  abstract initialize(): Promise<boolean | DataSource | Error>;
}

export abstract class DatabaseListen extends Bootstrap {
  abstract listen(): void;
}
