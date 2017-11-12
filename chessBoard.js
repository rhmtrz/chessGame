var chessBoard = '';
var size = 8;

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((y + x) % 2 === 0) {
      chessBoard += '#';
    } else {
      chessBoard += '*';
    }
  }
  chessBoard += '\n';
}

console.log(chessBoard);
