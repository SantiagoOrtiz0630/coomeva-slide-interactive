
let NUM_VIDEOS = 6;
let list_videos = [];

let index_video = 0;

let video_container = document.getElementsByClassName("App-videoContainer")[0];

let btn_repeat = document.getElementsByClassName("App-repeat")[0];
let btn_prev = document.getElementsByClassName("App-prev")[0];
let btn_next = document.getElementsByClassName("App-next")[0];

let progress = document.getElementsByClassName("App-progress")[0];

function LoadVideos(){

    for (let index = 0; index < NUM_VIDEOS; index++) {
        
        let video = document.createElement("video");
        video.setAttribute("class", "App-video");
        video.src = `./src/slides/Slide${(index + 1)}.mp4`;

        video.style.display = "none";
        video_container.appendChild(video);

        list_videos[index] = video;
    }

    PlayVideo(index_video);

}

function PlayVideo(index){
    list_videos[index].style = "flex";
    list_videos[index].play();
}

function CleanVideos(){
    for (let index = 0; index < list_videos.length; index++) {
        list_videos[index].pause();
        list_videos[index].currentTime = 0;
        list_videos[index].style.display = "none";
    }
}

function NextVideo(){
    index_video++;

    if(index_video >= NUM_VIDEOS){
        index_video = NUM_VIDEOS - 1;
    }

    let updateBar = index_video / (NUM_VIDEOS - 1);
    bar.animate(updateBar);

    CleanVideos();
    PlayVideo(index_video);
}

function PrevVideo(){
    index_video--;

    if(index_video <= 0){
        index_video = 0;
    }

    let updateBar = index_video / (NUM_VIDEOS - 1);
    bar.animate(updateBar);

    CleanVideos();
    PlayVideo(index_video);
}

function RepeatVideo(){
    CleanVideos();
    PlayVideo(index_video);
}

//PROGRESS BAR
let progress_bar = document.getElementsByClassName("App-progress")[0];

let colors = {
    green: "#8DC63F",
    lightGreen: "#E4F4CD",
    lightOrange: "#FFF0E6",
    orange: "#F47A20",
    white: "#FDFDFF"
}

var bar = new ProgressBar.Line(progress_bar, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 500,
    color: colors.orange,
    trailColor: colors.lightOrange,
    trailWidth: 5,
    svgStyle: {width: '100%', height: '100%'}
});
  
bar.animate(0.0);

btn_repeat.onclick = RepeatVideo;
btn_prev.onclick = PrevVideo;
btn_next.onclick = NextVideo;

window.onload = LoadVideos;