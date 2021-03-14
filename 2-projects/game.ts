{
  let position = {x:0,y:0};
  type tposition = {
    x:number;
    y:number;
  }
  type Command='up'|'down'|'left'|'right';
  function move(command:Command):tposition {
    switch (command) {
      case "up":
        return {...position,y:position.y+1};
      case "down":
        return {...position, y:position.y-1};
      case "left":
        return {...position, x:position.x-1};
      case "right":
        return {...position, x:position.x+1};
      default:
        throw new Error('unknown command');
    }
  }
}