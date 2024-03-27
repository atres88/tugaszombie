class Walker { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-100,5), random(-5,100)) 
    this.acceleration = createVector(0,0); 
  }
  display(){ 
    strokeWeight(3); 
    fill(255,0,0); 
    rect(this.location.x, this.location.y, 45, 55); 
    point(this.location.x+10, this.location.y+13);
    point(this.location.x+25, this.location.y+13);
    line(this.location.x+13, this.location.y+10, this.location.x+5, this.location.y+5)
    line(this.location.x+22, this.location.y+10, this.location.x+30, this.location.y+5)

    arc(this.location.x+17, this.location.y+25,15, 8, 10,-110)
  } 
  
  update(){ 
    var mouse = createVector(mouseX, mouseY); 
    var dir = mouse.sub(this.location); 
    var topSpeed = 8
    dir.normalize(); 
    dir.mult(0.1); 
    this.velocity.add(this.acceleration); 
    this.velocity.add(dir); 
    this.velocity.limit(topSpeed) 
    this.location.add(this.velocity);
  } 
  
   cekUjung(){ 
    if ( this.location.x > windowWidth ) { 
      this.location.x = 0; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = windowWidth; 
    } 
   
    if ( this.location.y > windowHeight ) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = windowHeight; 
    } 
  } 
}

let walker = [];
let mouse;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i<20;i++){
    walker[i] = new Walker(random(windowWidth), random(windowHeight));   
  }
}
function draw() {
  background(0,0,0);    
  fill('yellow')
      ellipse(mouseX, mouseY, 60,120)
      
      ellipse(mouseX, mouseY-25, 20,20)
    for (let i=0; i<20;i++){
      walker[i].cekUjung(); 
      walker[i].display(); 
      walker[i].update();   
  }  
  
}