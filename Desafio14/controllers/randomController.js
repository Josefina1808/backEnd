const { fork } = require("child_process");

const getRandomController = (req, res) => {
  const num = req.query.cant || 100;
  const randoms = fork("./utils/random.js", [num]);

  randoms.send("start");

  randoms.on("error", (err) => {
    console.log(`Error en child process 'random' ${err}`);
  });

  randoms.on("message", (obj) => {
    return res.json(obj);
  });
};

module.exports = {
  getRandomController,
};
