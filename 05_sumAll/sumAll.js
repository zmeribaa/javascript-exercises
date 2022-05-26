const sumAll = function(x,y) {
	var array = [x,y]
	var max = Math.max.apply(Math, array);
	var min = Math.min.apply(Math, array);

	var n = (max - min + 1);
	var sum = n * (min + max) / 2;
	return sum;
	
};
// Do not edit below this line
module.exports = sumAll;
