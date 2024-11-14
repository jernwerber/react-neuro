import { ImageListCollection } from "./client-images"



export const IMAGESETS: ImageListCollection = {

    'vertical' : {
        baseSize: {width:800, height:600},
        baseOffset: {x:0, y:15},
        images : [
            [41,0,6],[46,0,3],[48,0,7],
            [50,0,2],[52,0,-2],[54,0,2],
            [56,0,6],[58,0,3],[60,0,0],
            [62,0,1],[64,0,1],[66,0,3],
            [68,0,7],[70,0,-5],[72,0,4],
            [74,0,-2],[76,0,-7],[78,0,-5],
            [80,0,-2],[82,0,-5],[84,0,-6],
            [86,0,-2],[88,0,-8],[90,0,2]
        ],
        overlays : {
            "46" : { name:"93", xoff:0, yoff:3 },
            "58" : { name:"95", xoff:0, yoff:3 }

        }
},
    'sagittal' : {
        appearance: {imageScale:.95},
        baseSize: {width:600, height:800},
        baseOffset: {x:0,y:-130},
        images: [
            97,[99,6,0],[101,-3,-10],
            [103,0,2],105,[107,0,7],
            109,111,[113,0,-2],
            [115,-1,-3],[117,0,-5],[119,0,-7],
            [121,-8,-6],[123,-8,-5],[125,-6,-3],
            127,129,131,
            [133,0,4],135,137,
            139,141,143
        ]
        },
    "transverse" : {
        appearance: {backgroundColor: "black"},
        baseSize: {width:800, height:600},
        baseOffset: {x:0,y:10},
        images: [
            152,157,160,
            163,166,169,
            172,175,178,
            181,184,187,
            [190,-38,-33],193,[196,10,0],
            [199,-7,-15]
        ],
        overlays: {
            "152" : { name:"202", xoff:0, yoff:0 },
            "157" : { name:"205", xoff:0, yoff:0 },
            "160" : { name:"208", xoff:0, yoff:0 },
            "163" : { name:"211", xoff:0, yoff:0 },
            "166" : { name:"214", xoff:0, yoff:0 },
            "169" : { name:"217", xoff:0, yoff:0 },
            "172" : { name:"220", xoff:0, yoff:0 },
            "175" : { name:"223", xoff:0, yoff:0 },
            "178" : { name:"226", xoff:0, yoff:0 },
            "181" : { name:"229", xoff:0, yoff:0 },
            "184" : { name:"232", xoff:0, yoff:0 },
            "187" : { name:"236", xoff:0, yoff:0 },
            "190" : { name:"239", xoff:-38, yoff:-33 },
            "193" : { name:"244", xoff:0, yoff:0 },
            "196" : { name:"247", xoff:10, yoff:0 },
            "199" : { name:"250", xoff:-7, yoff:-15 },


        }
    },
    "transverse_2" : {
        appearance: {backgroundColor: "black", imageScale:.75},
        baseSize: {width:800, height:600},
        baseOffset: {x:0,y:10},
        images: [
            254,257,260,
            263,266,269,
            272
        ],
        overlays: {
            "254": { name:"278", xoff:0, yoff:0 },
            "257": { name:"281", xoff:0, yoff:0 },
            "260": { name:"284", xoff:0, yoff:0 },
            "263": { name:"287", xoff:0, yoff:0 },
            "266": { name:"291", xoff:0, yoff:0 },
            "269": { name:"294", xoff:0, yoff:0 },
            "272": { name:"298", xoff:0, yoff:0 },
        }

    }
}