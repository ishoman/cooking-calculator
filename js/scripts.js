var gallonInput = parseInt(prompt("Input gallons to be converted to liters:"));

var convertToLiters = function(gallon) {
  return gallon*3.7854;
};

alert (convertToLiters(gallonInput) +" liters.");
