

export const levelFileNames = ['01_cellBlockA.jsx', '02_theLongWayOut.jsx', '03_validationEngaged.jsx', '04_multiplicity.jsx', '05_minesweeper.jsx', '06_drones101.jsx', '07_colors.jsx', '08_intoTheWoods.jsx', '09_fordingTheRiver.jsx', '10_ambush.jsx', '11_robot.jsx', '12_robotNav.jsx', '13_robotMaze.jsx', '14_crispsContest.jsx', '15_exceptionalCrossing.jsx', '16_lasers.jsx', '17_pointers.jsx', '18_superDrEvalBros.jsx', '19_documentObjectMadness.jsx', '20_bossFight.jsx', '21_endOfTheLine.jsx', '22_credits.jsx'];

export const viewableScripts = [
    'codeEditor.js',
    'display.js',
    'dynamicObject.js',
    'game.js',
    'inventory.js',
    'map.js',
    'objects.js',
    'player.js',
    'reference.js',
    'sound.js',
    'ui.js',
    'util.js',
    'validate.js'
];

export const editableScripts = [
    'map.js',
    'objects.js',
    'player.js'
];

export const keys = {
    37: 'left', // left arrow
    38: 'up', // up arrow
    39: 'right', // right arrow
    40: 'down', // down arrow
    65: 'left', // A
    68: 'right', // D
    81: 'funcPhone', // Q
    82: 'rest', // R
    83: 'down', // S
    87: 'up', // W
    98: 'down', // 2
    100: 'left', // 4
    101: 'rest', // 5
    102: 'right', // 6
    104: 'up' // 8
};

