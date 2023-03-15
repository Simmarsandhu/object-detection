object=[];
img="";
var status="";
function preload(){
 img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    object_detection=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="STATUS : Detecting objects";
}
function draw(){

    image(img,0,0,600,500);
    if(status !=""){

    for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="STATUS: Object detected"
    fill("red");
    stroke("red");
    accuracy= floor(object[i].confidence*100);
    text(object[i].label+" "+accuracy+"%",object[i].x+15,object[i].y+15);
    noFill();
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
    
}
}
    
}
function modelLoaded(){
    console.log("modelLaded");
    status= true;
    object_detection.detect(img, gotresults);

}
function gotresults(error,results){
    if(error){
        console.log("error");

    }
    else{
        console.log(results)
        object=results;
    }
}