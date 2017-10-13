import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './VideoListItem.js'
import './style.css';

const VideoList = (props) => {

	const videoItems = props.videos.map(video => {
		return <VideoListItem 
			key={video.etag} 
			video={video} 
			onVideoSelect={props.onVideoSelect}
		/>;
	});

    return (
    	<ul className='col-md-4 list-group'>
    	{videoItems}
    	</ul>
    	);
  };


export default VideoList;

