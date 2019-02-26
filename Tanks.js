var tanks = ["./tanks/tankSprite.png"];

var playerNum = 1;
function createTank(name, choice) {
    const Tank = new Entity(name);
    Tank.team = choice;
    Tank.type = 'player'
    Tank.size.set(64, 64); //set to actuall pixel size of Tank, determines collision box. kat is 18,29
    Tank.origin = 'self';
    Tank.addTrait(new Velocity());
    Tank.addTrait(new Go());
    Tank.addTrait(new Vertical());
    Tank.heading = 1;
    Tank.Moving = false;

    Tank.damage = 0;

    Tank.choice = choice * 64 || 0;
    Tank.player = playerNum;
    playerNum++;

    Tank.drawX = 13 + (96);
    Tank.drawY = 1;
    Tank.drawSize = 32;
    Tank.scale = 2;


    Tank.draw = function (context) {
      context.drawImage(ASSET_MANAGER.getAsset(tanks[0]), Tank.drawX, Tank.drawY, Tank.drawSize,Tank.drawSize,
      Tank.pos.x, Tank.pos.y, Tank.drawSize * Tank.scale, Tank.drawSize * Tank.scale);
    }

    // draw updates-------------------------------------------------------------
    Tank.up = function () {
      Tank.drawX = 13 + 32;
      Tank.drawY = 1 + Tank.choice;
    }
    Tank.down = function () {
      Tank.drawX = 13 + 64;
      Tank.drawY = 1 + 32 + Tank.choice;
    }
    Tank.left = function () {
      Tank.drawX = 13;
      Tank.drawY = 1 + 32 + Tank.choice;
    }
    Tank.right = function () {
      Tank.drawX = 13 + 96
      Tank.drawY = 1 + Tank.choice;
    }
    //--------------------------------------------------------------------------

    return Tank;
}
