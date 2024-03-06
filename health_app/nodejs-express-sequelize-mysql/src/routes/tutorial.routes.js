module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    // create new tutorial
    router.post("/", tutorials.create);

    // Retrieve all tutorials
    router.get("/", tutorials.findAll)

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    //Retrieve single Tutorial with id
    router.get("/:id", tutorials.findOne)

    // update a tutorial withid
    router.put("/:id", tutorials.update);

    //Delete a tutorial with id
    router.delete("/:id", tutorials.delete);

    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll)

    app.use('/api/tutorials', router)
}