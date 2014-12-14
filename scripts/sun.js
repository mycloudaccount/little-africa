function Sun(prefs){	
	var startAngle = Math.PI * 1.07;
	var position = {angle:startAngle};
	var sprite = new createjs.Container();
	sprite.name = 'sun-'+guid();
	sprite.x = prefs.x;
	sprite.y = prefs.y;

	// create the sprite sheet builder:
	var index = null;
	var builder = new createjs.SpriteSheetBuilder();
	// add the circle as a frame, specify the bounds to draw, and grab the frame index:
	var frames = [];
	frames.push(builder.addFrame(sun0));
	frames.push(builder.addFrame(sun1));
	frames.push(builder.addFrame(sun2));
	builder.addAnimation("flare", frames);
	// run the build operation, and grab the resulting sprite sheet:
	// we could also do this asynchronously with buildAsync(...)
	var spriteSheet = builder.build();	
	spriteSheet.getAnimation("flare").speed = 0.05;
	var sunSprites = new createjs.Sprite(spriteSheet, "flare");
	sprite.addChild(sunSprites);	
	
	var draw = function(){
		
		//Circle will move 10 units to the right.
		position.angle += prefs.speed;
		
		sprite.x = prefs.x + prefs.r * Math.cos(position.angle);
		sprite.y = prefs.y + prefs.r * Math.sin(position.angle);
		
		//Will cause the circle to wrap back
		if (
			position.angle > 3 *  Math.PI
		) { 
			position.angle = startAngle;
		}
		
	};
	
	var handleClick = function(event)
	{
		console.log(sprite+' Hit!!');
		stage.update();		
	};	
	sprite.addEventListener("click", handleClick);

	return{
		'position':position,
		'sprite':sprite,
		'draw':draw
	}; 

}