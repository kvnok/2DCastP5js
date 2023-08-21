
class Player
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.size = player_size;
		this.speed = 4;
	}

	move()
	{
		if (keyIsDown('W'.charCodeAt(0)))
			this.y -= this.speed;
		if (keyIsDown('A'.charCodeAt(0)))
			this.x -= this.speed;
		if (keyIsDown('S'.charCodeAt(0)))
			this.y += this.speed;
		if (keyIsDown('D'.charCodeAt(0)))
			this.x += this.speed;
		if (keyIsDown(LEFT_ARROW))
			playerAngle -= 3.25;
		if (keyIsDown(RIGHT_ARROW))
			playerAngle += 3.25;
	}

	display()
	{
		fill('#000000');
		rect(this.x, this.y, this.size);
	}

	castRays(playerAngle, numRays, rayLength)
	{
		// 360.0
		const angleIncrement =  60.0 / numRays;
		for (let rayIndex = 0; rayIndex < numRays; rayIndex++)
		{
			const rayDirection = (playerAngle % 360) - 90.0 + rayIndex * angleIncrement;
			const radianAngle = radians(rayDirection);
			const endX = this.x + rayLength * cos(radianAngle);
			const endY = this.y + rayLength * sin(radianAngle);
			drawRay(this.x + this.size/2, this.y + this.size/2, endX, endY);
		}
	}
}
