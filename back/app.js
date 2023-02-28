require("express-async-errors");
const express = require("express");
const app = express();
const errorHandler = require("./errorHandler/errorHandler");
const custom = require("./customResponse/customResponse");
const cors = require("cors");
const router = require("./router/quiz");
require("./connection/mongo");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/", router);

app.use(errorHandler);
app.use(custom);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server is listening on port ${port}`));
