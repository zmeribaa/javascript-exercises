const removeFromArray = function(array, value) {
	for (var i = 0; i < array.length; i++)
	{
		if (array[i] === value)
		{
			var value1 = array.splice(i, 1);
		}
	} 
	return value1;
};

// Do not edit below this line
module.exports = removeFromArray;
