/* document.getElementById('canva') = canva

const canva = () => {

} */

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'blue';
// context.fillRect(100, 100, 400, 400);


context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);
// context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
// context.stroke();
const width = 60;
const height = 60;
const gap = 20;
let x, y;

function loop () {

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      x = 50 + (width + gap) * i;
      y = 50 + (height + gap) * j

      context.beginPath();
      context.rect(x, y, width, height)
      context.stroke();

      if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(x + 8, y + 8, width - 16, height - 16)
        context.stroke();
      }
    }
  }
}

/* loop() */

setInterval(function() {
  loop();
  location.reload();
}, 500);

