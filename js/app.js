'use strict';

var loginApp = angular.module("loginApp",["ui.router"]);
 loginApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider)
 {
  $urlRouterProvider.otherwise("/login")
  $stateProvider
  .state("login", { 
    url : "/login", 
    templateUrl : "views/login/login.html",
    controller : "loginCtrl",
 })

  .state("register",{
  url : "/register",
  templateUrl : "views/login/register.html",
  controller : "registerCtrl",
 })

 .state("list",{
  url : "/list",
  templateUrl : "views/login/list",
  controller : "listCtrl",
 })

.state("new",{
  url : "/new",
  templateUrl : "views/login/new",
  controller : "newCtrl",
 })




$urlRouterProvider.otherwise("/login")  
}]);