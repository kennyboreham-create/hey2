
let letter = "";
let code = 0;
const word = ["HOOK", "LUCK", "COOK", "TOOL","SOUP","TILT","WALL","HOPE","LATE","RACE","RICE","WALK","TALK","BONE","HOME"];



document.addEventListener('keydown', function(event) {
    switch(event.key) {
      

      case 'a':
        document.getElementById("1").style.backgroundColor = "DimGray"; // Change color to a different shade
        letter = document.getElementById("1").innerHTML;
        level1();
        break;
      case 'b':
        document.getElementById("2").style.backgroundColor = "DimGray"; // Change color to another shade
        letter = document.getElementById("2").innerHTML;
        level1();
        break;
      case 'c':
        document.getElementById("3").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("3").innerHTML;
        level1();
        break;
      case 'd':
        document.getElementById("4").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("4").innerHTML;
        level1();
        break;
      case 'e':
        document.getElementById("5").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("5").innerHTML;
        level1();
        break;
      case 'f':
        document.getElementById("6").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("6").innerHTML;
        level1();
        break;
      case 'g':
        document.getElementById("7").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("7").innerHTML;
        level1();
        break;
      case 'h':
        document.getElementById("8").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("8").innerHTML;
        level1();
        break;
      case 'i':
        document.getElementById("9").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("9").innerHTML;
        level1();
        break;
      case 'j':
        document.getElementById("10").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("10").innerHTML;
        level1();
        break;
      case 'k':
        document.getElementById("11").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("11").innerHTML;
        level1();
        break;
      case 'l':
        document.getElementById("12").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("12").innerHTML;
        level1();
        break;
      case 'm':
        document.getElementById("13").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("13").innerHTML;
        level1();
        break;
      case 'n':
        document.getElementById("14").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("14").innerHTML;
        level1();

        break;
      case 'o':
        document.getElementById("15").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("15").innerHTML;
        level1();
        break;
      case 'p':
        document.getElementById("16").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("16").innerHTML;
        level1();
        break;
      case 'q':
        document.getElementById("17").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("17").innerHTML;
        level1();
        break;
      case 'r':
        document.getElementById("18").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("18").innerHTML;
        level1();
        break;
      case 's':
        document.getElementById("19").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("19").innerHTML;
        level1();
        break;
      case 't':
        document.getElementById("20").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("20").innerHTML;
        level1();
        break;
      case 'u':
        document.getElementById("21").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("21").innerHTML;
        level1();
        break;
      case 'v':
        document.getElementById("22").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("22").innerHTML;
        level1();
        break;
      case 'w':
        document.getElementById("23").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("23").innerHTML;
        level1();
        break;
      case 'x':
        document.getElementById("24").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("24").innerHTML;
        level1();
        break;
      case 'y':
        document.getElementById("25").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("25").innerHTML;
        level1();
        break;
      case 'z':
        document.getElementById("26").style.backgroundColor = "DimGray"; // Change color to yet another shade
        letter = document.getElementById("26").innerHTML;
        level1();
        break;
     
    
 }
});

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



function level1() {
    

    
    
    //let letter = document.getElementById(this.id).innerHTML;


     document.getElementById("gamebox").innerHTML = letter;
     //console.log(letter);



}

function level2(){

    
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