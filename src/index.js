// TODO: Render the `App` component to the DOM
window.options = {
  query: 'react',
  max: 5,
  key: window.YOUTUBE_API_KEY
};

ReactDOM.render(<App searchYouTube={window.searchYouTube}/>, document.getElementById("app"));

// window.searchYouTube(window.options, result => console.log(result));