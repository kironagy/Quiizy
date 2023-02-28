require("dotenv").config();
const mongoose = require("mongoose");

///<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

// CONNECT TO DATABASE
mongoose
  .connect(process.env.DB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
  })
  .then(() => {
    // CONSOLE LOG WHEN CONNECTION
    console.log("DBconnected");
  })

  .catch((err) => {
    // CONSOLE LOG WHEN FAILED
    console.log(err);
  });

module.exports = mongoose;
