/*
    /client/config.js
    Configure client routes, and really anything
*/
var app = angular.module("app", ["ngRoute"]);
console.log("Creating App");

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "partials/login.html",
        controller: "logincontroller"
    })
    .when("/all", {
        templateUrl: "partials/pollIndex.html",
        controller: "pollIndex"
    })
    .when("/result/:id", {
        templateUrl: "partials/pollresults.html",
        controller: "pollresults"
    })
    .when("/create", {
        templateUrl: "partials/pollconfigure.html",
        controller: "pollconfigure"
    });
    console.log("Configuring Routes")
});
