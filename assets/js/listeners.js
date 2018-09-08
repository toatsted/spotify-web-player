$(() => {

  //SPOTIFY HANDLERS

  // Error handling
  player.addListener('initialization_error', ({ message }) => { console.error(message); });
  player.addListener('authentication_error', ({ message }) => { console.error(message); });
  player.addListener('account_error', ({ message }) => { console.error(message); });
  player.addListener('playback_error', ({ message }) => { console.error(message); });

  // Playback status updates
  player.addListener('player_state_changed', state => { 
    console.log(state);
    let track = {
      art: state.track_window.current_track.album.images[0].url,
      name: state.track_window.current_track.name,
      artist: state.track_window.current_track.artists[0].name
    }

    $("#art").attr("src", track.art);
    $("#name").text(track.name);
    $("#artist").text(track.artist);
    $("#seek")
      .attr("max", state.duration)
      .val(state.position)

      if(state.paused){
        $("#playpause").find("i").removeClass("fa-pause").addClass("fa-play")
      }else {
        $("#playpause").find("i").removeClass("fa-play").addClass("fa-pause")
      }
  });

  // Ready
  player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
  });

  // Not Ready
  player.addListener('not_ready', ({ device_id }) => {
    console.log('Device ID has gone offline', device_id);
  });


  //JQUERY HANDLERS

  $("#playpause").on("click", function() {
    player.togglePlay();
  });

  $("#prevtrack").on("click", function() {
    player.previousTrack();
  });

  $("#nexttrack").on("click", function() {
    player.nextTrack();
  });

  $("#seek").on("change", function(){
    player.seek($("#seek").val());
  });

});

