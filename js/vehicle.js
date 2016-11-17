var Vehicle = function(posVec, velVec, maxS, maxF) {
    this.position = posVec;
    this.velocity = velVec;
    this.acceleration = createVector(0, 0);

    this.maxSpeed = maxS;
    this.maxForce = this.maxSpeed / 10;

    this.SIZE = 20;
}

Vehicle.prototype.applyForce = function(force) {
    force.limit(this.maxForce);
    this.acceleration.add(force);
}

Vehicle.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
}

Vehicle.prototype.display = function() {
    var tempVector;
    if (this.velocity.x == 0 && this.velocity.y == 0) {
        tempVector = p5.Vector.random2D();
    } else {
        tempVector = this.velocity.copy();
    }

    tempVector.normalize();
    tempVector.mult(-this.SIZE);

    var rightWing = tempVector.copy();
    var leftWing = tempVector.copy();
    rightWing.rotate(PI/8);
    leftWing.rotate(-PI/8);
    rightWing.add(this.position);
    leftWing.add(this.position);

    triangle(this.position.x, this.position.y, rightWing.x, rightWing.y, leftWing.x, leftWing.y);

}
