function Bird()
{
  this.y = 600 / 2;
  this.x = 100;


  this.velocity = 0;
  this.gravity = 0.5;
  this.lift = -8;

  this.show = function()
              {
                noStroke();
                fill(color(76,255,86));
                ellipse(this.x, this.y, 25);
              }

  this.update = function() 
             {
                this.velocity += this.gravity;
                this.y += this.velocity;

                if (this.y >  height) 
                {
                    this.y = height;
                    this.velocity;
                }

                if (this.y < 0) 
                {
                    this.y = 0;
                    this.velocity = 0;
                }
             }

  this.jump = function() 
  {
    this.velocity = this.lift;
  }
}