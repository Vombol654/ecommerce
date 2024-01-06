const dotenv = require("dotenv");
const apps = require("./app");
// import { connect_database } from "./app";

// config
dotenv.config({ path: "backend/config/config.env" });

apps.connect_database();

apps.app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
