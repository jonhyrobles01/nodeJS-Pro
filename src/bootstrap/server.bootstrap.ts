import app from "@/app";
import { Bootstrap } from "@/bootstrap";

import http from "http";

export class ServerBootstrap extends Bootstrap {
  initialize(): Promise<boolean | Error> {
    return new Promise((resolve, reject) => {
      const port = 8000;
      const server = http.createServer(app);

      server
        .listen(port)
        .on("listening", () => {
          console.log(`Server listen on port: ${port}`);
          resolve(true);
        })
        .on("error", reject);
    });
  }
}
