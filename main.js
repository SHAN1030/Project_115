function preload(){

}
function setup(){
canvas = createCanvas(700,600);
canvas.center();
video=createCapture(VIDEO);
video.size(700,600);
video.hide();
posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,700,600);
}
function take_snap(){
    save('capturephoto.png');
}
function modelloaded(){
    console.log('Posenet is initialized.');
}
function gotPoses(results){
if(results.length>0)
{
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
}
}