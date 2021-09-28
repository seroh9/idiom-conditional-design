function random_text_size(min, max){
  min = Math.ceil(10);
  max = Math.floor(25);
  var txt = Math.floor(Math.random() * (max - min) + min); 
 
  
var txtSize= txt + "px";
  console.log(txtSize);
  document.getElementById('one').style.fontSize = txtSize;
}
random_text_size();

function random_text_size2(min, max){
  min = Math.ceil(10);
  max = Math.floor(25);
  var txt = Math.floor(Math.random() * (max - min) + min); 
var txtSize= txt + "px";
  console.log(txtSize);
  document.getElementById('two').style.fontSize = txtSize;
}
random_text_size2();

function random_text_size3(min, max){
  min = Math.ceil(10);
  max = Math.floor(25);
  var txt = Math.floor(Math.random() * (max - min) + min); 
var txtSize= txt + "px";
  console.log(txtSize);
  document.getElementById('three').style.fontSize = txtSize;
}
random_text_size3();

function random_text_size4(min, max){
  min = Math.ceil(10);
  max = Math.floor(25);
  var txt = Math.floor(Math.random() * (max - min) + min); 
var txtSize= txt + "px";
  console.log(txtSize);
  document.getElementById('four').style.fontSize = txtSize;
}
random_text_size4();

function random_text_size5(min, max){
  min = Math.ceil(10);
  max = Math.floor(25);
  var txt = Math.floor(Math.random() * (max - min) + min); 
var txtSize= txt + "px";
  console.log(txtSize);
  document.getElementById('five').style.fontSize = txtSize;
}
random_text_size5();

function numberRandomizerX1(min,max){
  min = Math.ceil(0);
  max = Math.floor(1300);
     var xValue = Math.floor((Math.random() * (max - min) + min)); 
     var xValueTest= xValue + "px";
     console.log(xValueTest);
  document.getElementById("one").style.left = xValueTest;
  }
  numberRandomizerX1();

function numberRandomizerX2(min,max){
  min = Math.ceil(300);
  max = Math.floor(500);
      var xValue = Math.floor((Math.random() * (max - min) + min)); 
      var xValueTest= xValue + "px";
      console.log(xValueTest);
  document.getElementById("two").style.left = xValueTest;
  }
  numberRandomizerX2();

  function numberRandomizerX3(min,max){
    min = Math.ceil(310);
    max = Math.floor(1000);
        var xValue = Math.floor((Math.random() * (max - min) + min)); 
        var xValueTest= xValue + "px";
        console.log(xValueTest);
    document.getElementById("three").style.left = xValueTest;
    }
    numberRandomizerX3();

    function numberRandomizerX4(min,max){
      min = Math.ceil(210);
      max = Math.floor(800);
          var xValue = Math.floor((Math.random() * (max - min) + min)); 
          var xValueTest= xValue + "px";
          console.log(xValueTest);
      document.getElementById("four").style.left = xValueTest;
      }
      numberRandomizerX4();

      function numberRandomizerX5(min,max){
        min = Math.ceil(10);
        max = Math.floor(1000);
            var xValue = Math.floor((Math.random() * (max - min) + min)); 
            var xValueTest= xValue + "px";
            console.log(xValueTest);
        document.getElementById("five").style.left = xValueTest;
        }
        numberRandomizerX5();

        function numberRandomizerY1(min,max){
          min = Math.ceil(0);
          max = Math.floor(200);
              var yValue = Math.floor((Math.random() * (max - min) + min)); 
              var yValueTest= yValue + "px";
              console.log(yValueTest);
          document.getElementById("one").style.top = yValueTest;
          }
          numberRandomizerY1();

          function numberRandomizerY2(min,max){
            min = Math.ceil(210);
            max = Math.floor(400);
                var yValue = Math.floor((Math.random() * (max - min) + min)); 
                var yValueTest= yValue + "px";
                console.log(yValueTest);
            document.getElementById("two").style.top = yValueTest;
            }
            numberRandomizerY2();

            function numberRandomizerY3(min,max){
              min = Math.ceil(410);
              max = Math.floor(600);
                  var yValue = Math.floor((Math.random() * (max - min) + min)); 
                  var yValueTest= yValue + "px";
                  console.log(yValueTest);
              document.getElementById("three").style.top = yValueTest;
              }
              numberRandomizerY3();

              function numberRandomizerY4(min,max){
                min = Math.ceil(110);
                max = Math.floor(500);
                    var yValue = Math.floor((Math.random() * (max - min) + min)); 
                    var yValueTest= yValue + "px";
                    console.log(yValueTest);
                document.getElementById("four").style.top = yValueTest;
                }
                numberRandomizerY4();

                function numberRandomizerY5(min,max){
                  min = Math.ceil(200);
                  max = Math.floor(300);
                      var yValue = Math.floor((Math.random() * (max - min) + min)); 
                      var yValueTest= yValue + "px";
                      console.log(yValueTest);
                  document.getElementById("five").style.top = yValueTest;
                  }
                  numberRandomizerY5();



                  // function random_text_color() {
                  //   var x = Math.floor(Math.random() * 256);
                  //   var y = Math.floor(Math.random() * 256);
                  //   var z = Math.floor(Math.random() * 256);
                  //   var txtColor = "rgb(" + x + "," + y + "," + z + ")";
                  //   console.log(txtColor);
                  
                   
                  //   // bless is the id of the div with text
                  //   document.getElementById('button').style.color = txtColor; 
                  //   }
                  
                  // random_text_color();