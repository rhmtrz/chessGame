
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
var chessBoard = [
  [null, null, null, "King", null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, "queen", null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]];

function creatTable() {
  var table = document.getElementById('table');
  for (var r = 0; r < chessBoard.length; r++) {
    var row = document.createElement("tr");
    console.log(row)
    for (var c = 0; c < chessBoard.length; c++) {
      var cell = document.createElement("td");
    //  var cellText = document.createTextNode("Cell");
    //  console.log(cellText);
    //  console.log();
      cell.width = "70px";
      cell.height = "70px";
      cell.id = r + "_" + c;
      cell.textContent = chessBoard[r][c];
      cell.onclick = "indexCell"

        //  console.log(chessModel[2][4]);

      if ((r + c) % 2 == 0) {
        cell.style.backgroundColor = "black";
        cell.style.color = "gainsboro";

      } if ((r + c) % 2 == 1) {
        cell.style.backgroundColor = "gainsboro";
        cell.style.color = "black";

      }
      row.appendChild(cell);
    //  cell.appendChild(cellText);
    }
    table.appendChild(row);
  }
}
creatTable();


function startGame() {
  var cells = document.getElementsByTagName("td");
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].addEventListener("click", turnClick, false);
  }
}
startGame();
const huPlayer = "O";
function turnClick(square) {
  turn(square.target.id, huPlayer);
}
function turn(squareId, player) {
   chessBoard[squareId] = player;
   document.getElementById(squareId).innerText = player;
}
/*

function update () {
  var cellElement = document.getElementById ("0_0")
  cellElement.textContent = chessBoard[0][0];
    if (cellElement.textContent = chessBoard) {
      for (var i = 0; i <= chessBoard.length; i++) {
    //  console.log( 1 + "_" + i);

      }
    } else {
      console.log(chessBoard);
  }
  console.log(cellElement);
}
chessBoard[0][0] = "Bishop"
update();



/*
var state = false;
var currentPiece;
var currentCell;
var cells =  document.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  cells[i].onclick = function() {
    getCell(this);
  };
}

function getCell(that) {
  if (!state) {
    state = true;
    currentPiece = that.cells;
    currentCell = that;
  } else {
    that.cells = currentPiece;
    currentCell.cells = "";
    state = false;

  }
}
/*
function allowDrop (ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementsByTagName(data))
}
*/
/*
function setPieces() {
  kingPiece = chessModel[2][1];
  kingPiece.textContent = "King";
  console.log(setPieces);
}
setPieces();
*/





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
