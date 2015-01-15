var THREE = require('three.js');
var Face = require('./face');

var Cube = function(size, spacing) {
  THREE.Object3D.call(this);

  this.size = size;
  this.faces = [];
  this.histogram = [];

  var offset = (size - 1) / 2;
  for (var i = 0; i < size; i++) {
    var face = new Face(size, spacing);
    face.position.set(0, 0, spacing * (i - offset));
    this.add(face);
    this.faces.push(face);
  }
}

Cube.prototype = Object.create(THREE.Object3D.prototype);

Cube.prototype.update = function(data) {
  this.histogram.push(data);
  if (this.histogram.length > this.size) {
    this.histogram.shift();
  }

  for (var i = 0; i < this.faces.length; i++) {
    var hidx = this.size - i - 1;
    if (!this.histogram[hidx]) {
      continue;
    }

    this.faces[i].update(this.histogram[hidx]);
  }
}

module.exports = Cube;
