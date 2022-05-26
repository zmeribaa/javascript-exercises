const leapYears = function(year) {
	var n = year % 4;
	if (n === 0 )
		return true;
	else
		return false;
};

// Do not edit below this line
module.exports = leapYears;
