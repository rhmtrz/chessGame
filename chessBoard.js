
/*
const chessBoardModel =
  [[null, null, null],
  [null, "queen", null],
  [null, null, "king"]];

function showBoard(chessBoardModel){
  var chessBoard = '';

  for (var y = 0; y < chessBoardModel.length; y++) {
    const theRow = chessBoardModel[y];
    for (var x = 0; x < theRow.length; x++) {
      const theCell = theRow[x];
      if(theCell == null){
        if ((y + x) % 2 === 0) {
          chessBoard += '#';
          chessBoard.element.style.wid
        } else {
          chessBoard += '*';
        }
      } else  if (theCell == "queen") {
        chessBoard += 'Q';
      } else {
        chessBoard += 'P';
      }
    }
    chessBoard += '\n';
  }
  console.log(chessBoard);
}
showBoard(chessBoardModel);
*/
var id = 0;
var chessModel = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]];

function creatTable() {
  var table = document.getElementById('table');
  for (var r = 0; r < chessModel.length; r++) {
    var row = document.createElement("tr");
    console.log(row)
    for (var c = 0; c < chessModel.length; c++) {
      var cell = document.createElement("td");
      console.log(cell);
      cell.width = "70px";
      cell.height = "70px";
      cell.id = id++;

      if ((r + c) % 2 == 0) {
        cell.style.backgroundColor = "black";
      } if ((r + c) % 2 == 1) {
        cell.style.backgroundColor = "gainsboro";
      }
      row.appendChild(cell);

    }
    table.appendChild(row);
  }
}

creatTable();












/*
  1. distinguish pieces on vie like king=>k or queen=>q
  2. move one piece like
    ***       **k
    **k  =>   ***
    ***       ***

    think how to use the keyboard.
      hint: readline()

  3. distinguish user and enemy on model and view

*/
