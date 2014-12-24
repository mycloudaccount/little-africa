{"filter":false,"title":"uma.js","tooltip":"/scripts/uma.js","undoManager":{"mark":81,"position":81,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":12},"action":"remove","lines":["Sun"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["\tvar startAngle = Math.PI * 1.07;","\tvar position = {angle:startAngle};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":19},"action":"remove","lines":["sun"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":0},"end":{"row":27,"column":0},"action":"remove","lines":["\t\t//Circle will move 10 units to the right.","\t\tposition.angle += prefs.speed;","\t\t",""]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":0},"end":{"row":33,"column":2},"action":"remove","lines":["\t\t//Will cause the circle to wrap back","\t\tif (","\t\t\tposition.angle > 3 *  Math.PI","\t\t) { ","\t\t\tposition.angle = startAngle;","\t\t}","\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":20},"end":{"row":25,"column":57},"action":"remove","lines":[" + prefs.r * Math.sin(position.angle)"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":20},"end":{"row":24,"column":57},"action":"remove","lines":[" + prefs.r * Math.cos(position.angle)"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":0},"end":{"row":27,"column":0},"action":"remove","lines":["\t\t",""]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":0},"end":{"row":27,"column":0},"action":"remove","lines":["\t\tsprite.x = prefs.x;","\t\tsprite.y = prefs.y;","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"remove","lines":["\t\t'position':position,",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":21,"column":0},"action":"remove","lines":["\tvar index = null;","\tvar builder = new createjs.SpriteSheetBuilder();","\t// add the circle as a frame, specify the bounds to draw, and grab the frame index:","\tvar frames = [];","\tframes.push(builder.addFrame(sun0));","\tframes.push(builder.addFrame(sun1));","\tframes.push(builder.addFrame(sun2));","\tbuilder.addAnimation(\"flare\", frames);","\t// run the build operation, and grab the resulting sprite sheet:","\t// we could also do this asynchronously with buildAsync(...)","\tvar spriteSheet = builder.build();\t","\tspriteSheet.getAnimation(\"flare\").speed = 0.05;","\tvar sunSprites = new createjs.Sprite(spriteSheet, \"flare\");",""]},{"start":{"row":8,"column":0},"end":{"row":18,"column":56},"action":"insert","lines":["var data = {","    images: [\"sprites.jpg\"],","    frames: {width:50, height:50},","    animations: {","        stand:0,","        run:[1,5],","        jump:[6,8,\"run\"]","    }","};","var spriteSheet = new createjs.SpriteSheet(data);","var animation = new createjs.Sprite(spriteSheet, \"run\");"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":56},"end":{"row":18,"column":57},"action":"remove","lines":["\t"]},{"start":{"row":18,"column":56},"end":{"row":19,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":["\t"]},{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":0},"end":{"row":20,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":17},"end":{"row":20,"column":27},"action":"remove","lines":["sunSprites"]},{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":25},"end":{"row":20,"column":26},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":15},"end":{"row":9,"column":26},"action":"remove","lines":["sprites.jpg"]},{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"remove","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"remove","lines":["5"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"remove","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"remove","lines":["5"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"insert","lines":["1"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":13,"column":19},"action":"remove","lines":["\t        stand:0,","\t        run:[1,5],"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":18},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"remove","lines":["6"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"remove","lines":["8"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["2"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["3"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":19},"end":{"row":12,"column":25},"action":"remove","lines":[",\"run\""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":15},"end":{"row":9,"column":36},"action":"insert","lines":["images/scene/Sun0.png"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":34},"end":{"row":9,"column":35},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":33},"end":{"row":9,"column":34},"action":"remove","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"remove","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"remove","lines":["0"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"remove","lines":["S"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":22},"end":{"row":9,"column":27},"action":"remove","lines":["scene"]},{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":23},"end":{"row":9,"column":24},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":33},"end":{"row":9,"column":34},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":34},"end":{"row":9,"column":35},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":36},"end":{"row":9,"column":37},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":39},"end":{"row":9,"column":40},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"insert","lines":["s"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":32},"end":{"row":9,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":64,"mode":"ace/mode/javascript"}},"timestamp":1419383987335,"hash":"a2cf0f3b5af079768c7a0a4bda3afbc81a5a112c"}