var FlowField = function(w, h, res) {

    this.resolution = res;
    this.rows = h / (res - 1);
    this.cols = w / (res - 1);

    this.field = new Array();

    var xoff = 0;
    for (var x = 0; x < this.cols; x++) {
        var yoff = 0;
        var f = new Array();
        for (var y = 0; y < this.rows; y++) {
            var theta = map(noise(xoff, yoff), 0, 1, 0, random(1.5, 4) * PI);
            f.push(p5.Vector.fromAngle(theta));
            yoff += 0.1;
        }
        console.log(f);
        this.field.push(f);
        xoff += 0.1
    }
    console.log(this.field);
}

FlowField.prototype.getVectorAt = function(position) {
    var column = int(constrain(position.x / this.resolution, 0, this.cols - 1));
    var row = int(constrain(position.y / this.resolution, 0, this.rows - 1));
    return this.field[column][row].copy();
}
