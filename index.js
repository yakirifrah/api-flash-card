const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./services/db");
const app = express();
const dataRouters = require("./routes/dataRoutes");
// Send CORS Headers, useful if API is requested from a browser
app.use(cors());
connectDB().then(() => console.log("DB connected"));
// Parse request body to json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "healthy" });
});
app.use("/api/data", dataRouters);

app.listen(4000, () => console.log("Gator app listening on port 3000!"));
