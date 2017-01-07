class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      fetchedVideos: window.exampleVideoData
    };

  }
  selectVideo(video) {
    
    this.setState({
      currentVideo: video

    });
  }
  fetchVideos(videos) {
    
    this.setState({
      fetchedVideos: videos

    });
  }


  componentDidMount() {
    console.log(this.props);
    this.props.searchYouTube(window.options, this.fetchVideos.bind(this));
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videoSelection={ this.selectVideo.bind(this) } videos={this.state.fetchedVideos} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
