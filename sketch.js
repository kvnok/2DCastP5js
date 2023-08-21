//send out lines which will collide with the walls
//have collisions color the walls
//have a fov value to be able to change to increase range of the cone

let screen_width = 960;
let screen_height = 960;
let box_size = 64;
let player_size = box_size/4;
let amount_of_blocks = screen_width/box_size;
let dude;

let playerAngle;
const numRays = 100;
const rayLength = box_size * 5;

function drawRay(x1, y1, x2, y2)
{
	stroke('#fca903');
	line(x1, y1, x2, y2);
	stroke('#000000');
}

function setup() {
	createCanvas(screen_width, screen_height);
	playerAngle = 60.0; 
	dude = new Player(screen_width/2 - player_size/2, screen_height/2 - player_size/2);
}

function draw()
{
	background('#FFFFFF');
	fill('#FFFFFF');
	for (let y = 0; y < amount_of_blocks; y++)
		for (let x = 0; x < amount_of_blocks; x++)
			rect(x * box_size, y * box_size, box_size);
	dude.display();
	dude.move();
	dude.castRays(playerAngle, numRays, rayLength);
}
