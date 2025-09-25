
let letter = "";
let code = 0;
const word = ["HOOK", "LUCK", "COOK", "TOOL","SOUP","TILT","WALL","HOPE","LATE","RACE","RICE","WALK","TALK","BONE","HOME"];
let word1 = "";
let wordSplit = [];
let keyPress = 0;
let compare = 0;
let i = 0;
let points = 0;
let gameON = 0;

//console.log(gameON);
//if (gameON < 1){
document.addEventListener('keyup', function(event) {
  
    switch(event.key) {
      

      case 'a':
        document.getElementById("1").style.backgroundColor = "#f0f0f0"; // Change color to a different shade
        break;
      case 'b':
        document.getElementById("2").style.backgroundColor = "#f0f0f0"; // Change color to another shade
        break;
      case 'c':
        document.getElementById("3").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'd':
        document.getElementById("4").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'e':
        document.getElementById("5").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'f':
        document.getElementById("6").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'g':
        document.getElementById("7").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'h':
        document.getElementById("8").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'i':
        document.getElementById("9").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'j':
        document.getElementById("10").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'k':
        document.getElementById("11").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'l':
        document.getElementById("12").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'm':
        document.getElementById("13").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'n':
        document.getElementById("14").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'o':
        document.getElementById("15").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'p':
        document.getElementById("16").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'q':
        document.getElementById("17").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'r':
        document.getElementById("18").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 's':
        document.getElementById("19").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 't':
        document.getElementById("20").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'u':
        document.getElementById("21").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'v':
        document.getElementById("22").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'w':
        document.getElementById("23").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'x':
        document.getElementById("24").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'y':
        document.getElementById("25").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      case 'z':
        document.getElementById("26").style.backgroundColor = "#f0f0f0"; // Change color to yet another shade
        break;
      // Add more cases for other keys
     
    
 }
});



document.addEventListener('keydown', function(event) {
    switch(event.key) {
      

      case 'a':
        document.getElementById("1").style.backgroundColor = "DimGray"; // Change color to a different shade
        letter = document.getElementById("1").innerHTML;
        keyPress = 1;
         
        break;
      case 'b':
        document.getElementById("2").style.backgroundColor = "DimGray"; // Change color to another shade
        letter = document.getElementById("2").innerHTML;
        keyPress = 2;
         
        break;
      case 'c':
        document.getElementById("3").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("3").innerHTML;
        keyPress = 3;
        
        break;
      case 'd':
        document.getElementById("4").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("4").innerHTML;
        keyPress = 4;
        
        break;
      case 'e':
        document.getElementById("5").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("5").innerHTML;
        keyPress = 5;
        
        break;
      case 'f':
        document.getElementById("6").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("6").innerHTML;
        keyPress = 6;
        
        break;
      case 'g':
        document.getElementById("7").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("7").innerHTML;
        keyPress = 7;
        
        break;
      case 'h':
        document.getElementById("8").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("8").innerHTML;
        keyPress = 8;
        
        break;
      case 'i':
        document.getElementById("9").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("9").innerHTML;
        keyPress = 9;
        
        break;
      case 'j':
        document.getElementById("10").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("10").innerHTML;
        keyPress = 10;
        
        break;
      case 'k':
        document.getElementById("11").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("11").innerHTML;
        keyPress = 11;
        
        break;
      case 'l':
        document.getElementById("12").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("12").innerHTML;
        keyPress = 12;
        
        break;
      case 'm':
        document.getElementById("13").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("13").innerHTML;
        keyPress = 13;
        
        break;
      case 'n':
        document.getElementById("14").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("14").innerHTML;
        keyPress = 14;
        

        break;
      case 'o':
        document.getElementById("15").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("15").innerHTML;
        keyPress = 15;
        
        break;
      case 'p':
        document.getElementById("16").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("16").innerHTML;
        keyPress = 16;
        
        break;
      case 'q':
        document.getElementById("17").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("17").innerHTML;
        keyPress = 17;
        
        break;
      case 'r':
        document.getElementById("18").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("18").innerHTML;
        keyPress = 18;
        
        break;
      case 's':
        document.getElementById("19").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("19").innerHTML;
        keyPress = 19;
        
        break;
      case 't':
        document.getElementById("20").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("20").innerHTML;
        keyPress = 20;
        
        break;
      case 'u':
        document.getElementById("21").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("21").innerHTML;
        keyPress = 21;
        
        break;
      case 'v':
        document.getElementById("22").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("22").innerHTML;
        keyPress = 22;
        
        break;
      case 'w':
        document.getElementById("23").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("23").innerHTML;
        keyPress = 23;
        
        break;
      case 'x':
        document.getElementById("24").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("24").innerHTML;
        keyPress = 24;
        
        break;
      case 'y':
        document.getElementById("25").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("25").innerHTML;
        keyPress = 25;
        
        break;
      case 'z':
        document.getElementById("26").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("26").innerHTML;
        keyPress = 26;
        
        break;
     
    }

 if (gameON < 2){

  let compare = wordSplit[i].charCodeAt(0) - 64;


    if (keyPress == compare){

     //document.getElementById().style.color = 'red';
      i ++;
      code ++;
      

    }

    if (i == 4){

        i = 0;
        points ++;
        level1();

    }

    
     switch(code){
    
      case 0:
        document.getElementById("gamebox").innerHTML = wordSplit[0] + wordSplit[1] + wordSplit[2] + wordSplit[3] ;
        break;
      case 1:
        document.getElementById("gamebox").innerHTML = `<span style="color: red;">${wordSplit[0]}</span>` + wordSplit[1] + wordSplit[2] + wordSplit[3] ;
        break;
      case 2:    
        document.getElementById("gamebox").innerHTML = `<span style="color: red;">${wordSplit[0] + wordSplit[1]}</span>` + wordSplit[2] + wordSplit[3] ;
        break;
      case 3:
        document.getElementById("gamebox").innerHTML = `<span style="color: red;">${wordSplit[0] + wordSplit[1] + wordSplit[2]}</span>`  + wordSplit[3] ;
        break;

     }

}
});










