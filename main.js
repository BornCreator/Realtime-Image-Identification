function preload(){

}

function setup(){
    canvas=createCanvas(350,275);
    canvas.position(500,350);
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Md-CR9xld/model.json',modelLoaded);
}
function draw(){
    image(video,0,0,350,275);
    classifier.classify(video,gotResult);
}

function modelLoaded(){
    console.log("Model loaded!");
}

function gotResult(error,results){
    if(error){
        console.log("ERROR "+error)
    }else{
        console.log(results);
        document.getElementById("object").innerHTML="Object: "+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy: "+results[0].confidence.toFixed(2)*100+"%";
    }
}