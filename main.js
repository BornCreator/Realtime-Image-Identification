function preload(){

}

function setup(){
    canvas=createCanvas(400,350);
    canvas.position(475,500);
    video=createCapture(VIDEO);
    video.hide()
}
function draw(){
    image(video,0,0,400,350);
}