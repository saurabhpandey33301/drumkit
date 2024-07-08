var len = document.querySelectorAll(".drum").length;

for(var i=0;i<len;i++){
   
   //for button pressing.....

   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
         //alert("i got clicked");
         
         let andar = this.innerHTML;
         MakeSound(andar);
         buttonAnimation(andar);
         
   } );

   //for key pressing..

   document.addEventListener("keypress", function(event){
      MakeSound(event.key);
      buttonAnimation(event.key);
   });

}

// switch statement function for making sound.....

function MakeSound(key){
   switch (key){
      case "w":
         var drum1 = new Audio("w.mp3");
         drum1.play();
         break;
      case "a":
         var drum2 = new Audio("a.mp3");
         drum2.play();
         break;
      case "s":
         var drum3 = new Audio("s.mp3");
         drum3.play();
         break;
      case "d":
         var drum4 = new Audio("d.mp3");
         drum4.play();
         break;
      case "j":
         var drum5 = new Audio("j.mp3");
         drum5.play();
         break;
      case "k":
         var drum6 = new Audio("k.mp3");
         drum6.play();
         break;
      case "l":
         var drum7 = new Audio("l.mp3");
         drum7.play();
         break;
   
      default: console.log(andar);
         break;
   }
}

//for animation... 

function buttonAnimation(key){
   var activeBtn = document.querySelector("."+key);
   activeBtn.classList.add("pressed");
   setTimeout( function () {
      activeBtn.classList.remove("pressed");
   },100);
   
}





