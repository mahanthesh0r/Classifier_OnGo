// Teachable Machine
// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;

let modelURL = 'https://teachablemachine.withgoogle.com/models/eLTeU294/';

// Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
 cnv = createCanvas(640, 520);
 cnv.position(300, 150)
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // Start classifying
  classifyVideo();
}

//  classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  let emoji = "";
  if (label == "book") {
    emoji = "📒";
  } else if (label == "Keys") {
    emoji = "🔑";
  } else if (label == "Phone") {
    emoji = "☎️";
  } else if (label == "money"){
    emoji = "💵";
  } else if (label == "glasses"){
    emoji = "👓";
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
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}