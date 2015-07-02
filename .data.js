var pairs = [ "akbar", "beatriz", "elizabeth", "kevin", "lupe", "savance", "steph", "tom" ] ;
var lones = [ "brendan", "dezarae", "jen", "kathy", "latisha", "latoya", "maria", "marshea", "rafael", "sandra", "vic" ];

var pair_matrix = {
  akbar     : [ 0, 3, 3, 4, 4, 5, 3, 3 ],
  beatriz   : [ 4, 0, 2, 3, 4, 3, 2, 2 ],  // jiggered
  elizabeth : [ 5, 3, 0, 5, 3, 5, 3, 3 ],
  kevin     : [ 3, 1, 2, 0, 3, 3, 3, 3 ],
  lupe      : [ 5, 3, 4, 5, 0, 3, 2, 2 ],
  savance   : [ 3, 3, 3, 3, 3, 0, 3, 3 ],  // dummy
  steph     : [ 5, 5, 5, 5, 5, 5, 0, 3 ],  // jiggered
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

// Normalize matrix
var normalize = function ( list, matrix ) {
  var normal = (list.length - 1) * 3;
  for ( key in matrix ) {
    var amp = 0;
    for ( index in matrix[key] ) {
      amp += matrix[key][index];
    }
    amp /= normal;
    for ( index in matrix[key] ) {
      matrix[key][index] = matrix[key][index] / amp;
    }
  }
  return matrix;
}

module.exports = (function() {
  return { 
      pairs       : pairs
    , lones       : lones
    , pair_matrix : normalize( pairs, pair_matrix )
    , lone_matrix : normalize( lones, lone_matrix )
  };
})();