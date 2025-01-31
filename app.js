const express = require('express');
const db = require('./db/connection');
const logger = require("morgan");
const PORT = process.env.PORT;
const indexRouter = require('./router/index.router');
const app = express();
const swaggerUi = require("swagger-ui-express");
const cors = require('cors');
swaggerFile = require("./swagger_output.json");

app.use(express.json());
app.use(logger("dev"));
app.use(cors());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

//_______MainRoute________//
app.use('/', indexRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})