function level1() {
    code = 0;
  randomNum();

   word1 = word[randomNumber]; 

    wordSplit = word1.split(""); 
    document.getElementById("gamebox").innerHTML = wordSplit[0] + wordSplit[1] + wordSplit[2] + wordSplit[3] ;
     



}

function level2(){

    
}

 function randomNum(){


                //Create random number
                let min = 0;
                let max = 14;
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                
            }



function handleClick() {
   //console.log('Button clicked');

   // document.getElementById(this.id).classList.remove("key");
   //  document.getElementById(this.id).classList.add(".pressBack");
   //  document.getElementById(this.id).classList.add(".key");
    console.log('Element clicked:', this);
    document.getElementById(this.id).style.backgroundColor = "#ff5733";
      //alert()  
           
        
}

function main1() {

    gameON = 0;
    points = 0;
    alert("Keep your left finger on the F key \n Keep your right finger on the j key \n Try and keep your eyes on the screen \n Type as many words as you can");
    startTimer();
    level1();

 function startTimer() {
            let timeLeft = 10; // Initial countdown time in seconds
            const timerElement = document.getElementById('timer');

            const intervalId = setInterval(() => {
                if (timeLeft > 0) {
                    timerElement.innerText = ` ${timeLeft} seconds` + `\nPoints: ` + points;
                    timeLeft--;
                } else {
                    timerElement.innerHTML = `Game Over! ` + `<span style="color: green;"><br><br>Total Points:` + points + `</span> `;
                    gameON = 2;

                    clearInterval(intervalId);
                    document.getElementById("gamebox").innerHTML = `<button id="play">Play Again</button>` + `\n` + `<button id="celly">Celebrate</button>`;


                    const button = document.getElementById('play');
                    const cell = document.getElementById('celly');

           // Add a click event listener to the button
            button.addEventListener('click', function() {
                main1();
            });

            // Celebrate
            cell.addEventListener('click', function() {
                celebrate();
            });
                    
                }
            }, 1000); // Update every 1000 milliseconds (1 second)


              


        }}

        function celebrate(){

          confetti({

            
        particleCount: 150,
        spread: 120,
        origin: { y: 0.8 }
    });

}

          