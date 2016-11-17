var Population = function() {
    this.vehicles = [];
    this.size = 0;
}

Population.prototype.add = function(vehicle) {
    this.vehicles.append(vehicle);
    this.size++;
}

Population.prototype.createNew = function(size) {
    for (var i = 0; i < size; i++) {
        var pos = createVector(random(0, width), random(0, height));
        var vel = createVector(0, 0);
        var maxspeed = random(1, 4);
        var maxforce = random(0.1, 0.4);
        var vehicle = new Vehicle(pos, vel, maxspeed, maxforce)
        this.vehicles.push(vehicle);
    }
}

Population.prototype.applyForce = function(force) {
    this.vehicles.forEach(function(vehicle) {
        vehicle.applyForce(force);
    });
}

Population.prototype.applyRandomForce = function() {
    this.vehicles.forEach(function(vehicle) {
        var randomForce = p5.Vector.random2D();
        randomForce.mult(0.4);
        vehicle.applyForce(randomForce);
    });
}

Population.prototype.applyFlowField = function(flowField) {
    this.vehicles.forEach(function(vehicle) {
        vehicle.applyForce(flowField.getVectorAt(vehicle.position));
    });
}

Population.prototype.applyWrapEdges = function(){
    this.vehicles.forEach(function(vehicle) {
        var vp = vehicle.position;
        if (vp.x <= 0) {
            vp.x = width;
        } else if (vp.x >= width) {
            vp.x = 0;
        }
        if (vp.y <= 0) {
            vp.y = height;
        } else if (vp.y >= height) {
            vp.y = 0;
        }
    });
}

Population.prototype.update = function() {
    this.vehicles.forEach(function(vehicle) {
        vehicle.update();
    });
}

Population.prototype.display = function() {
    this.vehicles.forEach(function(vehicle) {
        vehicle.display();
    });
}