export const levels = {
    'levels/01_cellBlockA.jsx': '#BEGIN_PROPERTIES#\n{\n    "version": "1.2",\n    "commandsIntroduced":\n        ["global.startLevel", "global.onExit", "map.placePlayer",\n         "map.placeObject", "map.height", "map.width",\n         "map.displayChapter", "map.getPlayer", "player.hasItem"],\n    "music": "The Green"\n}\n#END_PROPERTIES#\n/*****************\n * cellBlockA.js *\n *****************\n *\n * Good morning, Dr. Eval.\n *\n * It wasn\'t easy, but I\'ve managed to get your computer down\n * to you. This system might be unfamiliar, but the underlying\n * code is still JavaScript. Just like we predicted.\n *\n * Now, let\'s get what we came here for and then get you out of\n * here. Easy peasy.\n *\n * I\'ve given you as much access to their code as I could, but\n * it\'s not perfect. The red background indicates lines that\n * are off-limits from editing.\n *\n * The code currently places blocks in a rectangle surrounding\n * you. All you need to do is make a gap. You don\'t even need\n * to do anything extra. In fact, you should be doing less.\n */\n\nfunction startLevel(map) {\n#START_OF_START_LEVEL#\n    map.displayChapter(\'Chapter 1\\nBreakout\');\n\n    map.placePlayer(7, 5);\n#BEGIN_EDITABLE#\n\n    for (y = 3; y <= map.height - 10; y++) {\n        map.placeObject(5, y, \'block\');\n        map.placeObject(map.width - 5, y, \'block\');\n    }\n\n    for (x = 5; x <= map.width - 5; x++) {\n        map.placeObject(x, 3, \'block\');\n        map.placeObject(x, map.height - 10, \'block\');\n    }\n#END_EDITABLE#\n\n    map.placeObject(15, 12, \'computer\');\n\n    map.placeObject(map.width-7, map.height-5, \'exit\');\n#END_OF_START_LEVEL#\n}\n\nfunction onExit(map) {\n    if (!map.player.hasItem(\'computer\')) {\n        map.writeStatus("Don\'t forget to pick up the computer!");\n        return false;\n    } else {\n        return true;\n    }\n}\n ', 
    'levels/02_theLongWayOut.jsx': '#BEGIN_PROPERTIES#\n{\n    "version": "1.2",\n    "commandsIntroduced": ["ROT.Map.DividedMaze", "player.atLocation"],\n    "music": "gurh"\n}\n#END_PROPERTIES#\n/********************\n * theLongWayOut.js *\n ********************\n *\n * Well, it looks like they\'re on to us. The path isn\'t as\n * clear as I thought it\'d be. But no matter - four clever\n * characters should be enough to erase all their tricks.\n */\n\nfunction startLevel(map) {\n#START_OF_START_LEVEL#\n    map.placePlayer(7, 5);\n\n    var maze = new ROT.Map.DividedMaze(map.width, map.height);\n#BEGIN_EDITABLE#\n\n#END_EDITABLE#\n    maze.create( function (x, y, mapValue) {\n\n        // don\'t write maze over player\n        if (map.player.atLocation(x,y)) {\n            return 0;\n        }\n\n        else if (mapValue === 1) { //0 is empty space 1 is wall\n            map.placeObject(x,y, \'block\');\n        }\n        else {\n            map.placeObject(x,y,\'empty\');\n        }\n    });\n\n    map.placeObject(map.width-4, map.height-4, \'block\');\n    map.placeObject(map.width-6, map.height-4, \'block\');\n    map.placeObject(map.width-5, map.height-5, \'block\');\n    map.placeObject(map.width-5, map.height-3, \'block\');\n#BEGIN_EDITABLE#\n\n#END_EDITABLE#\n    map.placeObject(map.width-5, map.height-4, \'exit\');\n#END_OF_START_LEVEL#\n}\n ', 
    'levels/03_validationEngaged.jsx': '#BEGIN_PROPERTIES#\n{\n    "version": "1.2",\n    "commandsIntroduced":\n        ["global.validateLevel", "map.validateAtLeastXObjects",\n         "map.validateExactlyXManyObjects"],\n    "music": "Obscure Terrain"\n}\n#END_PROPERTIES#\n/************************\n * validationEngaged.js *\n ************************\n *\n * They\'re really on to us now! The validateLevel function\n * has been activated to enforce constraints on what you can\n * do. In this case, you\'re not allowed to remove any blocks.\n *\n * They\'re doing all they can to keep you here. But you\n * can still outsmart them.\n */\n\nfunction startLevel(map) {\n#START_OF_START_LEVEL#\n    map.placePlayer(map.width-7, map.height-5);\n#BEGIN_EDITABLE#\n\n    for (y = 10; y <= map.height - 3; y++) {\n        map.placeObject(5, y, \'block\');\n        map.placeObject(map.width - 5, y, \'block\');\n    }\n\n    for (x = 5; x <= map.width - 5; x++) {\n        map.placeObject(x, 10, \'block\');\n        map.placeObject(x, map.height - 3, \'block\');\n    }\n#END_EDITABLE#\n\n    map.placeObject(7, 5, \'exit\');\n#END_OF_START_LEVEL#\n}\n\nfunction validateLevel(map) {\n    numBlocks = 2 * (map.height-13) + 2 * (map.width-10);\n\n    map.validateAtLeastXObjects(numBlocks, \'block\');\n    map.validateExactlyXManyObjects(1, \'exit\');\n}\n ', 
    'levels/04_multiplicity.jsx': '#BEGIN_PROPERTIES#\n{\n    "version": "1.2",\n    "commandsIntroduced": [],\n    "music": "coming soon"\n}\n#END_PROPERTIES#\n/*******************\n * multiplicity.js *\n *******************\n *\n * Out of one cell and into another. They\'re not giving you\n * very much to work with here, either. Ah, well.\n *\n * Level filenames can be hints, by the way. Have I\n * mentioned that before?\n *\n * No more cells after this one. I promise.\n */\n\nfunction startLevel(map) {\n#START_OF_START_LEVEL#\n\n    map.placePlayer(map.width-5, map.height-4);\n\n    for (y = 7; y <= map.height - 3; y++) {\n        map.placeObject(7, y, \'block\');\n        map.placeObject(map.width - 3, y, \'block\');\n    }\n#BEGIN_EDITABLE#\n\n#END_EDITABLE#\n    for (x = 7; x <= map.width - 3; x++) {\n        map.placeObject(x, 7, \'block\');\n        map.placeObject(x, map.height - 3, \'block\');\n    }\n\n    map.placeObject(map.width - 5, 5, \'exit\');\n#END_OF_START_LEVEL#\n}\n ', 
    'levels/05_minesweeper.jsx': '#BEGIN_PROPERTIES#\n{\n    "version": "1.2.1",\n    "commandsIntroduced": ["map.setSquareColor"],\n    "music": "cloudy_sin"\n}\n#END_PROPERTIES#\n/******************\n * minesweeper.js *\n ******************\n *\n * So much for Asimov\'s Laws. They\'re actually trying to kill\n * you now. Not to be alarmist, but the floor is littered\n * with mines. Rushing for the exit blindly may be unwise.\n * I need you alive, after all.\n *\n * If only there was some way you could track the positions\n * of the mines...\n */\n\nfunction getRandomInt(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nfunction startLevel(map) {\n#START_OF_START_LEVEL#\n    for (x = 0; x < map.width; x++) {\n        for (y = 0; y < map.height; y++) {\n            map.setSquareColor(x, y, \'#f00\');\n        }\n    }\n\n    map.placePlayer(map.width - 5, 5);\n\n    for (var i = 0; i < 75; i++) {\n        var x = getRandomInt(0, map.width - 1);\n        var y = getRandomInt(0, map.height - 1);\n        if ((x != 2 || y != map.height - 1)\n            && (x != map.width - 5 || y != 5)) {\n            // don\'t place mine over exit or player!\n            map.placeObject(x, y, \'mine\');\n#BEGIN_EDITABLE#\n\n#END_EDITABLE#\n        }\n    }\n\n    map.placeObject(2, map.height - 1, \'exit\');\n#END_OF_START_LEVEL#\n}\n\nfunction validateLevel(map) {\n    map.validateAtLeastXObjects(40, \'mine\');\n    map.validateExactlyXManyObjects(1, \'exit\');\n}\n ', 
    'levels/06_drones101.jsx': '#BEGIN_PROPERTIES#\n{\n    "version": "1.2",\n	"commandsIntroduced":\n        ["object.type", "object.behavior", "object.findNearest",\n         "object.getX", "object.getY", "object.canMove", "object.move"],\n    "music": "GameScratch"\n}\n#END_PROPERTIES#\n\n/****************\n * drones101.js *\n ****************\n *\n * Do you remember, my dear Professor, a certain introductory\n * computational rationality class you taught long ago? Assignment\n * #2, behavior functions of autonomous agents? I remember that one\n * fondly - but attack drones are so much easier to reason about\n * when they\'re not staring you in the face, I would imagine!\n */\n\nfunction startLevel(map) {\n#START_OF_START_LEVEL#\n    function moveToward(obj, type) {\n        var target = obj.findNearest(type);\n        var leftDist = obj.getX() - target.x;\n        var upDist = obj.getY() - target.y;\n\n        var direction;\n        if (upDist == 0 && leftDist == 0) {\n        	return;\n        } if (upDist > 0 && upDist >= leftDist) {\n            direction = \'up\';\n        } else if (upDist < 0 && upDist < leftDist) {\n            direction = \'down\';\n        } else if (leftDist > 0 && leftDist >= upDist) {\n            direction = \'left\';\n        } else {\n            direction = \'right\';\n        }\n\n        if (obj.canMove(direction)) {\n            obj.move(direction);\n        }\n    }\n\n    map.defineObject(\'attackDrone\', {\n        \'type\': \'dynamic\',\n        \'symbol\': \'d\',\n        \'color\': \'red\',\n        \'onCollision\': function (player) {\n            player.killedBy(\'an attack drone\');\n        },\n        \'behavior\': function (me) {\n            moveToward(me, \'player\');\n        }\n    });\n\n\n    map.placePlayer(1, 1);\n    map.placeObject(map.width-2, 12, \'attackDrone\');\n    map.placeObject(map.width-1, 12, \'exit\');\n\n    map.placeObject(map.width-1, 11, \'block\');\n    map.placeObject(map.width-2, 11, \'block\');\n    map.placeObject(map.width-1, 13, \'block\');\n    map.placeObject(map.width-2, 13, \'block\');\n#BEGIN_EDITABLE#\n\n\n\n\n#END_EDITABLE#\n#END_OF_START_LEVEL#\n}\n\nfunction validateLevel(map) {\n    map.validateExactlyXManyObjects(1, \'exit\');\n}\n ', 
    'levels/07_colors.jsx': '#BEGIN_PROPERTIES#\n{\n    "version": "1.2",\n    "commandsIntroduced":\n        ["map.defineObject", "player.getColor", "player.setColor",\n         "object.color", "object.impassable", "object.symbol",\n         "player.setPhoneCallback"],\n    "music": "Y"\n}\n#END_PROPERTIES#\n/*************\n* colors.js *\n *************\n *\n * You\'re almost at the exit. You just need to get past this\n * color lock.\n *\n * Changing your environment is no longer enough. You must\n * learn to change yourself. I\'ve sent you a little something\n * that should help with that.\n */\n\nfunction startLevel(map) {\n#START_OF_START_LEVEL#\n    map.placePlayer(0, 12);\n\n    map.placeObject(5, 12, \'phone\');\n\n    // The function phone lets you call arbitrary functions,\n    // as defined by player.setPhoneCallback() below.\n    // The function phone callback is bound to Q or Ctrl-6.\n    map.player.setPhoneCallback(function () {\n#BEGIN_EDITABLE#\n        var player = map.player;\n\n        player.setColor(\'#f00\');\n\n\n\n\n\n#END_EDITABLE#\n    });\n\n\n    map.defineObject(\'redLock\', {\n        symbol: \'☒\',\n        color: "#f00", // red\n        impassable: function(player, object) {\n            return player.getColor() != object.color;\n        }\n    });\n\n    map.defineObject(\'greenLock\', {\n        symbol: \'☒\',\n        color: "#0f0", // green\n        impassable: function(player, object) {\n            return player.getColor() != object.color;\n        }\n    });\n\n    map.defineObject(\'yellowLock\', {\n        symbol: \'☒\',\n        color: "#ff0", // yellow\n        impassable: function(player, object) {\n            return player.getColor() != object.color;\n        }\n    });\n\n    for (var x = 20; x <= 40; x++) {\n        map.placeObject(x, 11, \'block\');\n        map.placeObject(x, 13, \'block\');\n    }\n    map.placeObject(22, 12, \'greenLock\');\n    map.placeObject(25, 12, \'redLock\');\n    map.placeObject(28, 12, \'yellowLock\');\n    map.placeObject(31, 12, \'greenLock\');\n    map.placeObject(34, 12, \'redLock\');\n    map.placeObject(37, 12, \'yellowLock\');\n    map.placeObject(40, 12, \'exit\');\n    for (var y = 0; y < map.height; y++) {\n        if (y != 12) {\n            map.placeObject(40, y, \'block\');\n        }\n        for (var x = 41; x < map.width; x++) {\n            map.setSquareColor(x, y, \'#080\');\n        }\n    }\n#END_OF_START_LEVEL#\n}\n\nfunction validateLevel(map) {\n    map.validateExactlyXManyObjects(1, \'exit\');\n}\n\nfunction onExit(map) {\n    if (!map.player.hasItem(\'phone\')) {\n        map.writeStatus("We need the phone!");\n        return false;\n    } else {\n        return true;\n    }\n}\n ', 
    'levels/08_intoTheWoods.jsx': '#BEGIN_PROPERTIES#\n{\n    "version": "1.2",\n    "commandsIntroduced":\n        ["map.getObjectTypeAt", "player.getX", "player.getY",\n         "map.refresh"],\n    "mapProperties": {\n        "allowOverwrite": true\n    },\n    "music": "Night Owl"\n}\n#END_PROPERTIES#\n/*******************\n * intoTheWoods.js *\n *******************\n *\n * Ah, you\'re out of the woods now. Or into the woods, as the\n * case may be.\n *\n * So take a deep breath, relax, and remember what you\'re here\n * for in the first place.\n *\n * I\'ve traced its signal and the Algorithm is nearby. You\'ll\n * need to go through the forest and across the river, and\n * you\'ll reach the fortress where it\'s kept. Their defences\n * are light, and we should be able to catch them off-guard.\n */\n\nfunction startLevel(map) {\n#START_OF_START_LEVEL#\n    // NOTE: In this level alone, map.placeObject is allowed to\n    //overwrite existing objects.\n\n    map.displayChapter(\'Chapter 2\\nRaiders of the Lost Algorithm\');\n\n    map.placePlayer(2, map.height - 1);\n\n    var functionList = {};\n\n    functionList[\'fortresses\'] = function () {\n        function genRandomValue(direction) {\n            if (direction === "height") {\n                return Math.floor(Math.random() * (map.height-3));\n            } else if (direction === "width") {\n                return Math.floor(Math.random() * (map.width+1));\n            }\n        }\n\n        var x = genRandomValue("width");\n        var y = genRandomValue("height");\n\n        for (var i = x-2; i < x+2; i++) {\n            map.placeObject(i,y-2, \'block\');\n        }\n        for (var i = x-2; i < x+2; i++) {\n            map.placeObject(i,y+2, \'block\');\n        }\n\n        for (var j = y-2; j < y+2; j++) {\n            map.placeObject(x-2,j, \'block\');\n        }\n\n        for (var j = y-2; j < y+2; j++) {\n            map.placeObject(x+2,j, \'block\');\n        }\n    };\n\n    functionList[\'generateForest\'] = function () {\n        for (var i = 0; i < map.width; i++) {\n            for (var j = 0; j < map.height; j++) {\n\n                // initialize to empty if the square contains a forest already\n                if (map.getObjectTypeAt(i, j) === \'tree\') {\n                    // remove existing forest\n                    map.placeObject(i,j, \'empty\');\n                }\n\n                if (map.player.atLocation(i,j) ||\n                        map.getObjectTypeAt(i, j) === \'block\' ||\n                        map.getObjectTypeAt(i, j) === \'exit\') {\n                    continue;\n                }\n\n                var rv = Math.random();\n                if (rv < 0.45) {\n                    map.placeObject(i, j, \'tree\');\n                }\n            }\n        }\n        map.refresh();\n    };\n\n    functionList[\'movePlayerToExit\'] = function () {\n        map.writeStatus("Permission denied.");\n    }\n\n    functionList[\'pleaseMovePlayerToExit\'] = function () {\n        map.writeStatus("I don\'t think so.");\n    }\n\n    functionList[\'movePlayerToExitDamnit\'] = function () {\n        map.writeStatus("So, how \'bout them <LOCAL SPORTS TEAM>?");\n    }\n\n    // generate forest\n    functionList[\'generateForest\']();\n\n    // generate fortresses\n    functionList[\'fortresses\']();\n    functionList[\'fortresses\']();\n    functionList[\'fortresses\']();\n    functionList[\'fortresses\']();\n\n    map.player.setPhoneCallback(functionList[#{#"movePlayerToExit"#}#]);\n\n    map.placeObject(map.width-1, map.height-1, \'exit\');\n#END_OF_START_LEVEL#\n}\n\nfunction validateLevel(map) {\n    map.validateAtLeastXObjects(100, \'tree\');\n    map.validateExactlyXManyObjects(1, \'exit\');\n}\n ', 
    'levels/09_fordingTheRiver.jsx': '#BEGIN_PROPERTIES#\n{\n    "version": "1.2",\n    "commandsIntroduced":\n        ["player.killedBy", "object.onCollision"],\n    "music": "The_Waves_Call_Her_Name"\n}\n#END_PROPERTIES#\n/**********************\n * fordingTheRiver.js *\n **********************\n *\n * And there\'s the river. Fortunately, I was prepared for this.\n * See the raft on the other side?\n *\n * Everything is going according to plan.\n */\n\nfunction startLevel(map) {\n#START_OF_START_LEVEL#\n    var raftDirection = \'down\';\n\n    map.placePlayer(map.width-1, map.height-1);\n    var player = map.player;\n\n    map.defineObject(\'raft\', {\n        \'type\': \'dynamic\',\n        \'symbol\': \'▓\',\n        \'color\': \'#420\',\n        \'transport\': true, // (prevents player from drowning in water)\n        \'behavior\': function (me) {\n            me.move(raftDirection);\n        }\n    });\n\n    map.defineObject(\'water\', {\n        \'symbol\': \'░\',\n        \'color\': \'#44f\',\n        \'onCollision\': function (player) {\n            player.killedBy(\'drowning in deep dark water\');\n        }\n    });\n\n    for (var x = 0; x < map.width; x++) {\n        for (var y = 5; y < 15; y++) {\n            map.placeObject(x, y, \'water\');\n        }\n    }\n\n    map.placeObject(20, 5, \'raft\');\n    map.placeObject(0, 2, \'exit\');\n    map.placeObject(0, 1, \'block\');\n    map.placeObject(1, 1, \'block\');\n    map.placeObject(0, 3, \'block\');\n    map.placeObject(1, 3, \'block\');\n\n#BEGIN_EDITABLE#\n\n\n\n#END_EDITABLE#\n#END_OF_START_LEVEL#\n}\n\nfunction validateLevel(map) {\n    map.validateExactlyXManyObjects(1, \'exit\');\n    map.validateExactlyXManyObjects(1, \'raft\');\n}\n ', 
    'levels/10_ambush.jsx': '#BEGIN_PROPERTIES#\n{\n    "version": "1.2",\n    "commandsIntroduced": [],\n    "music": "Come and Find Me"\n}\n#END_PROPERTIES#\n/*************\n * ambush.js *\n *************\n *\n * Oh. Oh, I see. This wasn\'t quite part of the plan.\n *\n * Looks like they won\'t let you take the Algorithm\n * without a fight. You\'ll need to carefully weave your\n * way through the guard drones.\n *\n * Well, time to improvise. Let\'s mess with their programming\n * a little, shall we?\n */\n\nfunction startLevel(map) {\n#START_OF_START_LEVEL#\n    function moveToward(obj, type) {\n        var target = obj.findNearest(type);\n        var leftDist = obj.getX() - target.x;\n        var upDist = obj.getY() - target.y;\n\n        var direction;\n        if (upDist == 0 && leftDist == 0) {\n            return;\n        } if (upDist > 0 && upDist >= leftDist) {\n            direction = \'up\';\n        } else if (upDist < 0 && upDist < leftDist) {\n            direction = \'down\';\n        } else if (leftDist > 0 && leftDist >= upDist) {\n            direction = \'left\';\n        } else {\n            direction = \'right\';\n        }\n\n        if (obj.canMove(direction)) {\n            obj.move(direction);\n        }\n    }\n\n    map.defineObject(\'attackDrone\', {\n        \'type\': \'dynamic\',\n        \'symbol\': \'d\',\n        \'color\': \'red\',\n        \'onCollision\': function (player) {\n            player.killedBy(\'an attack drone\');\n        },\n        \'behavior\': function (me) {\n#BEGIN_EDITABLE#\n            moveToward(me, \'player\');\n#END_EDITABLE#\n        }\n    });\n\n    map.defineObject(\'reinforcementDrone\', {\n        \'type\': \'dynamic\',\n        \'symbol\': \'d\',\n        \'color\': \'yellow\',\n        \'onCollision\': function (player) {\n            player.killedBy(\'a reinforcement drone\');\n        },\n        \'behavior\': function (me) {\n#BEGIN_EDITABLE#\n            me.move(\'left\');\n#END_EDITABLE#\n        }\n    });\n\n    map.defineObject(\'defenseDrone\', {\n        \'type\': \'dynamic\',\n        \'symbol\': \'d\',\n        \'color\': \'green\',\n        \'onCollision\': function (player) {\n            player.killedBy(\'a defense drone\');\n        },\n        \'behavior\': function (me) {\n#BEGIN_EDITABLE#\n\n#END_EDITABLE#\n        }\n    });\n\n    // just for decoration\n    map.defineObject(\'water\', {\n        \'symbol\': \'░\',\n        \'color\': \'#44f\'\n    });\n\n    map.placePlayer(0, 12);\n\n    for (var x = 0; x < map.width; x++) {\n        map.placeObject(x, 10, \'block\');\n        map.placeObject(x, 14, \'block\');\n\n        for (var y = 20; y < map.height; y++) {\n            map.placeObject(x, y, \'water\');\n        }\n    }\n\n    map.placeObject(23, 11, \'attackDrone\');\n    map.placeObject(23, 12, \'attackDrone\');\n    map.placeObject(23, 13, \'attackDrone\');\n\n    map.placeObject(27, 11, \'defenseDrone\');\n    map.placeObject(27, 12, \'defenseDrone\');\n    map.placeObject(27, 13, \'defenseDrone\');\n\n    map.placeObject(24, 11, \'reinforcementDrone\');\n    map.placeObject(25, 11, \'reinforcementDrone\');\n    map.placeObject(26, 11, \'reinforcementDrone\');\n    map.placeObject(24, 13, \'reinforcementDrone\');\n    map.placeObject(25, 13, \'reinforcementDrone\');\n    map.placeObject(26, 13, \'reinforcementDrone\');\n\n    map.placeObject(map.width-1, 12, \'exit\');\n#END_OF_START_LEVEL#\n}\n\nfunction validateLevel(map) {\n    map.validateExactlyXManyObjects(1, \'exit\');\n}\n ', 
}

