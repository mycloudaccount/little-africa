function Sky(prefs){	

	//var sprite = new createjs.Shape();
	//sprite.graphics.beginFill("#3377ff").drawRect(0, 0, stage.canvas.width, stage.canvas.height);
	var sprite = new createjs.Container();
	sprite.addChild(sky_noon);
	sky_noon.alpha = 0.0;
	sprite.addChild(sky_latenoon);
	sky_latenoon.alpha = 0.0;
	sprite.addChild(sky_night);
	sky_night.alpha = 1.0;
	sprite.addChild(sky_morning);
	sky_morning.alpha = 0.0;
	
	// time of day changes sky view
	var timeOfDay = INITIAL_TIME_OF_DAY;
	
	var draw = function() {

		// change sky accourding tp sun (always draw sun on screen first!!)
		var newTimeOfDay;
		var sunAngle = prefs.sun.position.angle;
		if(sunAngle > Math.PI * 2.0) {
			newTimeOfDay = NIGHT;
		}
		else if(sunAngle > Math.PI * 1.8) {
			newTimeOfDay = LATENOON;
		}
		else if(sunAngle > Math.PI * 1.2) {
			newTimeOfDay = NOON;
		}
		else if(sunAngle > Math.PI) {
			newTimeOfDay = MORNING;
		}
		
		if(timeOfDay !== newTimeOfDay) {
			// make the proper transition (based on new timeOfDay)
			switch(newTimeOfDay) {
				case MORNING:
					//tween
					createjs.Tween.get(sky_night).to({alpha:0.0},4000, createjs.Ease.linear);
					createjs.Tween.get(sky_morning).to({alpha:1.0},4000, createjs.Ease.linear);
					console.log('time is now: ' + newTimeOfDay);
				break;	
				case NOON:
					//tween
					createjs.Tween.get(sky_morning).to({alpha:0.0},4000, createjs.Ease.linear);
					createjs.Tween.get(sky_noon).to({alpha:1.0},4000, createjs.Ease.linear);
					console.log('time is now: ' + newTimeOfDay);
				break;	
				case LATENOON:
					//tween
					createjs.Tween.get(sky_noon).to({alpha:0.0},4000, createjs.Ease.linear);
					createjs.Tween.get(sky_latenoon).to({alpha:1.0},4000, createjs.Ease.linear);
					console.log('time is now: ' + newTimeOfDay);
				break;	
				case NIGHT:
					//tween
					createjs.Tween.get(sky_latenoon).to({alpha:0.0},4000, createjs.Ease.linear);
					createjs.Tween.get(sky_night).to({alpha:1.0},4000, createjs.Ease.linear);
					console.log('time is now: ' + newTimeOfDay);
				break;	
				default:
					console.log('warning: newTimeOfDay condition not met: ' + newTimeOfDay);
					console.log('time is now: ' + newTimeOfDay);
				break;	
			}
		}
		timeOfDay = newTimeOfDay;
		
	};
	
	return{
		'sprite':sprite,
		'draw':draw
	}; 

}