var emitter = require('emitter');
var type = require('type');
var each = require('each');
var extend = require('merge');

function Observable(obj){
  if(obj) return extend(obj, new Observable);
  this.attributes = {};
};

emitter(Observable.prototype);

Observable.prototype.set = function(key, value, options) {
  options = options || {};
  var self = this;

  if( type(key) === 'object' ) {
    options = value;
    each(key, function(attr, value) {
      self._set(attr, value, options);
    });
  }
  else {
    this._set(key, value, options);
  }

  return this;
};

Observable.prototype._set = function(key, val, options) {
  options = options || {};
  var silent = options.silent || false;
  var previous = this.attributes[key];
  if( previous === val ) return; // No change
  this.attributes[key] = val;

  if(!silent) {
    this.emit('change', key, val, previous);
    this.emit('change:'+key, val, previous);
  }
};

Observable.prototype.get = function(key) {
  return key ? this.attributes[key] : this.attributes;
};

module.exports = Observable;