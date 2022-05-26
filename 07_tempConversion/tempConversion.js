const ftoc = function(f) {
  f = (f - 32) * .5556;
  return f;
};

const ctof = function(c) {
  c = (c * 1.8) + 32;
  return c;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
