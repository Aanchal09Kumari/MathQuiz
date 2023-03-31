var play1Name=localStorage.getItem("play1");
var play2name=localStorage.getItem("play2");
var play1score=0;
var play2score=0;
document.getElementById("play1").innerHTML=play1Name;
document.getElementById("play2").innerHTML=play2name;
document.getElementById("pscore1").innerHTML=play1score;
document.getElementById("pscore2").innerHTML=play2score;
var i=document.getElementById("ques_0").innerHTML="Question Turn - "+play1Name;
var d=document.getElementById("ans").innerHTML="Answer Turn - "+play2name;
console.log(i);
console.log(d);
var questurn="player1";
var ansturn="player2";


function Bac(){
  window.location="index.html";
}

 function sen(){

   n1=document.getElementById("no1").value;
   console.log(n1);

   n2=document.getElementById("no2").value;
   console.log(n2);

   var Q=n1+" x "+n2;
   console.log(Q);
   var input="<br>Answer : <input type='number' id='checkbox'>";
   console.log(input);
   var chek="<br><button onclick='check()' class='btn btn-primary'>Check</button>";
   console.log(chek);
   var di=Q+input+chek;
   console.log(di);
   document.getElementById("out").innerHTML=di;
   
   
 }

 function check(){
    var ans=document.getElementById("checkbox").value;
    console.log(ans);
    var answer=n1*n2;
    if(ans == answer){
      if(ansturn=="player1"){
      play1score=play1score+1;
      document.getElementById("pscore1").innerHTML=play1score;  
      }
      else{
      play2score=play2score+1;
      document.getElementById("pscore2").innerHTML=play2score;
      }

    }
    if(questurn=="player1"){
     questurn="player2";
     document.getElementById("ques_0").innerHTML="Question Turn - "+play2name;
    }
   else{
   questurn="player1";
   document.getElementById("ques_0").innerHTML="Question Turn - "+play1Name;

   }
   if(ansturn=="player1"){
   ansturn="player2";
   document.getElementById("ans").innerHTML="Answer Turn - "+play2name;
   }
   else{
    ansturn="player1";
   document.getElementById("ans").innerHTML="Answer Turn - "+play1Name;
   }
    document.getElementById("out").innerHTML="";
  }
