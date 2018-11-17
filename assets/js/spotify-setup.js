window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQBAmxdf3-ceWO3ve0iiQfVTkhs68AbRnkZfr9yg9Q17dhF3v9h7XDQMoGN6J77jZHLFDHocnR9Kr1ul9UYS7IaReHrVEcokDLgNI387fUsPvRF7AHYAqNvVaV4NgVkC0CEQzVMEx_H0oEWJZr3FPCjBFQo--lT7YdJhiA';
  player = new Spotify.Player({
    name: 'spotify-web-player',
    getOAuthToken: cb => { cb(token); }
  });
  // Connect to the player!
  player.connect();
};

