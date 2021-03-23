//code is based off of example code provided from the Week 10 github example
let play;
let playbtn;
let volume, mute;
let volumeDial;
let UserVolume;
let vids = [];
Videos=Videos;

function setup() {
  vids.push(new Videos("Assets/Cashin_FirstNetworkTD.mp4", 300, -5, 480, 720));
  vids.push(new Videos("Assets/Cashin_MusicVisualizer.mp4", 1050, -5, 480, 720));
  vids.push(new Videos("Assets/Cashin_Pj1.mp4", 300, 430, 480, 720));
  vids.push(new Videos("Assets/CashinFeedback.mp4", 1050, 430, 480, 720));

  createCanvas(screen.width, screen.height);
  background(213, 120, 49);

  textSize(50);


  playbtn = createButton('play');
  playbtn.position(110, 110);

  volumeDial = createSlider(0, 1, 1, .1)
  volumeDial.position(110, 130);
  volumeDial.style('width', '100px');

  playbtn.mousePressed(playVideo);
  volumeDial.changed(volumeSlide);

  for (let i = 0; i < vids.length; i++) {
    let tempVideo = createVideo([vids[i].Path]);
    tempVideo.size(vids[i].Wval, vids[i].Hval);
    tempVideo.position(vids[i].Xval, vids[i].Yval);
    vids[i].setVideoOBJ(tempVideo);
  }

}

function volumeSlide() {
  let UserVolume = volumeDial.value();
console.log(UserVolume);
  if (UserVolume <= 1) {
    UserVolume = 1;
  }
  if (UserVolume = 0) {
    UserVolume = 0;
  }
  for (let i = 0; i < vids.length; i++) {
    let temp = vids[i].VideoOBJ;
    temp.volume(volumeDial.value());
    document.getElementById("header").innerHTML = "Current Volume:" +volumeDial.value();
}
}

function playVideo() {

  if (play) {
      for (let i = 0; i < vids.length; i++) {
          let temp = vids[i].VideoOBJ;
          temp.pause();
          temp.volume(1);
      }
      playbtn.html('play');
      play = false;
  } else {
      for (let i = 0; i < vids.length; i++) {
          let temp = vids[i].VideoOBJ;
          temp.loop();
          temp.volume(1);
      }

      playbtn.html('pause');
      play = true;

  }

}


