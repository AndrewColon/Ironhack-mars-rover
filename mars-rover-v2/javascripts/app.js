// Rover Object Goes Here
// ======================
let rover = {
  direction = 'N',
  x: 0,
  y: 0,
  travelLog = x, y
}
// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
}

function moveForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y -= 1;
      break;
    case 'S':
      rover.y += 1;
      break;
    case 'W':
      rover.x -= 1;
      break;
    case 'E':
      rover.x += 1;
      break;

  }
}


function commands (turn) {
  for (i = 0; i < turn.length; i++) {
    if (turn == 'R') {
      return turnRight();
    }
    else if (turn == 'F') {
      return moveForward();
    }
    else if (turn == 'L') {
      return turnLeft();
    }
  }
}




