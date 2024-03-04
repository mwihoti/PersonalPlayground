const express = require("express");
const cors = require("cors");
const app = express();


const db = require("./src/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded( {extended: true}));

//Route
app.get("/", (req, res) => {
    res.json({message: "Welcome to health app"})
}
)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
