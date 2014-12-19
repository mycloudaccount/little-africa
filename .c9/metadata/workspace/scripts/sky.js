{"changed":true,"filter":false,"title":"sky.js","tooltip":"/scripts/sky.js","value":"function Sky(prefs){\t\n\n\t//var sprite = new createjs.Shape();\n\t//sprite.graphics.beginFill(\"#3377ff\").drawRect(0, 0, stage.canvas.width, stage.canvas.height);\n\tvar sprite = new createjs.Container();\n\tsprite.addChild(sky_noon);\n\tsky_noon.alpha = 0.0;\n\tsprite.addChild(sky_latenoon);\n\tsky_latenoon.alpha = 0.0;\n\tsprite.addChild(sky_night);\n\tsky_night.alpha = 1.0;\n\tsprite.addChild(sky_morning);\n\tsky_morning.alpha = 0.0;\n\t\n\t// object to describe the condiation of the sky\n\tvar condition = {\n\t\t\n\t\t'timeOfDay':INITIAL_TIME_OF_DAY\n\t\t\n\t};\n\t\n\tvar draw = function() {\n\n\t\t// change sky accourding tp sun (always draw sun on screen first!!)\n\t\tvar newTimeOfDay;\n\t\tvar sunAngle = prefs.sun.position.angle;\n\t\tif(sunAngle > Math.PI * 2.0) {\n\t\t\tnewTimeOfDay = NIGHT;\n\t\t}\n\t\telse if(sunAngle > Math.PI * 1.8) {\n\t\t\tnewTimeOfDay = LATENOON;\n\t\t}\n\t\telse if(sunAngle > Math.PI * 1.2) {\n\t\t\tnewTimeOfDay = NOON;\n\t\t}\n\t\telse if(sunAngle > Math.PI) {\n\t\t\tnewTimeOfDay = MORNING;\n\t\t}\n\t\t\n\t\tif(condition.timeOfDay !== newTimeOfDay) {\n\t\t\t// make the proper transition (based on new timeOfDay)\n\t\t\tswitch(newTimeOfDay) {\n\t\t\t\tcase MORNING:\n\t\t\t\t\t//tween\n\t\t\t\t\tcreatejs.Tween.get(sky_night).to({alpha:0.0},4000, createjs.Ease.linear);\n\t\t\t\t\tcreatejs.Tween.get(sky_morning).to({alpha:1.0},4000, createjs.Ease.linear);\n\t\t\t\t\tconsole.log('time is now: ' + newTimeOfDay);\n\t\t\t\tbreak;\t\n\t\t\t\tcase NOON:\n\t\t\t\t\t//tween\n\t\t\t\t\tcreatejs.Tween.get(sky_morning).to({alpha:0.0},4000, createjs.Ease.linear);\n\t\t\t\t\tcreatejs.Tween.get(sky_noon).to({alpha:1.0},4000, createjs.Ease.linear);\n\t\t\t\t\tconsole.log('time is now: ' + newTimeOfDay);\n\t\t\t\tbreak;\t\n\t\t\t\tcase LATENOON:\n\t\t\t\t\t//tween\n\t\t\t\t\tcreatejs.Tween.get(sky_noon).to({alpha:0.0},4000, createjs.Ease.linear);\n\t\t\t\t\tcreatejs.Tween.get(sky_latenoon).to({alpha:1.0},4000, createjs.Ease.linear);\n\t\t\t\t\tconsole.log('time is now: ' + newTimeOfDay);\n\t\t\t\tbreak;\t\n\t\t\t\tcase NIGHT:\n\t\t\t\t\t//tween\n\t\t\t\t\tcreatejs.Tween.get(sky_latenoon).to({alpha:0.0},4000, createjs.Ease.linear);\n\t\t\t\t\tcreatejs.Tween.get(sky_night).to({alpha:1.0},4000, createjs.Ease.linear);\n\t\t\t\t\tconsole.log('time is now: ' + newTimeOfDay);\n\t\t\t\tbreak;\t\n\t\t\t\tdefault:\n\t\t\t\t\tconsole.log('warning: newTimeOfDay condition not met: ' + newTimeOfDay);\n\t\t\t\t\tconsole.log('time is now: ' + newTimeOfDay);\n\t\t\t\tbreak;\t\n\t\t\t}\n\t\t}\n\t\tcondition.timeOfDay = newTimeOfDay;\n\t\t\n\t};\n\t\n\treturn{\n\t\t'sprite':sprite,\n\t\t'condition':condition,\n\t\t'draw':draw\n\t}; \n\n}","undoManager":{"mark":-13,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":74,"column":4},"end":{"row":74,"column":5},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":5},"end":{"row":74,"column":6},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":6},"end":{"row":74,"column":7},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":7},"end":{"row":74,"column":8},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":8},"end":{"row":74,"column":9},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":9},"end":{"row":74,"column":10},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":10},"end":{"row":74,"column":11},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":11},"end":{"row":74,"column":12},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":13},"end":{"row":74,"column":14},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":14},"end":{"row":74,"column":15},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":15},"end":{"row":74,"column":16},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":16},"end":{"row":74,"column":17},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":14},"end":{"row":74,"column":17},"action":"remove","lines":["con"]},{"start":{"row":74,"column":14},"end":{"row":74,"column":23},"action":"insert","lines":["condition"]}]}],[{"group":"doc","deltas":[{"start":{"row":74,"column":23},"end":{"row":74,"column":24},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":1},"end":{"row":17,"column":0},"action":"insert","lines":["",""]},{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":1},"end":{"row":18,"column":0},"action":"insert","lines":["",""]},{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":2},"end":{"row":17,"column":3},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"insert","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["b"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":36},"end":{"row":17,"column":37},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"remove","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":40},"end":{"row":17,"column":41},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":41},"end":{"row":17,"column":42},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":46},"end":{"row":17,"column":47},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":47},"end":{"row":17,"column":48},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":17,"column":48},"end":{"row":18,"column":0},"action":"insert","lines":["",""]},{"start":{"row":18,"column":0},"end":{"row":18,"column":1},"action":"insert","lines":["\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":1},"end":{"row":18,"column":2},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":2},"end":{"row":18,"column":3},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":3},"end":{"row":18,"column":4},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":4},"end":{"row":18,"column":5},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":6},"end":{"row":18,"column":7},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":7},"end":{"row":18,"column":8},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":5},"end":{"row":18,"column":8},"action":"remove","lines":["con"]},{"start":{"row":18,"column":5},"end":{"row":18,"column":14},"action":"insert","lines":["condition"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"insert","lines":["}"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":19},"end":{"row":18,"column":20},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":18},"end":{"row":20,"column":1},"action":"insert","lines":["","\t\t","\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":2},"end":{"row":20,"column":0},"action":"insert","lines":["",""]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"insert","lines":["\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":2},"end":{"row":21,"column":0},"action":"insert","lines":["",""]},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["\t\t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":5},"end":{"row":20,"column":6},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":2},"end":{"row":20,"column":6},"action":"remove","lines":["time"]},{"start":{"row":20,"column":2},"end":{"row":20,"column":11},"action":"insert","lines":["timeOfDay"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":12},"end":{"row":20,"column":16},"action":"remove","lines":["time"]},{"start":{"row":20,"column":12},"end":{"row":20,"column":21},"action":"insert","lines":["timeOfDay"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"insert","lines":["'"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["'"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":14},"end":{"row":20,"column":23},"action":"remove","lines":["timeOfDay"]},{"start":{"row":20,"column":14},"end":{"row":20,"column":33},"action":"insert","lines":["INITIAL_TIME_OF_DAY"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":17,"column":0},"action":"remove","lines":["\t// time of day changes sky view","\tvar timeOfDay = INITIAL_TIME_OF_DAY;","\t",""]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":5},"end":{"row":39,"column":14},"action":"insert","lines":["condition"]}]}],[{"group":"doc","deltas":[{"start":{"row":39,"column":14},"end":{"row":39,"column":15},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":72,"column":2},"end":{"row":72,"column":12},"action":"insert","lines":["condition."]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":14},"end":{"row":4,"column":39},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1418843095069}