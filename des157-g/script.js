console.log ('reading js')

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent ('mySketch');

}

function draw () {

  background(255);
  for (var y=20; y<=250; y+=45) {
  for (var z=20; z<=800; z+=45) {
    line (z, y, z-10, y-15);
    stroke('#d9cdca');
    strokeWeight(2);

    if(mouseIsPressed) {
      stroke(255, random(255), random(255));
      }
    }
  }
}
