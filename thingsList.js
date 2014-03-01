(function (Chemist) {
    //桌布
    var tp = "textures/",
        ip = "images/";
    Chemist.TableClothes = [
        {
            name: "blue",
            url: tp + "Blue.jpg"
        },
        {
            name: "travel",
            url: tp + "Travel.jpg"
        },
        {
            name: "wow",
            url: tp + "WoW.jpg"
        }
    ];
        
        //器材
    Chemist.Equips = {
        beaker : {
            name : "beaker",
            id : "beaker",
            img : ip + "beaker.jpg",
            create : function () {
                Chemist.Beaker(Chemist.beakerPosition);
            }
        },

        burner : {
            name : "burner",
            id : "burner",
            img : ip + "burner.jpg",
            create : function () {
                Chemist.Burner(Chemist.beakerPosition);
            }
        },

        testTube : {
            name : "testTube",
            id : "testTube",
            img : ip + "testTube.jpg",
            create : function () {
                Chemist.TestTube(Chemist.beakerPosition);
            }
        },

        pipe : {
            name : "pipe",
            id : "pipe",
            img : ip + "pipe.jpg",
            create : function () {
                Chemist.Pipe(Chemist.pipePosition);
            }
        },

        ironSupport : {
            name : "ironSupport",
            id: "ironSupport",
            img : ip + "ironSupport.jpg",
            create : function () {
                Chemist.IronSupport(Chemist.center);
            }
        }
        
    };
    
    Chemist.Chemicals = {
        solids : {
            sodium : {
                id : "Na",
                key : "sodium",
                name : "钠",
                color : 0xffffff,
                solutionColor : null,     //溶液颜色
                burningColor : 0xF4FE81,
                ingredient : ["sodium"], //成分
                meltingPoint : 97  //摄氏度
            },
            copper : {
                id : "Cu",
                key : "copper",
                name : "铜",
                color : 0xB58442,
                solutionColor : null,
                burningColor : 0x0EA107,
                ingredient : ["copper"], //成分
                meltingPoint : 1084
            },
            zinc : {
                id : "Zn",
                key : "zinc",
                name : "锌",
                color : 0xA7B3D0,
                solutionColor : null,
                burningColor : 0x33C6FA,
                ingredient : ["zinc"], //成分
                meltingPoint : 419.5
            },
            copperOxide : {
                id : "CuO",
                key : "copperOxide",
                name : "氧化铜",
                color : 0x352621,
                solutionColor : null,
                burningColor : 0xF4FE81,
                ingredient : ["copperOxide"], //成分
                meltingPoint : 1326
            },
            copperHydroxide : {
                id : "CuOH2",
                key : "copperHydroxide",
                name : "氢氧化铜",
                color : 0x0159FC,
                solutionColor : null,
                burningColor : null,
                ingredient : ["copperHydroxide"], //成分
                meltingPoint : 80
            }
        },

        liquids : {
            water : {
                id : "H2O",
                key : "water",
                name : "水",
                color : 0x5E89CB,
                ingredient : [], //成分
                percent : 0.0,
                ph : 7
            },
            sodiumHydroxide : {
                id : "NaOH",
                key : "sodiumHydroxide",
                name : "氢氧化钠",
                color : 0x5E89CB,
                ingredient : ["sodiumHydroxide"], //成分
                percent : 0.5,
                ph : 10
            },
            hydrochloricAcid : {
                id : "HCl",
                key : "hydrochloricAcid",
                name : "盐酸",
                color : 0x5E89CB,
                ingredient : ["hydrochloricAcid"], //成分
                percent : 0.4,
                ph : 4
            },
            phenolphthalein : {
                id : "C20H14O4",
                key : "phenolphthalein",
                name : "酚酞",
                color : 0x5E89CB,
                ingredient : ["phenolphthalein"], //成分
                percent : 0,
                ph : 0
            },
            sulfuricAcid : {
                id : "H2SO4",
                key : "sulfuricAcid",
                name : "硫酸",
                color : 0x5E89CB,
                ingredient : ["sulfuricAcid"],
                percent : 0.98,
                ph : 0
            },
            copperSulfate : {
                id : "CuSO4",
                key: "copperSulfate",
                name: "硫酸铜",
                color : 0x217BF3,
                ingredient: ["copperSulfate"],
                percent : 0.1,
                ph : 4
            }

        },

        gases : {
            hydrogen: {
                id: "H2",
                key: "hydrogen",
                name: "氢气",
                color : null,
                burningColor : 0x8DA9EA,
                ingredient: ["hydrogen"]
            }
        }
    };
        
    Chemist.Sounds = {
    
    };
    
    Chemist.Tools = {
        glassBar : null,
        match : null,
        phPaper : null,
        thermometer : null
    };
    
    Chemist.Tips = {
    
    };
    
    Chemist.Equations = {
    
    };
})(Chemist);
