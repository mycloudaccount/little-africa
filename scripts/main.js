var stage = null;
var clouds = [];
var background = null;
var loadingScreen = null;


var manifest = [
	{src:"images/scene/Sun0.png", id:"sun0"},
	{src:"images/scene/Sun1.png", id:"sun1"},
	{src:"images/scene/Sun2.png", id:"sun2"},
	{src:"images/scene/Hills.png", id:"hills"},
	{src:"images/scene/Cloud-light.png", id:"cloud_light"},
	{src:"images/scene/Sky-morning.png", id:"sky_morning"},
	{src:"images/scene/Sky-noon.png", id:"sky_noon"},
	{src:"images/scene/Sky-latenoon.png", id:"sky_latenoon"},
	{src:"images/scene/Sky-night.png", id:"sky_night"}
];

// resources handlers
var handleProgress,
	handleComplete,
	handleFileLoad,
	handleLoadError,
	handleFileLoaded;
var totalLoaded = 0;

function init()
{
	stage = new createjs.Stage("mainCanvas");	
		
    //use event.loaded to get the percentage of the loading
	loadingScreen = new createjs.Container();
	var txt = new createjs.Text("Loading...", "20px Arial", "#cccccc"); 
	txt.textBaseline = "alphabetic";
	txt.name = 'txt';
	loadingScreen.addChild(txt);
	loadingScreen.x = (stage.canvas.width - 60) * 0.5; 
	loadingScreen.y = (stage.canvas.height - 10) * 0.5; 
	stage.addChild(loadingScreen);
	stage.update();
	
	
	var loadQueue = new createjs.LoadQueue(true);
    loadQueue.installPlugin(createjs.SoundJS);
	loadQueue.on("progress", handleProgress, this);
	loadQueue.on("complete", handleComplete, this);
	loadQueue.on("fileload", handleFileLoad, this);
	loadQueue.on("error", handleLoadError, this);
    loadQueue.loadManifest(manifest);	
	
	createjs.Ticker.addEventListener(window);
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", stage);
}

function main()
{
	
	background = Background();
    stage.addChild(background.sprite);
	stage.update();
		
	// clouds
	var it = 0;
	for(it=0;it<CLOUD_CNT;++it) {
		var sizeFactor = Math.random();
		clouds[it] = Cloud(
			{
				type:'light',
				alpha: 1.0 - 0.3 * Math.random(),
				x: stage.canvas.width * Math.random(),
				y: 10 + 50 * Math.random(),
				vx: 1.0 - 0.7 * sizeFactor,
				vy:0,
				sx: 1.0 - 0.5 * sizeFactor,
				sy: 1.0 - 0.5 * sizeFactor
			}
		);
		stage.addChild(clouds[it].sprite);
	}
		
	//Update stage will render next frame
	createjs.Ticker.on("tick", handleTick);
}

function handleProgress(event)
{
	var txt = loadingScreen.getChildByName('txt');
	
	switch( txt.text ) {
		case 'Loading.'	:
			txt.text = 'Loading..';
		break;
		case 'Loading..'	:
			txt.text = 'Loading...';
		break;
		case 'Loading...'	:
			txt.text = 'Loading.';
		break;
	}
	
	stage.update();
	console.log('preloading...');
}

function handleComplete(event) {
    //triggered when all loading is complete
	stage.removeChild(loadingScreen);
	stage.update();
	console.log('preloading is complete.');
}

function handleLoadError(event) {
    //triggered when all loading is complete
	console.log('TODO: add error details here!');
}

function handleFileLoad(event) {
	
	var item = event.item;
	
	console.log('preloading: '+item.src + '...');
	
	switch(item.type)
	{
		case createjs.LoadQueue.IMAGE:
			//image loading
			var img = new Image();
			img.src = item.src;
			img.onload = handleFileLoaded(item, img);
		break;
 
		case createjs.LoadQueue.SVG:
			//svg loading
		break;
			
		case createjs.LoadQueue.SOUND:
			//sound loading
			handleFileLoaded();
		break;
	}
	
}

function handleFileLoaded(item, resrc) 
{
	switch(item.type)
	{
		case createjs.LoadQueue.IMAGE:
			//image loaded - create bitmap from it
			window[item.id] = new createjs.Bitmap(resrc);
			/*
			window[item.id] = new createjs.Shape(
				new createjs.Graphics().beginBitmapFill(
					resrc,'no-repeat').drawRect(
					0, 
					0, 
					resrc.width, 
					resrc.height));
					*/
		break;
 
		case createjs.LoadQueue.SVG:
			//image loaded - create bitmap from it
			window[item.id] = new createjs.Bitmap(resrc);
		break;
 
		case createjs.LoadQueue.SOUND:
			//sound loaded
		break;
	}

	console.log(item.src + ' has been loaded.');
	totalLoaded++;
    if(manifest.length===totalLoaded) {
		console.log('All Resources Are Loaded');
	   	console.log('\ttotal = '+totalLoaded);
		main();		
	}
}

function handleTick(event) 
{	
	for(var it in clouds) {
		clouds[it].draw();
	}
	
	background.draw();	
    stage.update(event);
}
