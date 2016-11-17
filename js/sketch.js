var environment;
var CANVAS_WIDTH = 600;
var CANVAS_HEIGHT = 600;
var selection;
var wind;
var flowField;

var FLOW_FIELD_RESOLUTION = 100;

var centerVector;

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    environment = new Environment(CANVAS_WIDTH, CANVAS_HEIGHT);
    environment.createNewPopulation(50);
    environment.wrapEdges();

    selection = 0;
    centerVector = createVector(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
}

function draw() {
    background(255);

    switch (selection) {
        case 0:
            environment.randomize();
            break;
        case 1:
            environment.applyForce(wind);
            break;
        case 2:
            var currPos = createVector(mouseX, mouseY);
            var v = currPos.sub(centerVector);
            v.setMag(2);
            environment.applyForce(v);
            break;
        case 3:
            environment.applyFlowField(flowField);
            break;
    }

    environment.applyEdges();
    environment.update();
    environment.display();
}

// WORKING ON EDGES
// Trying to get all possibilities for quick switching with buttons.

function randomizeMovement() {
    selection = 0;
}

function randomWind() {
    wind = p5.Vector.random2D();
    selection = 1;
}

function directedWind() {
    selection = 2;
}

function flowField() {
    selection = 3;
    flowField = new FlowField(CANVAS_WIDTH, CANVAS_HEIGHT, 100);
}
