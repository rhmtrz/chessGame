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
