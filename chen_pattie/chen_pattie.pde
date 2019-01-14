/* Chen, Pattie
 January 14, 2019
 Studio 0 Part 2: banner */

void setup() {
  size (800, 250);
}

void draw () { 

  background(#d9cdca);
  for (int y=20; y<=250; y+=45) {
    for (int z=20; z<=800; z+=45) {
      line (z, y, z-10, y-15);
      stroke(255);
      strokeWeight(2);

      if (mousePressed==true) {
        stroke(255, random(255), random(255));
      }
    }
  }
}



void keyPressed() {
  if (keyCode == ENTER) {
    saveFrame("####.tif");
  }
}
