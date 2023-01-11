import "./config/module-alias";
import { ServerBootstrap, DatabaseBootstrap } from "@/bootstrap";

const serverBootstrap = new ServerBootstrap();
const databaseBootstrap = new DatabaseBootstrap();

(async () => {
  try {
    await serverBootstrap.initialize();
    await databaseBootstrap.initialize();
  } catch (error) {
    console.log("Error", error);
  }
})();
