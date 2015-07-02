var data = require('./data.js');

var pairs       = data.pairs;
var lones       = data.lones;
var pair_matrix = data.pair_matrix;
var lone_matrix = data.lone_matrix;

// Current running environment
var LIST   = lones;
var MATRIX = lone_matrix;  // used as global

// Accepts two names
var computeUtility = function ( n1, n2 ) {
  if ( n1 === null || n2 === null ) return 0;
  var i1, i2;
  i1 = LIST.indexOf(n1);
  i2 = LIST.indexOf(n2);
  return MATRIX[n1][i2] * MATRIX[n2][i1];
};

var pluck = function ( array, index ) {
  var first = array.slice( 0, index );
  var second = array.slice( index + 1, array.length );
  return first.concat( second );
};

function Pair ( parent, driver, navi, next ) {
  this.parent = parent;
  this.driver = driver;
  this.navi = navi;
  this.next = new Array();
  this.utility = null;
  if ( next.length === 0 ) {
    this.next = null;
    if ( navi ) this.utility = computeUtility( driver, navi );
    else this.utility = 0;
    if ( parent ) parent.pushUtility( this.utility );
  }
  else if ( next.length === 1 ) {
    this.next.push( new Pair( this, next[0], null, [] ) );
  } else if ( next.length === 2 ) {
    this.next.push( new Pair( this, next[0], next[1], [] ) );
  } else {
    var nextDriver = next[0];
    next = next.slice(1);
    for ( var i = 0; i < next.length; i++ )
      this.next.push( new Pair( this, nextDriver, next[i], pluck( next, i ) ) );
  }
}

Pair.prototype.pushUtility = function ( utility ) {
  this.utility = Math.max( this.utility, utility + computeUtility( this.driver, this.navi ) );
  if ( this.parent ) this.parent.pushUtility( this.utility );
};

Pair.prototype.prune = function () {
  var util = 0;
  for ( index in this.next ) {
    util = Math.max( util, this.next[index].utility );
  }
  var filt = new Array();
  for ( index in this.next ) {
    if ( this.next[index].utility === util )
      filt.push( this.next[index] );
  }
  this.next = filt;
  for ( index in this.next ) {
    this.next[index].prune();
  }
};

Pair.prototype.print = function ( depth ) {
  console.log( depth, this.driver, '\t', this.navi, '\t', this.utility );
  for ( index in this.next ) {
    this.next[index].print( depth + ' | ' );
  }
};

var tree = new Pair( null, null, null, LIST );
tree.prune();
tree.print( '' );
