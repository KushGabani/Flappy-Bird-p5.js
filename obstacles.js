function Obstacle() 
{
  this.x = width;
  this.wide = 60;
  this.speed = 3;
  this.gap = 120;
  this.top = random(height / 6, 3 / 4 * height);
  this.bottom = height - (this.top + this.gap);
  this.color = false;
  this.value = 0;

  this.hit = function(bird) 
  {
    if (bird.y < this.top || bird.y > height - this.bottom)
    {
      if (bird.x > this.x && bird.x < this.x + this.wide)
      {
        this.color = true;
        return true;
      }
    }
        this.color = false;
    return false;
  }


  this.show = function()
  {

    fill(255);
    if (this.color)
      fill(255, 0, 0);
    rect(this.x, 0, this.wide, this.top);
    rect(this.x, height-this.bottom, this.wide, this.bottom);
  }

  this.update = function()
  {
    this.x -= this.speed;
  }

  this.behindScreen = function()
  {
    if (this.x < -this.wide)
      return true;
    else
      return false;
  }

}