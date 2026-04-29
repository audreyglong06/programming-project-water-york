// 1. CUSTOM VARIABLES (Required for the assignment)
let isHuman = true;        // State variable to track Fiorela's form
let bubbleCount = 30;      // Background city bubbles
let bX = [];               // Arrays for bubble positions
let bY = [];
let glow = 0;              // Variable to create a pulsing "playful" aura
let trail = [];            // Array to store the bubble trail positions

function setup() {
  createCanvas(windowWidth, windowHeight); // Makes the sketch the full screen
  
  // Initialize background bubbles for the city atmosphere
  for (let i = 0; i < bubbleCount; i++) {
    bX.push(random(width));
    bY.push(random(height));
  }
}

function draw() {
  background(10, 25, 60); // Deep, cold underwater blue

  // 2. VISUAL ELEMENTS: Underwater Skyline (Representing "Water York")
  fill(5, 15, 40);
  noStroke();
  // Drawing abstract Chrysler and Empire building shapes
  rect(width * 0.1, height - 300, 80, 300); // Building 1
  rect(width * 0.13, height - 350, 20, 50);
  
  rect(width * 0.4, height - 450, 90, 450); // Building 2 (Empire Water)
  rect(width * 0.44, height - 520, 10, 70); 

  rect(width * 0.8, height - 350, 70, 350); // Building 3 (Chrysler Water)
  triangle(width * 0.8, height - 350, width * 0.835, height - 420, width * 0.87, height - 350);

  // 3. TEXT ELEMENT: Large Water York Banner
  fill(255, 255, 255, 150);
  textSize(width / 15); // Dynamic size based on screen width
  textAlign(CENTER);
  text("WATER YORK", width / 2, height / 4);

  // 4. BACKGROUND NEWS: Slow floating bubbles
  fill(255, 70);
  for (let i = 0; i < bubbleCount; i++) {
    ellipse(bX[i], bY[i], 8, 8);
    bY[i] -= 0.5;
    if (bY[i] < 0) bY[i] = height;
  }

  // 5. INTERACTIVITY: Bubble Trail (Movement Power)
  let v = createVector(mouseX, mouseY);
  trail.push(v);
  if (trail.length > 20) trail.shift(); // Keep trail length at 20

  for (let i = 0; i < trail.length; i++) {
    fill(255, 100 - (i * 5));
    ellipse(trail[i].x, trail[i].y + 15, i, i);
  }

  // 6. CHARACTER LOGIC: Glow effect for playfulness
  glow = sin(frameCount * 0.1) * 30;

  // Drawing Fiorela at mouse position
  if (isHuman) {
    drawHuman(mouseX, mouseY);
  } else {
    drawCat(mouseX, mouseY);
  }
}

// 7. CUSTOM FUNCTIONS (Organizing code for better grades)
function drawHuman(x, y) {
  fill(180 + glow, 0, 0); // Glowing red hair
  rect(x - 20, y - 45, 40, 65, 10);
  fill(255, 220, 200); 
  ellipse(x, y - 15, 38, 45); // Head
  fill(200, 0, 0); 
  ellipse(x, y - 5, 5, 5); // Red nose
}

function drawCat(x, y) {
  fill(180 + glow, 0, 0); // Fluffy red fur
  ellipse(x, y, 65, 50); // Body
  triangle(x - 20, y - 15, x - 15, y - 40, x - 5, y - 15); // Ears
  triangle(x + 20, y - 15, x + 15, y - 40, x + 5, y - 15);
  stroke(255); // Whiskers
  line(x + 10, y, x + 35, y - 5);
  line(x + 10, y + 5, x + 35, y + 10);
  line(x - 10, y, x - 35, y - 5);
  line(x - 10, y + 5, x - 35, y + 10);
  noStroke();
}

// 8. INTERACTIVITY: Shapeshift on Mouse Click
function mousePressed() {
  isHuman = !isHuman;
}

// Ensure the canvas stays full screen if the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}