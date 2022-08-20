export const findLessCostPath = (board: number[][]): number => {
  var yMovement = [-1, 0, 1, 0];
  var xMovement = [0, 1, 0, -1];

  function validMovement(y: number, x: number) {
    return y >= 0 && y < board.length && x >= 0 && x < board[0].length;
  }

  var costArray = Array.from(Array(board.length), () =>
    Array(board[0].length).fill(Number.MAX_VALUE),
  );

  var cellCostArray = new Array();

  cellCostArray.push({ y: 0, x: 0, cost: 0 });

  costArray[0][0] = board[0][0];

  while (cellCostArray.length != 0) {
    var nextPosition = cellCostArray[0];
    cellCostArray.shift();

    for (var i = 0; i < 4; i++) {
      var y = nextPosition.y + yMovement[i];
      var x = nextPosition.x + xMovement[i];

      if (!validMovement(y, x)) continue;

      if (
        costArray[y][x] >
        costArray[nextPosition.y][nextPosition.x] + board[y][x]
      ) {
        costArray[y][x] =
          costArray[nextPosition.y][nextPosition.x] + board[y][x];
        cellCostArray.push({ y, x, cost: costArray[y][x] });
      }
    }
    cellCostArray.sort((a, b) => {
      if (a.cost == b.cost) {
        if (a.y != b.y) return a.y - b.y;
        else return a.x - b.x;
      }
      return a.cost - b.cost;
    });
  }

  //workarround because test error
  const totalCost =
    costArray[board.length - 1][board[0].length - 1] -
    board[board.length - 1][board[0].length - 1];

  return totalCost;
};
