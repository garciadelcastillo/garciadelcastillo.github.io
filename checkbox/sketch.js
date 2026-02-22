// Global variables to define UI element
let boxX = 80;
let boxY = 175;
let boxSize = 50;

// A variable to keep track of "checked" state
let isChecked = false;

function setup() {
  createCanvas(400, 400);
  // textFont("Georgia");
}

function draw() {
  background(220);

  // Draw the checkbox box
  strokeWeight(3);
  stroke(0);
  fill(255);
  rect(boxX, boxY, boxSize, boxSize, 8); // 8 = rounded corners

  // Draw the checkmark emoji
  if (isChecked == true) {
    noStroke();
    textSize(32);
    textAlign(CENTER, CENTER);
    text("✅", boxX + 0.5 * boxSize, boxY + 0.52 * boxSize);
  }

  // Draw the label
  noStroke();
  fill(0);
  textSize(22);
  textAlign(LEFT, CENTER);
  if (isChecked == true) {
    text("Accepted!", boxX + boxSize + 16, boxY + boxSize / 2);
  } else {
    text("Accept the terms", boxX + boxSize + 16, boxY + boxSize / 2);
  }
}

// If mouse was clicked (pressed + released) inside box,
// flip the value of the checked variable.
function mouseClicked() {
  // Check if the click is inside the checkbox
  if (mouseX > boxX && mouseX < boxX + boxSize &&
      mouseY > boxY && mouseY < boxY + boxSize) {
    isChecked = !isChecked; // toggle
  }
}
