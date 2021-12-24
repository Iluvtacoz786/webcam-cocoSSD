var status=""
object=[]
function preload(){}
function setup(){
canvas=createCanvas(500,400);
canvas.position(390,150);
video=createCapture(VIDEO);
video.size(500,400)
video.hide();
objectDetector=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="status: detecting object"

}
function draw(){
    image(video,0,0,500,400)
    if(status!=""){
        objectDetector.detect(video,gotResult)
        document.getElementById("numb_obj").innerHTML=object.length;
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="Status: Object detected"
            fill("red");
            text(object[i].label,object[i].x,object[i].y);
            noFill()
            stroke("red")
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
}
function modelLoaded(){
    console.log("model is loaded")
    status=true;
}
function gotResult(error, result){
if(error){
console.log(error)
}
else{
    object=result;
    console.log(result)
}
}