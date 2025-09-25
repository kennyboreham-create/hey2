let tdElement = 0;
let tdElement2 = 0;
let trElement = 0;
let trElement2 = 0;
let parentId = 0;
let parentId2 =  0;
let points = 0;
let wordPoints = 0;
let rWordCheck = [];
let wordTemp = 0;



// change box to blue when clicked
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.container td');
    buttons.forEach(td => {
        td.addEventListener('click', handleClick);
    });
});

//Strike-through word when clicked in wordy class
const elementsy = document.querySelectorAll('.wordy');

// Iterate over the elements
elementsy.forEach(element => {
    //console.log(element);
    // Add event listeners or manipulate the elements as needed
    element.addEventListener('click', handleClick2);
});








const word = ["HOOK", "LUCK", "COOK", "TOOL","SOUP","TILT","WALL","HOPE","LATE","RACE","RICE","WALK","TALK","BONE","HOME"];
let wordCount =[];


for (var i = 0; i < 4; i++){
 // Create a random number. Add words and make sure they fit inside of box 

randommer();

}


for ( let z = 1; z < 57; z++){
    
    let box = "T" + z;
    let boxFull = document.getElementById("T" + z).innerHTML;
     
     if (isNaN(boxFull)){ 
        //window.alert(boxFull);
        let l = 1;


    }else{
            console.log(boxFull);
        document.getElementById(box).innerHTML = getRandomLetter();
    }

}

alert("Welcome To Acton Word Search \n\n1 - Click on letters of words when you find them \n2 - Click on full word at the left when completed \n3 - Continue until all words are found"  )

function randommer(){

            let funcsuccess = 1;
            let randomNumber = 0;
            let r2 = 0;
            let r3 = 0;
            let r4 = 0;

    
    
    while (funcsuccess < 2) {
        
        
        randomNum();

        // Get the <td> element
         tdElement = document.getElementById("T" + randomNumber);
         tdElement2 = document.getElementById("T" + r4);

        // Get the parent <tr> element
         trElement = tdElement.parentElement;
         trElement2 = tdElement2.parentElement;
         parentId = trElement.id;
         parentId2 = trElement2.id;


        if (parentId == parentId2){
        // Add the words to box
           
                funcsuccess = 5;
                addWords();
        
        }

    }
            
            function randomNum(){


                //Create random number
                let min = 1;
                let max = 52;
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                r2 = randomNumber + 1;
                r3 = randomNumber + 2;
                r4 = randomNumber + 3;
            }

            function randomNum2(){
                
                    let k = 1;
                    while (k < 2){
                      
                    //Create random number
                    let min = 0;
                    let max = 14;
                    randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
                 if (randomNumber2 == rWordCheck[0] || randomNumber2 == rWordCheck[1] || randomNumber2 == rWordCheck[2] ){
                        k = 1;
                    
                }else{

                    rWordCheck[i] = randomNumber2;
                    k = 5;
                    
                }
                }
            }

             function addWords() { 
                  

                 let y = 1;

        while (y < 3){

                    randomNum();

                    let spotCheck = document.getElementById("T" + randomNumber).innerHTML;
                    let spotCheck2 = document.getElementById("T" + r2).innerHTML;
                    let spotCheck3 = document.getElementById("T" + r3).innerHTML;
                    let spotCheck4 = document.getElementById("T" + r4).innerHTML;
                        
                  if (isNaN(spotCheck) || isNaN(spotCheck2) || isNaN(spotCheck3) || isNaN(spotCheck4)) {
                        
                    

                       
                    
                    y = 2;

                  }else{
                            
                          // window.alert("Hey");
                        tdElement = document.getElementById("T" + randomNumber);
                        tdElement2 = document.getElementById("T" + r4);
                         trElement = tdElement.parentElement;
                         trElement2 = tdElement2.parentElement;
                         parentId = trElement.id;
                         parentId2 = trElement2.id;

                         if (parentId == parentId2){

                            randomNum2(); 
                            wordTemp = i + 1;
                            document.getElementById("w" + wordTemp).innerHTML = word[randomNumber2];

                                   

                            let letters = word[randomNumber2].split("");         
                             document.getElementById("T" + randomNumber).innerHTML = letters[0];
                             document.getElementById("T" + r2).innerHTML = letters[1];
                             document.getElementById("T" + r3).innerHTML = letters[2];
                              document.getElementById("T" + r4).innerHTML = letters[3];

                                wordCount[i] = "T" + randomNumber;
                             y = 5;
                              
                            }

                   

                         }   

         }

    
   }

       
}


function getRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters.charAt(Math.floor(Math.random() * letters.length));
}

//console.log(getRandomLetter());


   function handleClick() {
   //console.log('Button clicked');

    document.getElementById(this.id).classList.add("Open");
    //console.log('Element clicked:', this);
        if (this.id === wordCount[0] || this.id === wordCount[1] || this.id === wordCount[2] || this.id === wordCount[3]){
            document.getElementById(this.id).classList.remove("Open");
            document.getElementById(this.id).classList.add("Closed");
            wordPoints++; 

        }
}

function handleClick2() {

   
         var elem = document.getElementById(this.id);
            if (elem.classList.contains('sthrough')) {
                alert('You have already clicked this word');
            } else {
               document.getElementById(this.id).classList.add("sthrough");
               points++;
               if (points > 3 && wordPoints > 3){
               showAlert();
                //alert ("Congrats, you have won!!!")
                
               }
            }

}

function celebrate() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function showAlert() {
    document.getElementById('customAlert').style.display = 'block';
}

function closeAlert() {
    location.reload();
    document.getElementById('customAlert').style.display = 'none';
}


