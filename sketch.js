var MAX_SCORE = 186, MIN_SCORE = 19, BLOWOUT = 68;

function setup() {
  createCanvas(1200, 1200);
  background(255);
  noLoop();
}

function draw() {
  var games = getGames();

  var columnWidth = width / 200;

  for (game of games) {
    /*
    color(255, 204, 0);
    fill();
    */
    var x = columnWidth * game.winner;
    var y = columnWidth * game.loser;
    var pointWidth = columnWidth;
    ellipse(x, y, pointWidth);
  }
}

function getGames(dateRange) {
  var ret = [];
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      var winner = ceil(
        constrain(randomGaussian(90, 40), MIN_SCORE, MAX_SCORE)
      );
      var loser = winner - ceil(constrain(randomGaussian(10, 40), 1, BLOWOUT));
      ret.push(game(winner, loser));
    }
  }
  return ret;
}

function game(winningScore, losingScore) {
  return { winner: winningScore, loser: losingScore };
}
