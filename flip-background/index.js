Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}


//generates a random color, uses concept of closure
function generateRandomColor(){

    // generates color in format rgb([0-256], [0-256], [0-256]), eg rbg(10,20,200)
    function randomRGB(){
        var color = "rgb("
        color+=Math.floor(Math.random() * 257) + ",";
        color+=Math.floor(Math.random() * 257) + ",";
        color+=Math.floor(Math.random() * 257) + ")";
        return color;
    }
    
    // generates color in format #[0-F][0-F][0-F][0-F][0-F][0-F]), eg #A29FD6
    function randomHex(){
        var color = "#";
        
        // converts number between 10-15 to their hex format A-F, eg. 12 is C
        function convertNumberToHex(number){
            const hexArr = ['A','B','C','D','E','F'];   
            if(number>=10)
                return hexArr[number-10]
            return number;    
        }

        for (i of new Array(6)){
            color+=convertNumberToHex(Math.floor(Math.random() * 16))
        }
        
        return color;
    
    }
    
    // generates color from array list randomly
    function randomColor(){
        return colorNames.random();
    }

    function show(){
        switch([1,2,3].random()){
            case 1:
                return randomRGB();
            case 2:
                return randomHex();
            default:
                return randomColor();
        }
    }
    

    return show()
}


document.addEventListener('DOMContentLoaded', (event) => {
    
    //whem button is clicked
    document.getElementById("changeBgButton").onclick = function() {
        let newBg = generateRandomColor();
        document.body.style.backgroundColor = newBg;
        document.getElementById("bgText").innerHTML = newBg
    };
    
})


const colorNames = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];