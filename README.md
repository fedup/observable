
# observable

  Get and set attributes and emit events. Kind of like Backbone's model.

## Installation

    $ component install anthonyshort/observable

## API

    var Observable = require('observable');

    // Mixin
    function View() {

    }
    Observable(View.prototype);

    // Or as a constructor
    var obj = new Observable();

    // Set attributes
    obj.set('foo', 'bar');

    // Set with an object
    obj.set({ 'foo': 'bar' });

    // Get values
    obj.get('foo'); // === 'bar'

    // Get all values
    obj.get();

    // Watch for events
    obj.on('change:foo', function(val, previous){

    });

    // Watch for all events
    obj.on('change', function(attr, val, previous){

    });

    // Silence events
    obj.set('foo', 'bar', { silent: true });
    obj.set({'foo': 'bar'}, { silent: true });

## License

  MIT
