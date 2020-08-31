var bird;
var obstacle = [];

function setup()
{
  createCanvas(600, 600);
  bird = new Bird();
  obstacle.push(new Obstacle());
}


function draw()
{
  clear();
  background(0);

  for (let i = obstacle.length - 1; i >= 0; i--)
  {
    obstacle[i].show();
    obstacle[i].update();

    if (obstacle[i].behindScreen()) 
    {
      obstacle.splice(i, 1);
      
    }

    if (obstacle[i].hit(bird))
      console.log('Hit!');

  }

  bird.update();
  bird.show();


  if (frameCount % 100 == 0)
    obstacle.push(new Obstacle());

}


function mousePressed()
{    bird.jump();}