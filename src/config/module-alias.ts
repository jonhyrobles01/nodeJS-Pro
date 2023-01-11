import config from "./index";

import { resolve } from "path";
import { addAlias } from "module-alias";

const path = config.app.env === "prod" ? "dist/src" : "src";

addAlias("@", resolve(path));
addAlias("@users", resolve(`${path}/users`));
addAlias("@shared", resolve(`${path}/shared`));
addAlias("@drivers", resolve(`${path}/drivers`));
