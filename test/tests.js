var Observable = require('observable');
var chai = require('chai');

describe('Observable', function(){

  chai.should();
  var expect = chai.expect;

  beforeEach(function(){
    this.obj = new Observable();
  });

  it('should be mixed into an object', function(){
    var test = {};
    Observable(test);
    test.set.should.equal(Observable.prototype.set);
    test.get.should.equal(Observable.prototype.get);
  });

  it('should not share attributes', function(){
    var one = new Observable();
    var two = Observable({});
    one.attributes.should.not.equal(two.attributes);
  });

  it('should set key and value', function(){
    this.obj.set('foo', 'bar');
    this.obj.attributes.foo.should.equal('bar');
  });

  it('should set key and value with options', function(){
    this.obj.set('foo', 'bar', { silent: true });
    expect(this.obj.attributes.foo).to.equal('bar');
  });

  it('should set key and value with an object', function(){
    this.obj.set({ 'foo' : 'bar' });
    this.obj.get('foo').should.equal('bar');
  });

  it('should set key and value with an object and options', function(){
    this.obj.set({ 'foo' : 'bar' }, { silent: true });
    this.obj.get('foo').should.equal('bar');
  });

  it('should be silent with an object', function(){
    var match = false;
    this.obj.on('change:foo', function(){
      match = true;
    });
    this.obj.set({ 'foo' : 'bar' }, { silent: true });
    expect(match).to.equal(false);
  });

  it('should be silent with a key value', function(){
    var match = false;
    this.obj.on('change:foo', function(){
      match = true;
    });
    this.obj.set('foo', 'bar', { silent: true });
    expect(match).to.equal(false);
  });

});