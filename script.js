var player1 = 'X';
var player2 = 'O';
var player = "first";
var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
var point1 = 0;
var point2 = 0;
var z;


function move(ele, size){
  var id = ele.id;


  if (document.getElementById(id).innerHTML == player1 || document.getElementById(id).innerHTML == player2){
    return;
  }else{
  if (player == "first"){
    document.getElementById(id).innerHTML = player1;
    player = "second";


}else{
   if (player == "second"){
     document.getElementById(id).innerHTML = player2;
     player = "first";

   }
}}

  var isPl1Winner = check(3, player1);
  var isPl2Winner = check(3, player2);
  if (isPl1Winner == true){
    window.alert('Player1 wins');
    point1++;
    document.getElementById('point1').innerHTML = point1;
    for (var m = 0; m < size; m++){
      for (var n = 0; n < size; n++){
        z = 'r' + m + 'c' + n;
        document.getElementById(z).innerHTML = "";
        document.getElementById(z).style.color = 'white';

      }
    }
    return;
  }
  if (isPl2Winner == true){
    window.alert('Player2 wins');
    point2++;
    document.getElementById('point2').innerHTML = point2;
    for (var m = 0; m < size; m++){
      for (var n = 0; n < size; n++){
        z = 'r' + m + 'c' + n;
        document.getElementById(z).innerHTML = "";
        document.getElementById(z).style.color = 'white';

      }
    }
    return;
  }


  if (isFilled(3) == true){
    window.alert('draw');
    document.getElementById('point1').innerHTML = point1;
    document.getElementById('point2').innerHTML = point2;
    for (var m = 0; m < size; m++){
      for (var n = 0; n < size; n++){
        z = 'r' + m + 'c' + n;
        document.getElementById(z).innerHTML = "";
        document.getElementById(z).style.color = 'white';
      }
    }
    return;
  }


}

function check(size, pl){
  var p;
  var isWinner = false;
  var col;
  var row;
  var diagSecond = '';
  var diagFirst = '';
  var cols = new Array(size);
  var rows = new Array(size);
  for (var i = 0; i < size; i++){
    cols[i] = '';
    rows[i] = '';
    for (var j = 0; j < size; j++){
      p = 'r' + i + 'c' + j;
      board[i][j] = document.getElementById(p).innerHTML;
    }
  }

  for (var a = 0; a < size; a++){
    for (var b = 0; b < size; b++){
      rows[a] += board[a][b];
      cols[b] += board[a][b];
      if ((a + b) == size - 1){
        diagSecond += board[a][b];
      }

      if (a == b){
        diagFirst += board[a][b];
      }
    }
  }



  if (diagFirst == pl + pl + pl){
    isWinner = true;
    document.getElementById('r0c0').style.color = 'black';
    document.getElementById('r1c1').style.color = 'black';
    document.getElementById('r2c2').style.color = 'black';
  }else{
    if (diagSecond == pl + pl + pl){
        isWinner = true;
        document.getElementById('r0c2').style.color = 'black';
        document.getElementById('r1c1').style.color = 'black';
        document.getElementById('r2c0').style.color = 'black';
    }
    else{
      for (var l = 0; l < size; l++){
        if (rows[l] == pl + pl + pl){
          isWinner = true;
          var identifier = 'r' + l + 'c';
          document.getElementById(identifier + '0').style.color = 'black';
          document.getElementById(identifier + '1').style.color = 'black';
          document.getElementById(identifier + '2').style.color = 'black';
        }else{
          if (cols[l] == pl + pl + pl){
            isWinner = true;
            var identifier = 'c' + l;
            document.getElementById('r' + 0 + identifier).style.color = 'black';
            document.getElementById('r' + 1 + identifier).style.color = 'black';
            document.getElementById('r' + 2 + identifier).style.color = 'black';
          }
        }
      }
    }
  }

  return isWinner;
}

function notClickable (){
  return false;
}

function isFilled(size){
  var p;
  var result = true;
  for (var i = 0; i < size; i++){
    for (var j = 0; j < size; j++){
      p = 'r' + i + 'c' + j;

      if (document.getElementById(p).innerHTML != "X" && document.getElementById(p).innerHTML != "O"){

        result = false;
      }
    }
  }

  return result;
}
