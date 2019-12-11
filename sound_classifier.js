


// Storing the label
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/9IwaYmII/';

//  Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);
  cnv = createCanvas(640, 520);
  cnv.position(300, 150)

  // Start classifying (will listen to mic)
  classifyAudio();
}

// classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(0);

  // Draw the label
  // textSize(32);
  textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);

  // Background noise is headphones
  let emoji = "🎙️";
  // Pick an emoji based on label
  if (label == "snap") {
    emoji = "👌";
  } else if (label == "Cough") {
    emoji = "🗣";
  } else if (label == "typing") {
    emoji = "💻";
  }
  else if (label == "knock") {
    emoji = "✊🏼";
  }

  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}
