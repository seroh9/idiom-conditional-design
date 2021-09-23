function random_text_size(min, max){
  min = Math.ceil(20);
  max = Math.floor(60);
  var txt = Math.floor(Math.random() * (max - min) + min); 
 
  
var txtSize= txt + "px";
  console.log(txtSize);
  document.getElementById('set1').style.fontSize = txtSize;
  document.getElementById('set2').style.fontSize = txtSize;
  document.getElementById('set3').style.fontSize = txtSize;
  // document.getElementById('set4').style.fontSize = txtSize;
  // document.getElementById('set5').style.fontSize = txtSize;
}

random_text_size();

// function random_text_size2(min, max){
//   min = Math.ceil(0);
//   max = Math.floor(90);
//   var txt = Math.floor(Math.random() * (max - min) + min); 
 
  
// var txtSize= txt + "px";
//   console.log(txtSize);
//   document.getElementById('set6').style.fontSize = txtSize;
//   document.getElementById('set7').style.fontSize = txtSize;
//   document.getElementById('set8').style.fontSize = txtSize;
//   document.getElementById('set9').style.fontSize = txtSize;
//   document.getElementById('set10').style.fontSize = txtSize;
// }

// random_text_size2();



function numberRandomizerX1(min,max){
  min = Math.ceil(0);
  max = Math.floor(300);
     var xValue = Math.floor((Math.random() * (max - min) + min)); 
     var xValueTest= xValue + "px";
     console.log(xValueTest);
  document.getElementById("set1").style.left = xValueTest;
}
numberRandomizerX1();

function numberRandomizerX2(min,max){
  min = Math.ceil(300);
  max = Math.floor(700);
     var xValue = Math.floor((Math.random() * (max - min) + min)); 
     var xValueTest= xValue + "px";
     console.log(xValueTest);
  document.getElementById("set2").style.left = xValueTest;
}
numberRandomizerX2();

function numberRandomizerX3(min,max){
  min = Math.ceil(600);
  max = Math.floor(900);
     var xValue = Math.floor((Math.random() * (max - min) + min)); 
     var xValueTest= xValue + "px";
     console.log(xValueTest);
  document.getElementById("set3").style.left = xValueTest;
}
numberRandomizerX3();

function numberRandomizerY1(min,max){
  min = Math.ceil(0);
  max = Math.floor(300);
     var yValue = Math.floor((Math.random() * (max - min) + min)); 
     var yValueTest= yValue + "px";
     console.log(yValueTest);
  document.getElementById("set1").style.top = yValueTest;
}
numberRandomizerY1();

function numberRandomizerY2(min,max){
  min = Math.ceil(300);
  max = Math.floor(500);
     var yValue = Math.floor((Math.random() * (max - min) + min)); 
     var yValueTest= yValue + "px";
     console.log(yValueTest);
  document.getElementById("set2").style.top = yValueTest;
}
numberRandomizerY2();

function numberRandomizerY3(min,max){
  min = Math.ceil(500);
  max = Math.floor(800);
     var yValue = Math.floor((Math.random() * (max - min) + min)); 
     var yValueTest= yValue + "px";
     console.log(yValueTest);
  document.getElementById("set2").style.top = yValueTest;
}
numberRandomizerY3();