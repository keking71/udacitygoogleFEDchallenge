/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

var seconds = 60;
var phrase;

while(seconds >= 0){
  seconds === 50 ? (phrase = "Orbiter transfers from ground to internal power") : seconds === 31 ? (phrase = "Ground launch sequencer is go for auto sequence start") : seconds === 16 ? (phrase = "Activate launch pad sound suppression system") : seconds === 10 ? (phrase = "Activate main engine hydrogen burnoff system") : seconds === 6 ? (phrase = "Main engine start") : seconds === 0 ? (phrase = "Solid rocket booster ignition and liftoff!") : (phrase = "T-" + seconds + " seconds");
  console.log(phrase);
  seconds--;
}