export const verbotenWords = [
    'eval', '.call', 'call(', 'apply', 'bind', // prevents arbitrary code execution
    'prototype', // prevents messing with prototypes
    'setTimeout', 'setInterval', // requires players to use map.startTimer() instead
    'requestAnimationFrame', 'mozRequestAnimationFrame', // (more timeout-like methods)
    'webkitRequestAnimationFrame', 'setImmediate', // (more timeout-like methods)
    'prompt', 'confirm', // prevents dialogs asking for user input
    'debugger', // prevents pausing execution
    'delete', // prevents removing items
    'atob(','btoa(',//prevent bypassing checks using Base64
    'Function(', //prevent constructing arbitrary function
    'constructor', // prevents retrieval of Function using an instance of it
    'window', // prevents setting "window.[...] = map", etc.
    'document', // in particular, document.write is dangerous
    'self.', 'self[', 'top.', 'top[', 'frames',  // self === top === frames === window
    'parent', 'content', // parent === content === window in most of cases
    'validate', 'onExit', 'objective', // don't let players rewrite these methods
    'this[' // prevents this['win'+'dow'], etc.
];

//Start- Related to API

//const BaseAPI = "http://localhost:63174/api";
const BaseAPI = "https://untrusted-server.azurewebsites.net/api";

export function getAuthToken() {
    return localStorage.getItem('token');
}

