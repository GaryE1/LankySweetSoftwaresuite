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
	
	moveAndBounceWall();
	rect(myBall_xPos,myBall_yPos,ballSize,ballSize);
}

	

function moveAndBounceWall() {
	myBall_xPos  = myBall_xPos + myBall_xVel;
	myBall_left  = myBall_xPos - ballSize/2;
	myBall_right = myBall_xPos + ballSize/2;
	if ( (myBall_right > canvasWidth) || (myBall_left < 0) ) {
		myBall_xVel = -myBall_xVel;
		colorChange();
	}


	myBall_yPos   = myBall_yPos + myBall_yVel;
	myBall_top    = myBall_yPos - ballSize/2;
	myBall_bottom = myBall_yPos + ballSize/2;
	if ( (myBall_bottom > canvasHeight) || (myBall_top < 0) ) {
		myBall_yVel = -myBall_yVel;
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

function bouncepaddle

if(rect1X > rect2x-rectwidth && rect1x-30 <rect2x+rect2width && rect1y+30 > rect2y-rect2height && rect1y-30 < rect2y+rect2height+30){
  move=move*-1
}