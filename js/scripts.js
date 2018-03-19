var gallonInput = parseInt(prompt("Input gallons to be converted to liters:"));

var cupInput = parseInt(prompt("Input cups to be converted to quarts"));

var tablespoonInput = parseInt(prompt("Input tablespoons to be converted to teaspoons:"))

var convertToLiters = function(gallon) {
  return gallon*3.7854;
};

var convertToQuarts = function(cup) {
  return cup * 4;
};

var convertToTeaspoons = function(tablespoon) {
  return tablespoon*3;
}

alert (convertToLiters(gallonInput) + " liters.");
alert (convertToQuarts(cupInput) + " quarts.");
alert (convertToTeaspoons(tablespoonInput) + " teaspoons.")
