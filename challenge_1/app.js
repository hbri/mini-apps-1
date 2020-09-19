(document.onload = function() {

  /* -------------------
    BOARD POSITIONS  */
  var pos00 = document.getElementById("00");
  var pos01 = document.getElementById("01");
  var pos02 = document.getElementById("02");
  var pos10 = document.getElementById("10");
  var pos11 = document.getElementById("11");
  var pos12 = document.getElementById("12");
  var pos20 = document.getElementById("20");
  var pos21 = document.getElementById("21");
  var pos22 = document.getElementById("22");

  var reset = document.getElementById("reset");

  var xwin = document.getElementById("xwin");
  var owin = document.getElementById("owin");



  /* --------------
    TURN LOGIC  */
  var x = "X";
  var o = "O";
  var switchTurns = true;
  var currentTurn = x;
  var xWins = 0;
  var oWins = 0;

  var board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  document.addEventListener("click", (event) => {
    switchTurns = !switchTurns;
    if (switchTurns === true) {
      currentTurn = x;
    } else {
      currentTurn = o;
    }
  })

  var checkRows = function(game) {
    for (var r = 0; r < 2; r++) {
      if (game[r][0] === game[r][1] && game[r][1] === game[r][2]) {
        return true;
      }
    }
    return false;
  }

  var checkColumns = function(game) {
    if (game[0][0] === game[1][0] && game[1][0] === game[2][0]) {
      return true
    }
    if (game[0][1] === game[1][1] && game[1][1] === game[2][1]) {
      return true
    }
    if (game[0][2] === game[1][2] && game[1][2] === game[2][2]) {
      return true
    }
    return false
  }

  var checkDiagonal = function(game) {
    if (game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
      return true
    }
    if (game[2][0] === game[1][1] && game[1][1] === game[0][2]) {
      return true
    }
    return false;
  }



  var checkBoard = function(game) {
    if (checkRows(game) || checkColumns(game) || checkDiagonal(game)) {
      if (currentTurn === x) {
        xWins++
      } else if (currentTurn === o) {
        oWins++
      }
      return true
    } else {
      return false
    }
  }




  var displayWinners = function() {
    xwins.appendChild(document.createTextNode(`X Wins: ${xWins}`));
    owins.appendChild(document.createTextNode(`O Wins: ${oWins}`));
  }

  pos00.addEventListener("click", (event) => {
    pos00.appendChild(document.createTextNode(currentTurn));
    board[0][0] = currentTurn;
    if (checkBoard(board) === true) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
      }, 20)
    }
  })

  pos01.addEventListener("click", (event) => {
    pos01.appendChild(document.createTextNode(currentTurn));
    board[0][1] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
      }, 20)
    }
  })

  pos02.addEventListener("click", (event) => {
    pos02.appendChild(document.createTextNode(currentTurn));
    board[0][2] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
      }, 20)
    }
  })

  pos10.addEventListener("click", (event) => {
    pos10.appendChild(document.createTextNode(currentTurn));
    board[1][0] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
      }, 20)
    }
  })

  pos11.addEventListener("click", (event) => {
    pos11.appendChild(document.createTextNode(currentTurn));
    board[1][1] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
      }, 20)
    }
  })

  pos12.addEventListener("click", (event) => {
    pos12.appendChild(document.createTextNode(currentTurn));
    board[1][2] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
      }, 20)
    }
  })

  pos20.addEventListener("click", (event) => {
    pos20.appendChild(document.createTextNode(currentTurn));
    board[2][0] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
      }, 20)
    }
  })

  pos21.addEventListener("click", (event) => {
    pos21.appendChild(document.createTextNode(currentTurn));
    board[2][1] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
      }, 20)
    }
  })

  pos22.addEventListener("click", (event) => {
    pos22.appendChild(document.createTextNode(currentTurn));
    board[2][2] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
      }, 20)
    }
  })

  reset.addEventListener('click', (event) => {
    board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    if (pos00.firstChild) {
      pos00.removeChild(pos00.firstChild);
    }
    if (pos01.firstChild) {
      pos01.removeChild(pos01.firstChild);
    }
    if (pos02.firstChild) {
      pos02.removeChild(pos02.firstChild);
    }
    if (pos10.firstChild) {
      pos10.removeChild(pos10.firstChild);
    }
    if (pos11.firstChild) {
      pos11.removeChild(pos11.firstChild);
    }
    if (pos12.firstChild) {
      pos12.removeChild(pos12.firstChild);
    }
    if (pos20.firstChild) {
      pos20.removeChild(pos20.firstChild);
    }
    if (pos21.firstChild) {
      pos21.removeChild(pos21.firstChild);
    }
    if (pos22.firstChild) {
      pos22.removeChild(pos22.firstChild);
    }

  })

})()
