const add = function(x,y) {
	var result = x + y;
  return result;
};

const subtract = function(x,y) {
  var result = x - y;
  return result;
};

const sum = function(x,y) {
  var array = [x,y]
	var max = Math.max.apply(Math, array);
	var min = Math.min.apply(Math, array);

	var n = (max - min + 1);
	var sum = n * (min + max) / 2;
	return sum;
};

const multiply = function(x,y) {
  var result = x - y;
  return result;
};

const power = function(x,y) {
for (var i = 0; i < y; i++)
{
  x = x + x;
}
return x;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
