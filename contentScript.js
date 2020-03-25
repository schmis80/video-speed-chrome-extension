const insertListener = function(event){
  if (event.animationName == "nodeInserted") {
    // This is the debug for knowing our listener worked!
    // event.target is the new node!
    console.warn("A video has been inserted! ", event, event.target);
    addSpeedControls(event.target);
  }
}

document.addEventListener("webkitAnimationStart", insertListener, false);


function addSpeedControls(video) {
  const container = video.parentNode
  container.setAttribute('class', 'speed-container');

  const button = document.createElement('button');
  button.innerHTML = "2x";
  button.setAttribute('class', 'speed-button');

  button.onclick = function(event) {
    event.stopPropagation();
    if (video.playbackRate == 1) {
      video.playbackRate = 2;
      button.innerHTML = '1x';
    } else {
      video.playbackRate = 1;
      button.innerHTML = '2x';
    }
  };

  container.appendChild(button);
}
