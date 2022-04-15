const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + ".env"),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 8080,
  //MEN - FILE - MONGO
  PERS: process.env.PERS || "MEM",
  db: {
    name: "ecommerce",
    collection: "products",
    connectString: "mongodb://127.0.0.1/",
    projection: { __v: 0 },
  },
};
