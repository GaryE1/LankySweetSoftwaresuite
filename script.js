var canvasWidth = 500, canvasHeight = 400;
var myBall;
var ballSize = 20;
var myBall_xPos = canvasWidth/2, myBall_yPos = canvasHeight/2;
var myBall_xVel = 0, myBall_yVel = 0;
var myBall_top    = myBall_yPos - ballSize/2,
	myBall_bottom = myBall_yPos + ballSize/2,
	myBall_left   = myBall_xPos - ballSize/2,
	myBall_right  = myBall_xPos + ballSize/2; 
var paddleWidth= 15, paddleHeight=70, paddleVel=5, 
leftPaddle_xPos = ballSize, rightPaddle_xPos = canvasWidth - ballSize,
	leftPaddle_right  = leftPaddle_xPos - paddleWidth/2,
  leftPaddle_left   = leftPaddle_xPos + paddleWidth/2,
  rightPaddle_left   = rightPaddle_xPos + paddleWidth/2,
	rightPaddle_right  = rightPaddle_xPos - paddleWidth/2,
  rightPaddle_top    = rightPaddle_yPos - paddleHeight/2,
	leftPaddle_yPos = canvasHeight / 2, rightPaddle_yPos = canvasHeight / 2;
var r = 0, g = 0, b = 0;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	rectMode(CENTER);
	myBall = rect(myBall_xPos,myBall_yPos,ballSize,ballSize);
	// console.log(myBall);
	myBall_xVel = random(-3,3);
	myBall_yVel = random(-3,3);

rect(canvasWidth-20, canvasHeight/2, paddleHeight, paddleWidth);
}

function draw() {
	background(color(r,g,b));
	rect(leftPaddle_xPos,leftPaddle_yPos,paddleWidth,paddleHeight);
	rect(rightPaddle_xPos,rightPaddle_yPos,paddleWidth,paddleHeight) 
  movePaddles();
  bouncePaddles();
  displayScore();
	moveAndBounceWall();
	rect(myBall_xPos,myBall_yPos,ballSize,ballSize);
}

	

function moveAndBounceWall() {
	myBall_xPos  = myBall_xPos + myBall_xVel;
	myBall_left  = myBall_xPos - ballSize/2;
	myBall_right = myBall_xPos + ballSize/2;
	if ( (myBall_right > canvasWidth) || (myBall_left < 0) ) {
    updateScore();
		myBall_xPos = canvasWidth/2;
    myBall_yPos = canvasHeight/2
		colorChange();
	}
  

	myBall_yPos   = myBall_yPos + myBall_yVel;
	myBall_top    = myBall_yPos - ballSize/2;
	myBall_bottom = myBall_yPos + ballSize/2;
	if ( (myBall_bottom > canvasHeight) || (myBall_top < 0) ) {
		myBall_yVel = -myBall_yVel;
		colorChange();
	}
}
function colorChange() {
	r = random(255);
	g = random(255);
	b = random(255);
}

function movePaddles() {
	leftPaddle_top    = leftPaddle_yPos - paddleHeight/2;
	leftPaddle_bottom = leftPaddle_yPos + paddleHeight/2;
	rightPaddle_top    = rightPaddle_yPos - paddleHeight/2;
	rightPaddle_bottom = rightPaddle_yPos + paddleHeight/2;

	if (keyIsDown(87) && (leftPaddle_top > 0)) {
		leftPaddle_yPos -= paddleVel;
	} else if (keyIsDown(83) && (leftPaddle_bottom < canvasHeight)) {
		leftPaddle_yPos += paddleVel;
	}

	if (keyIsDown(79)) {
		rightPaddle_yPos -= paddleVel;
	} else if (keyIsDown(76)) {
		rightPaddle_yPos += paddleVel;
	}
}

// make shapes (game paddles, ball)
// keeping score
// motion
// ball bouncing
// check if ball hits wall barriers
// reset ball in middle 
var bounceL=0;
var bounceR=0;
var rightScore =0, leftScore =0;
function bouncePaddles() {
	if ((myBall_bottom >= leftPaddle_top) && (myBall_top <= leftPaddle_bottom)) {
		if (myBall_left <= leftPaddle_right) {
			myBall_xVel = -myBall_xVel;
    }
  }

	if ((myBall_bottom >= rightPaddle_top) && (myBall_top <= rightPaddle_bottom)) {
		if (myBall_right >= rightPaddle_left) {
			myBall_xVel = -myBall_xVel;
			bounceR++;
			console.log("Bounce Right " + bounceR);
		}
  }
}


function updateScore(){
  if (myBall_right >= canvasWidth) {
    leftScore++;
  
  }
  if (myBall_left <= 0){
    rightScore++;
  }
}

function displayScore(){


fill(color(0,0,0));
textSize(25);
text("score: "+leftScore, canvasWidth/4, ballSize);
text("score: "+rightScore, canvasWidth*0.75, ballSize);
}