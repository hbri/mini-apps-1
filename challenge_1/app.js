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
    for (var r = 0; r < 3; r++) {
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

  var checkTie = function(game) {
    var full = true;
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++) {
        if (typeof game[r][c] === 'number') {
          full = false;
        }
      }
    }
    return full;
  }


  var displayWinners = function() {
    if (xwin.firstChild) {
      xwin.removeChild(xwin.firstChild)
    }
    if (owin.firstChild) {
      owin.removeChild(owin.firstChild)
    }
    xwin.appendChild(document.createTextNode(`X Wins: ${xWins}`));
    owin.appendChild(document.createTextNode(`O Wins: ${oWins}`));
  }

  pos00.addEventListener("click", (event) => {
    if (pos00.firstChild) {
      return
    }
    pos00.appendChild(document.createTextNode(currentTurn));
    board[0][0] = currentTurn;
    if (checkBoard(board) === true) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
        displayWinners();
      }, 20)
    } else if (checkTie(board)) {
      alert(`TIE GAME! Please Click Reset`)
    }
  })

  pos01.addEventListener("click", (event) => {
    if (pos01.firstChild) {
      return
    }
    pos01.appendChild(document.createTextNode(currentTurn));
    board[0][1] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
        displayWinners();
      }, 20)
    } else if (checkTie(board)) {
      alert(`TIE GAME! Please Click Reset`)
    }
  })

  pos02.addEventListener("click", (event) => {
    if (pos02.firstChild) {
      return
    }
    pos02.appendChild(document.createTextNode(currentTurn));
    board[0][2] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
        displayWinners();
      }, 20)
    } else if (checkTie(board)) {
      alert(`TIE GAME! Please Click Reset`)
    }
  })

  pos10.addEventListener("click", (event) => {
    if (pos10.firstChild) {
      return
    }
    pos10.appendChild(document.createTextNode(currentTurn));
    board[1][0] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
        displayWinners();
      }, 20)
    } else if (checkTie(board)) {
      alert(`TIE GAME! Please Click Reset`)
    }
  })

  pos11.addEventListener("click", (event) => {
    if (pos11.firstChild) {
      return
    }
    pos11.appendChild(document.createTextNode(currentTurn));
    board[1][1] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
        displayWinners();
      }, 20)
    } else if (checkTie(board)) {
      alert(`TIE GAME! Please Click Reset`)
    }
  })

  pos12.addEventListener("click", (event) => {
    if (pos12.firstChild) {
      return
    }
    pos12.appendChild(document.createTextNode(currentTurn));
    board[1][2] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
        displayWinners();
      }, 20)
    } else if (checkTie(board)) {
      alert(`TIE GAME! Please Click Reset`)
    }
  })

  pos20.addEventListener("click", (event) => {
    if (pos20.firstChild) {
      return
    }
    pos20.appendChild(document.createTextNode(currentTurn));
    board[2][0] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
        displayWinners();
      }, 20)
    } else if (checkTie(board)) {
      alert(`TIE GAME! Please Click Reset`)
    }
  })

  pos21.addEventListener("click", (event) => {
    if (pos21.firstChild) {
      return
    }
    pos21.appendChild(document.createTextNode(currentTurn));
    board[2][1] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
        displayWinners();
      }, 20)
    } else if (checkTie(board)) {
      alert(`TIE GAME! Please Click Reset`)
    }
  })

  pos22.addEventListener("click", (event) => {
    if (pos22.firstChild) {
      return
    }
    pos22.appendChild(document.createTextNode(currentTurn));
    board[2][2] = currentTurn;
    if (checkBoard(board)) {
      switchTurns = !switchTurns;
      setTimeout(() => {
        alert(`${currentTurn} WINS!!`)
        displayWinners();
      }, 20)
    } else if (checkTie(board)) {
      alert(`TIE GAME! Please Click Reset`)
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