export const API = {
    login: `${BaseAPI}/login`,
    register: `${BaseAPI}/users/createUser`,
    level: `${BaseAPI}/level`,
    leaderboard: `${BaseAPI}/users/leaderBoard`,
    updateLevel: `${BaseAPI}/level/updateLevel`,
    reset: `${BaseAPI}/users/resetLevel`,
    getLevelByNo: `${BaseAPI}/users/levelByNo`
}

//End- Related to API

export const referenceImplementations = {
    'map': {
        'countObjects': '',
        'createFromDOM': '',
        'createFromGrid': '',
        'displayChapter': '',
        'defineObject': '',
        'getAdjacentEmptyCells': '',
        'getCanvasContext': '',
        'getCanvasCoords': '',
        'getDOM': '',
        'getDynamicObjects': '',
        'getHeight': '',
        'getObjectTypeAt': '',
        'getPlayer': '',
        'getRandomColor': '',
        'getWidth': '',
        'isStartOfLevel': '',
        'overrideKey': '',
        'placeObject': '',
        'placePlayer': '',
        'setSquareColor': '',
        'startTimer': '',
        'updateDOM': '',
        'validateAtLeastXObjects': '',
        'validateAtMostXObjects': '',
        'validateExactlyXManyObjects': '',
        'validateAtMostXDynamicObjects': '',
        'validateNoTimers': '',
        'validateAtLeastXLines': ''
    },
    'player': {
        'atLocation': '',
        'getColor': '',
        'getLastMoveDirection': '',
        'getX': '',
        'getY': '',
        'hasItem': '',
        'killedBy': '',
        'move': '',
        'removeItem': '',
        'setColor': '',
        'setPhoneCallback': ''
    }
}