function preload(){

}

function setup(){
    canvas = createCanvas(450,450);
    canvas.center();
    video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
}

function draw(){
    image(video, 80, 150, 300, 300);
}

function take_snapshot(){
    save("mylipstick.png");
}