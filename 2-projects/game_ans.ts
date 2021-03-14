{
  /**
   * Let's make a game.
   */
  const position= {x:0,y:0};
  // 따로 return되는 값은 없다
  function move(direction:'up'|'down'|'left'|'right') {
    switch(direction) {
      case 'up':
        position.y += 1;
        break;
      case 'down':
        position.y -= 1;
        break;
      case 'left':
        position.x -= 1;
        break;
      case 'right':
        position.x += 1;
        break;
      default:
        throw new Error('unknown direction: '+direction);
    }
  }
}