var controlsEl = document.querySelector('.audio-controls');
var volumeEl = controlsEl.querySelector('input.volume');
var playEl = controlsEl.querySelector('.btn-play');
var playIconEl = playEl.querySelector('i');
var playIconCL = playIconEl.classList;

var setAudioEl = function(audioEl) {
  audioEl.volume = volumeEl.value;
  volumeEl.addEventListener('input', function(){
    audioEl.volume = volumeEl.value;
  });

  audioEl.onplay = function() {
    playIconCL.remove('glyphicon-play');
    playIconCL.add('glyphicon-pause');
  };
  audioEl.onpause = function() {
    playIconCL.add('glyphicon-play');
    playIconCL.remove('glyphicon-pause');
  };

  playEl.addEventListener('click', function() {
    if (playIconCL.contains('glyphicon-play')) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  });
}

module.exports = {
  volumeEl: volumeEl,
  setAudioEl: setAudioEl
}
