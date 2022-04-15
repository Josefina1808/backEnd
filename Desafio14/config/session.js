require("dotenv").config({ path: "./config/.env" });

/*      PERSISTENCIA POR MONGO ATLAS     */
const MongoStore = require("connect-mongo");
const adavancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };
/* ------------------------------------- */

//Session config
const options = {
  store: MongoStore.create({
    mongoUrl: process.env.MONGOATLAS,
    mongoOptions: adavancedOptions,
  }),
  secret: "secreto",
  resave: false,
  saveUninitialized: false,
};

module.exports = {options}