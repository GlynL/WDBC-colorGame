//hello - i'm changin shit

// global vars
var newColors = document.querySelector("#newColors");
//random color to guess
var colorCorrect = 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';

// ---------- SETUP COLOR TILES ----------

function setupTiles(){
    //select all color tiles
    var colors = document.querySelectorAll(".color");
    //select random tile
    var random = Math.round(Math.random() * 6);
    //heading for text change
    var colorHeading = document.querySelector("#heading h1");

    //for setting a random tile to guessing color
    for(let i =0; i<colors.length; i++){
        if(i === random){ 
            colors[i].style.background = colorCorrect;
            colorHeading.textContent = colorCorrect;
            colors[i].style.visibility = "visible";
        }

        // change all other tiles to random color
        else{
            colors[i].style.background ='rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';
            colors[i].style.visibility = "visible";
        }
        
    }



}


//run tile setup for initial setup
setupTiles();

//change all colors
newColors.addEventListener("click", setupTiles);

   

// ---------- COLOR TILES CLICKED -----------

//empty array for storing each color tile
var colorTiles = [];

//text for result
var attemptInfo = document.querySelector("#attemptInfo");


//function run when tile clicked
function clicked(){
    // runs if correct tile chosen
    if(this.style.background === colorCorrect){
        attemptInfo.textContent = "You Win!";
        setupTiles();
    }

    // runs if wrong tile chosen
    else{
        attemptInfo.textContent = "Try Again";
        this.style.visibility = "hidden";
    }
}

//iterating over each tile
for(let i =0; i <6; i++){
    // var created for selecting the tile
    let tempColor = "#color" + i;
    // select tile and save to array
    colorTiles[i] = document.querySelector(tempColor);
    // add listener for click to tile
    colorTiles[i].addEventListener("click", clicked);
}



// ------ EASY OR HARD DIFFICULTIES ----------

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var hideEasy = document.querySelector("#hideEasy");

// listneers for buttons
easy.addEventListener("click", difficulty);
hard.addEventListener("click", difficulty);

// 
function difficulty(){
    // toggle button on/off
    easy.classList.toggle("active");
    hard.classList.toggle("active");    

    //check if easy or hard layout and set
    if(hideEasy.style.visibility === "visible" || hideEasy.style.visibility === ""){
        hideEasy.style.visibility = "hidden";
    }

    else{
        hideEasy.style.visibility = "visible";
    }
}


// write winning code for setting all visibilites to visible
