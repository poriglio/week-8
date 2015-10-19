angular.module("heroesApp",["ngRoute"])
// angular.service("$routeProvider")

// ngRoute gives us acces to a few components.
// 1. ngView - directive that defines where our templates are rendered
// 2. $routeProvider - used in defining and configuring routes, but we will only be working with GET requests. What template and what controller  should we be using?
// 3. $routeParams - analagous to req.pararms - shows us the values of our url parameters
// 4. $route - decides and renders what template and what controller to use for each thing -- lots of work under the hood. Watches the URL and decides which route should be handled

// DEFINE OUR ROUTES
angular.module('heroesApp').config(["$routeProvider",function($routeProvider){

	$routeProvider.when("/",{
		templateUrl : "/html/template.html",
		controller  : "heroesController"
	})
	// .otherwise
	// .when("/profile/:heroName",{
	// 	templateUrl : "/html/hero.html",
	// 	controller  : "heroesController"
	// }) 
// If I had defined a separate page for an individual hero and a controller for such pages, the grayed out route would work for it.

}])



angular.module("heroesApp").controller("heroesController",["$scope","$http",function($scope,$http){

	$scope.greeting = "Welcome to AJAX Heroes!!!"

	// Below, we send a request to the server, and get a response from the server.

	$scope.createHero = function() {
		$http.post("/api/heroes",$scope.newHero).then(function(returnData){
			console.log("Made a hero!",returnData)
		})
	}

	$http.get("api/heroes").then(function(returnData){
		$scope.heroes = returnData.data
	})

}])