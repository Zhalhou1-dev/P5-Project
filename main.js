function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function draw(){
    image(video,0,0,300,300);
    fill('blue')
    circle(0,0,30);
    circle(270,270,30);
    circle(300,10,30);
    circle(10,300,30);

}

function snap(){
    save('student_name.png')
    }
       