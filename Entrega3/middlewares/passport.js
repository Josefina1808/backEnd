const passport = require("passport");
const path = require("path");
//const bCrypt = require('bcrypt')
const LocalStrategy = require("passport-local").Strategy;
const { sendEmail, renderRegisterTable } = require("../email/nodemailer");

const Contenedor = require("../class/contenedor");
const users_contenedor = new Contenedor(
  path.join(__dirname, "../data/users.json")
);

/* function isValidPassword(user, password) {
  return bCrypt.compareSync(password, user.password);
} */
/* function createHash(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
} */

function validPassword(user, password) {
  let index = users_contenedor.getByUser(user.username);
 
  if(users_contenedor.getAll()[index].password === password) {
    return true
  } else {
    console.log('Invalid password');
    return done(null, false)
  }

}
/* LOGIN PASSPORT */

function getByUsername(username) {
  try {
    const users = users_contenedor.getAll();
    const match = users.find((user) => user.username === username);
    return match ? match : null;
  } catch (error) {
    throw new Error(
      `Error al obtener el usuario con username:'${username}': ${error}`
    );
  }
}

passport.use(
  "login",
  new LocalStrategy((username, password, done) => {
    try {
      const User = getByUsername(username);

      if (!User) {
        console.log("User Not Found with username " + username);
        return done(null, false);
      }

      /* if (!isValidPassword(User, password)) {
        console.log("Invalid Password");
        return done(null, false);
      } */

      validPassword(User, password)

      return done(null, User);
    } catch(error) {
      console.error(`Error al loguear usuario: ${error}`);
      done(error);
    }
  })
);

/* REGISTER PASSPORT */
passport.use(
  "signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      try {
        const User = getByUsername(username);
        if (User) {
          console.log("User already exists");
          return done(null, false);
        }
        const { name, address, age, phone, avatar } = req.body;
        const newUser = {
          username,
          password: password /* createHash(password) */,
          name,
          address,
          age,
          phone,
          avatar,
          role: "user",
        };
        const newUserAdded = users_contenedor.save(newUser);

        console.log(
          `${username} Registration succesful with ID ${newUserAdded.id}`
        );

        sendEmail(
          process.env.ADMINEMAIL,
          "Nuevo Registro",
          renderRegisterTable(newUser)
        );
      } catch (e) {
        console.log(`Error passport.js singup, ${e}`);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  users_contenedor.getById(id, done);
});


const passportAuthLogin = passport.authenticate("login", {
  failureRedirect: "/login-error",
  failureMessage: true,
  successRedirect: "/productos",
});

const passportAuthRegister = passport.authenticate("signup", {
  failureRedirect: "/register-error",
  failureMessage: true,
  successRedirect: "/productos",
});

module.exports = { passport, passportAuthLogin, passportAuthRegister };
