var Environment = function(w, h) {
    this.population;
    this.width = w;
    this.height = h;

    this.hasWind = false;
    this.edgeType = 0;
}

Environment.prototype.wrapEdges = function() {
    this.edgeType = 1;
}

Environment.prototype.applyEdges = function() {
    if (this.edgeType == 1) {
        this.population.applyWrapEdges();
    } else if (this.edgeType == 2) {
        // TODO: Make edges repel.
    }
}

Environment.prototype.createNewPopulation = function(size) {
    this.population = new Population();
    this.population.createNew(size);
}

Environment.prototype.randomize = function() {
    this.population.applyRandomForce();
}

Environment.prototype.applyForce = function(force) {
    this.population.applyForce(force);
}

Environment.prototype.applyFlowField = function(flowField) {
    this.population.applyFlowField(flowField);
}

Environment.prototype.display = function() {
    this.population.display();
}

Environment.prototype.update = function() {
    this.population.update();
}
