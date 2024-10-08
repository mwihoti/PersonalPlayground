const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./src/models");
const tutorialRoutes = require("./src/routes/tutorial.routes");

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
app.use(express.urlencoded({ extended: true }));

// Tutorial routes
tutorialRoutes(app);

// Default route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to health app" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


