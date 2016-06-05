var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
var p;
var l;
var pc = 'O';
var player = 'X';
var pointpc = 0;
var pointplayer = 0;
var firstPC = false;

/*if (firstPC == true){
  instantiate(3);
  movePC(3);
}*/

function instantiate(size){

  for (var i = 0; i < size; i++){
    for (var j = 0; j < size; j++){
      p = 'r' + i + 'c' + j;
      board[i][j] = document.getElementById(p).innerHTML;
    }
  }
}

function step(ele, size){
  var id = ele.id;
  instantiate(size);

  if (document.getElementById(id).innerHTML == player || document.getElementById(id).innerHTML == pc){
    return;
  }else{
    document.getElementById(id).innerHTML = player;
    if (check(3, player) == false){
      movePC(size);
    }
  }///checkpoint
  var isPCWinner = check(3, pc);
  var isPlayerWinner = check(3, player);
  if (isPCWinner == true){
    firstPC = !firstPC;
    window.alert('PC wins');
    pointpc++;
    document.getElementById('pointpc').innerHTML = pointpc;
    for (var m = 0; m < size; m++){
      for (var n = 0; n < size; n++){
        z = 'r' + m + 'c' + n;
        document.getElementById(z).innerHTML = "";

      }
    }
    if (firstPC == true){
      movePC(3);
    }
    return;
  }

  if (isPlayerWinner == true){
    firstPC = !firstPC;
    window.alert('Player wins');
    pointplayer++;
    document.getElementById('pointplayer').innerHTML = pointplayer;
    for (var m = 0; m < size; m++){
      for (var n = 0; n < size; n++){
        z = 'r' + m + 'c' + n;
        document.getElementById(z).innerHTML = "";

      }
    }

    if (firstPC == true){
      movePC(3);
    }
    return;
  }

  if (isFilled(3) == true){
    firstPC = !firstPC;
    window.alert('draw');
    document.getElementById('pointplayer').innerHTML = pointplayer;
    document.getElementById('pointpc').innerHTML = pointpc;
    for (var m = 0; m < size; m++){
      for (var n = 0; n < size; n++){
        z = 'r' + m + 'c' + n;
        document.getElementById(z).innerHTML = "";

      }
    }
    if (firstPC == true){
      movePC(3);
    }
    return;
  }

}


function movePC(size){
     var diagFirst = '';
     var diagSecond = '';
     var cols = new Array(size);
     var rows = new Array(size);
     instantiate(size);
     for (var k = 0; k < size; k++){
       cols[k] = '';
       rows[k] = '';
     }

     for (var a = 0; a < size; a++){
       for (var b = 0; b < size; b++){
         rows[a] += board[a][b].trim();
         cols[b] += board[a][b].trim();
         if ((a + b) == (size - 1)){
           diagSecond += board[a][b].trim();
         }

         if (a == b){
           diagFirst += board[a][b].trim();
         }
       }


     }


     //console.log(rows[2]);

     for (var q = 0; q < size; q++){
       if (diagSecond.trim() == pc + pc){
         console.log('PcDiagSecond');
         for (var z = 0; z < size; z++){
           for (var y = 0; y < size; y++){
             if ((z + y) == (size - 1)){
               if (board[z][y] != "X" && board[z][y] != "O"){
                 l = 'r' + z + 'c' + y;
                 document.getElementById(l).innerHTML = pc;
                 return;
               }
             }
           }
         }

       }else{

       if (diagFirst.trim() == pc + pc){
         console.log('PcDiagFirst');
         for (var z = 0; z < size; z++){
           for (var y = 0; y < size; y++){
             if (z == y){
               if (board[z][y] != "X" && board[z][y] != "O"){
                 l = 'r' + z + 'c' + y;
                 document.getElementById(l).innerHTML = pc;
                 return;
               }
             }
           }
         }
       }else{

       if (cols[q].trim() == pc + pc){
         console.log('PcCols');
         for (var z = 0; z < size; z++){
           if (board[z][q] != "X" && board[z][q] != "O"){
             l = 'r' + z + 'c' + q;
             document.getElementById(l).innerHTML = pc;
             return;
           }
         }
       }else{

       if (rows[q].trim() == pc + pc){

         console.log('PcRows');
         for (var z = 0; z < size; z++){
           if (board[q][z] != "X" && board[q][z] != "O"){
             l = 'r' + q + 'c' + z;
             document.getElementById(l).innerHTML = pc;
            return;
           }
         }
       }}}}}

     for (var q = 0; q < size; q++){

       if (rows[q].trim() == player + player){
         console.log('PlayerRows');
         for (var z = 0; z < size; z++){
           if (board[q][z] != "X" && board[q][z] != "O"){
             l = 'r' + q + 'c' + z;
             document.getElementById(l).innerHTML = pc;
             return;
           }
         }
       } else{

       if (cols[q].trim() == player + player){
         console.log('PlayerCols');
         for (var z = 0; z < size; z++){
           if (board[z][q] != "X" && board[z][q] != "O"){
             l = 'r' + z + 'c' + q;
             document.getElementById(l).innerHTML = pc;
             return;
           }
         }
       }else{


       if (diagFirst.trim() == player + player){
         console.log('PlayerDiagFirst');
         for (var z = 0; z < size; z++){
           for (var y = 0; y < size; y++){
             if (z == y){
               if (board[z][y] != "X" && board[z][y] != "O"){
                 l = 'r' + z + 'c' + y;
                 document.getElementById(l).innerHTML = pc;
                 return;
               }
             }
           }
         }
       }else{

       if (diagSecond.trim() == player + player){
         console.log('PlayerDiagSecond');
         for (var z = 0; z < size; z++){
           for (var y = 0; y < size; y++){
             if ((z + y) == (size - 1)){
               if (board[z][y] != "X" && board[z][y] != "O"){
                 l = 'r' + z + 'c' + y;
                 document.getElementById(l).innerHTML = pc;
                 return;
               }
             }
           }
         }

       }

     }}}}
     rand();
     return;

}

function rand() {
  var a = Math.floor((Math.random() * 3) + 0);
  var b = Math.floor((Math.random() * 3) + 0);
  var idd = 'r' + a + 'c' + b;
  if(isFilled(3) == true){
    return;
  }else{
  if (document.getElementById(idd).innerHTML == "X" || document.getElementById(idd).innerHTML == "O"){
    rand();
  }else{
  document.getElementById(idd).innerHTML = pc;
  return;}
}}

function check(size, pl){
  var p;
  var isWinner = false;
  var col;
  var row;
  var diagFirst = '';
  var diagSecond = '';
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
  }else{
    if (diagSecond == pl + pl + pl){
        isWinner = true;
    }
    else{
      for (var l = 0; l < size; l++){
        if (rows[l] == pl + pl + pl){
          isWinner = true;
        }else{
          if (cols[l] == pl + pl + pl){
            isWinner = true;
          }
        }
      }
    }
  }

  return isWinner;
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
