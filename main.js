function preload(){

}

function setup(){
    canvas=createCanvas(350,275);
    canvas.position(500,385);
    video=createCapture(VIDEO);
    video.hide()
}
function draw(){
    image(video,0,0,350,275);
}