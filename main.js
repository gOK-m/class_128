rightWristX = 0;
leftWristX = 0;
leftWristY = 0;
rightWristY = 0;
song = "";
function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(550, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses)
}

function draw(){
    image(video, 0, 0, 550, 400);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop(){
    song.stop();
}

function modelLoaded(){
    console.log("posenet is initialized!");
}

function gotPoses(result){
    if(result > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        console.log("left wrist x = " + leftWristX + "left wrist y = " + leftWristY + "right wrist x = " + rightWristX + "right wrist y = " + rightWristY);
    }
}