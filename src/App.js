import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList.js';
import VideoDetail from './components/VideoDetail.js'
import _ from 'lodash';


const key = 'AIzaSyDYHCbehTxDQaNOUA1V-4MHCyreze6zVKc';


export default class App extends React.Component {
  
	constructor (props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('monkeys');
	}

	videoSearch(term) {
		YTSearch({key: key, term: term}, videos => {
			this.setState({ 
				videos: videos, 
				selectedVideo: videos[0] 
			});
		});
	}


  render() {
  	const videoSearch = _.debounce(term => { this.videoSearch(term) }, 500);

    return (
    	<div>
    		<SearchBar onSearchTermChange={videoSearch} />
    		<VideoDetail video={this.state.selectedVideo} 
    		/>
    		<VideoList 
    		videos={this.state.videos}
    		onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}
    		 />
    	</div>
    	);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));