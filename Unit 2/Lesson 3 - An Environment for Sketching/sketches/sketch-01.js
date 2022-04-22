const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#246A73';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005; 
// bg colors: #246A73


    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const offset = width * 0.08;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++){
        for (let k = 0; k < 5; k++){
            let rgb;
            if (Math.random() > 0.5){
              rgb = `rgb(
              ${Math.floor(255 - 52.5 *  (Math.random() * i))},
              ${Math.floor(255 - 52.5 *  (Math.random() * j))},
              ${Math.floor(255 - 52.5 *  (Math.random() * k))})`
            }
            else {
              rbg = `rgb(
              ${Math.floor(0 + 72.5 * (Math.random() * k))},
              ${Math.floor(0 + 72.5 * (Math.random() * j))},
              ${Math.floor(0 + 72.5 * (Math.random() * i))})`
            }
            context.strokeStyle = rgb; 

        }
        context.strokeStyle =  
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5){
          context.beginPath();
          context.rect(x + offset/2, y + offset/2, w - offset, h - offset)
          context.stroke();
        }

        if (Math.random() > 0.5){
          context.beginPath();
          context.rect(x + offset/4, y + offset/4, w - offset/2, h - offset/2)
          context.stroke();
        }
        if (Math.random() > 0.5){
          context.beginPath();
          context.rect(x + offset/8, y + offset/8, w - offset/4, h - offset/4)
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
