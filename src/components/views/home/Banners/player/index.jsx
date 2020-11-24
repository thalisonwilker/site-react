import SpotifyPlayer from "react-spotify-player";

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: "100%",
  height: 300,
};
const view = "coverart"; // or 'coverart'
const theme = "black"; // or 'white'

export default (props) => (
  <SpotifyPlayer
    uri="spotify:album:4Io5vWtmV1rFj4yirKb4y4"
    size={size}
    view={view}
    theme={theme}
  />
);
