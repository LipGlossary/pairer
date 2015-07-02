var pairs = [ "akbar", "beatriz", "elizabeth", "kevin", "lupe", "savance", "steph", "tom" ] ;
var lones = [ "brendan", "dezarae", "jen", "kathy", "latisha", "latoya", "maria", "marshea", "rafael", "sandra", "vic" ];

var pair_matrix = {
  akbar     : [ 0, 3, 3, 4, 4, 5, 3, 3 ],
  beatriz   : [ 3, 0, 3, 3, 3, 3, 3, 3 ],  // dummy
  elizabeth : [ 5, 3, 0, 5, 3, 5, 3, 3 ],
  kevin     : [ 3, 1, 2, 0, 3, 3, 3, 3 ],
  lupe      : [ 5, 3, 4, 5, 0, 3, 2, 2 ],
  savance   : [ 3, 3, 3, 3, 3, 0, 3, 3 ],  // dummy
  steph     : [ 5, 5, 5, 5, 5, 5, 0, 5 ],
  tom       : [ 5, 2, 3, 5, 3, 2, 4, 0 ]
};

var lone_matrix = {
  brendan : [ 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
  dezarae : [ 1, 0, 1, 1, 1, 3, 1, 1, 1, 1, 1 ],
  jen     : [ 4, 3, 0, 2, 4, 4, 3, 3, 4, 3, 4 ],
  kathy   : [ 3, 0, 3, 0, 3, 4, 4, 4, 4, 5, 3 ],
  latisha : [ 2, 0, 2, 1, 0, 3, 3, 3, 5, 1, 1 ],
  latoya  : [ 3, 3, 3, 4, 3, 0, 3, 3, 3, 3, 3 ],
  maria   : [ 3, 4, 3, 3, 5, 5, 0, 3, 3, 5, 3 ],
  marshea : [ 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3 ],  // dummy
  rafael  : [ 3, 3, 3, 3, 3, 3, 4, 4, 0, 3, 3 ],
  sandra  : [ 3, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5 ],
  vic     : [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0 ]   // dummy
};

module.exports = (function() {
  return { 
      pairs       : pairs
    , lones       : lones
    , pair_matrix : pair_matrix
    , lone_matrix : lone_matrix
  };
})();