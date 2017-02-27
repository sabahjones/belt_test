/*
    /server/config/routes.js
    Configure the routes (Listen for routes, connect to controllers)
*/
console.log("Loaded /server/config/routes.js");

var PollController = require("../controllers/polls");

module.exports = function (app) {

    app.get("/polls", PollController.get)  // Controller get polls
    app.post("/addpoll", PollController.add)  // Controller create a poll
    app.put("/delete/:id", PollController.delete)
    app.post("/polls", PollController.update)
};
