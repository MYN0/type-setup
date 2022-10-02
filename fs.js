import { createRequire } from "module";
const require = createRequire(import.meta.url);
const jsonData = require("./json/lock.json");
const d = JSON.stringify(jsonData);
console.log(`${d}`);

String("HelloWo ");
