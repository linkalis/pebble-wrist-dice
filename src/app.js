var UI = require('ui');
var Vector2 = require('vector2');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');


var main = new UI.Card({
  title: 'Wrist Dice',
  subtitle: 'Shake it!',
  body: 'Images by Ryan Reid from The Noun Project.',
  action: {
    up: 'images/one_tiny.png',
    down: 'images/two_tiny.png'
  }
});

main.show();


// Prepare the accelerometer
Accel.init();

// Define oneWindow for one die
var oneWindow = new UI.Window({ fullscreen: true });

// Define two Window for two dice
var twoWindow = new UI.Window({ fullscreen: true });

// Define one die or two dice actions from main window
main.on('click', 'up', function(e) {  
  oneWindow.show();
});

main.on('click', 'down', function(e) {  
  twoWindow.show();
});

/*
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
*/

var diceArray = [1,2,3,4,5,6];

var pickDie = function() {
  var roll = diceArray[Math.floor(Math.random() * diceArray.length)];
  //roll = getRandomInt(1, 6);
  
  var imageString;
  
  if (roll == 1){
    imageString = 'images/one.png';
  } else if (roll == 2){
    imageString = 'images/two.png';
  } else if (roll == 3){
    imageString = 'images/three.png';
  } else if (roll == 4){
    imageString = 'images/four.png';
  } else if (roll == 5){
    imageString = 'images/five.png';
  } else if (roll == 6){
    imageString = 'images/six.png';
  } else {
    imageString = 'images/five.png';
  }
  
  var image = new UI.Image({
    position: new Vector2(0, 20),
    size: new Vector2(144, 144),
    image: imageString
  });
  
  oneWindow.remove(image);
  
  // Hide any existing window and add dice image
  oneWindow.hide();
  oneWindow.add(image);
  
  // Vibrate and display the window with dice image
  Vibe.vibrate('short');
  oneWindow.show();
};

/*
oneWindow.on('accelTap', function(e) {
  pickDie();
});
*/

oneWindow.on('click', 'select', function(e) {
  pickDie();
});
