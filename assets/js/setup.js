window.onSpotifyWebPlaybackSDKReady = () => {
  const token = 'BQDmIZoFyhHtiFol99lPYXUYxxkiS22_G3aou_ZFAo7W3Rz1pyERk3pBAX3-Flkljx8iuiccJEar7Wkp-wbiitLNw5sT5eTFyeHJcUQWHEy6Wc7ECAeDRrFQE7RWPyFnCN-QLC3JTZ3PuRjz_0yQOwV2zPvgMRYhiQvdLA';
  player = new Spotify.Player({
    name: 'spotify-web-player',
    getOAuthToken: cb => { cb(token); }
  });
  // Connect to the player!
  player.connect();
};

