var THREE = require('three.js');
var Bar = require('./bar');

var Face = function(size, spacing) {
  THREE.Object3D.call(this);

  this.size = size;
  this.bars = [];

  var offset = (size - 1) / 2;
  for (var i = 0; i < size; i++) {
    var bar = new Bar(size, spacing);
    bar.position.set(spacing * (i - offset), 0, 0);
    this.add(bar);
    this.bars.push(bar);
  }
}

Face.prototype = Object.create(THREE.Object3D.prototype);

Face.prototype.update = function(data) {
  console.log('------------------');
  for (var i = 0; i < this.bars.length; i++) {
    this.bars[i].update(data[i]);
  }
};

module.exports = Face;
