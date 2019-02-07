function createProjectile(name, originEntity) {
    const Projectile = new Entity(name); //creates the projectile as an entity
    Projectile.origin = originEntity;
    Projectile.type = 'projectile';
    Projectile.size.set(16, 16);         //size of the projectile.

    Projectile.pos.set(originEntity.pos.x, originEntity.pos.y + Projectile.size.y/2);   //position of the Projectile starts from where the origin character is, may need to offset
    Projectile.addTrait(new Velocity());
    Projectile.addTrait(new Throw());

    Projectile.heading = originEntity.heading;
    Projectile.throw.dir = Projectile.heading; //propels the projectile in the direction that the character is facing

    Projectile.damageValue = 15;

    Projectile.updateAnimation = function() {
        this.startX = 0;
        this.startY = 0;
        this.FrameWidth = 512;
        this.FrameHeight = 512;
        this.FrameSpeed = 0.2;
        this.FrameLength = 6;
        this.FrameLoop = true;
        this.FrameReverse = false;
        Projectile.animation = new Animation(ASSET_MANAGER.getAsset(
            "./Projectiles/fireball.png"),
            this.startX, this.startY, this.FrameWidth, this.FrameHeight ,
             this.FrameSpeed, this.FrameLength,
             this.FrameLoop, this.FrameReverse);
    }

    Projectile.draw = function (context) {
      if (Projectile.heading === -1) {
          context.save();
          context.translate(22,0);
          context.scale(-1,1);
          Projectile.animation.drawFrame(deltaTime, context, -this.pos.x, (this.pos.y - Projectile.size.y/2), 1/16);
          context.restore();
       }
       if (Projectile.heading === 1) {
           Projectile.animation.drawFrame(deltaTime, context, (this.pos.x - Projectile.size.x/2), (this.pos.y - Projectile.size.y/2), 1/16);
         }
    }

    Projectile.updateAnimation();
    return Projectile;
}

function ThrowProjectile(name, originEntity) {
    levelObject.addEntity(createProjectile(name, originEntity));
}
