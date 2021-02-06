
var h
var m
var s
var hAngle
var mAngle
var sAngle


function setup()
{
	createCanvas(400, 400);
angleMode(DEGREES)
	

  
}


function draw() {

  background(0);
 translate(200,200)
  h = hour()
  m = minute()
  s = second()
 sAngle = map(s,0,60,0,360)
 mAngle = map(m,0,60,0,360)
 hAngle = map(h%12,0,12,0,360)
push();
rotate(sAngle)
stroke("lightPink")
strokeWeight(5)
 line(0,0,100,0)
pop();

push();
rotate(mAngle)
stroke("lightGreen")
strokeWeight(5)
 line(0,0,75,0)
pop();

push();
rotate(hAngle)
stroke("lightBlue")
strokeWeight(5)
 line(0,0,50,0)
pop();

noFill()
stroke("lightPink")
strokeWeight(5)
arc(0,0,300,300,0,sAngle)

noFill()
stroke("lightGreen")
strokeWeight(5)
arc(0,0,280,280,0,mAngle)

noFill()
stroke("lightblue")
strokeWeight(5)
arc(0,0,260,260,0,hAngle)
  }
  
 
  