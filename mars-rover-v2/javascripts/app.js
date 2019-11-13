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


  console.log("turnLeft was called!");
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


function goForward(moves) {
  for (i = 0; i < moves.length; i++) {
    if (moves == 'r') {
      return turnRight();
    }
    else if (moves == 'f') {
      return moveForward();
    }
    else if (moves == 'l') {
      return turnLeft();
    }
  }
}




