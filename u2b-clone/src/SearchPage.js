import React from 'react';
import ChannelRow from './ChannelRow.js';
import VideoRow from './VideoRow.js';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';


function SearchPage() {
  return (
    <div className='searchPage'>
      <div className="searchPage_filter">
      <TuneOutlinedIcon />
      <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow
        image="https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg"
        channel="Mr.Robot"
        verified
        subs="700k"
        no0fVideos={382}
        description="You can find awesome programming lessons here! Also, exprect programming tips and tricks that will take your coding skills to the next level..."
      />
      <hr/>
      <VideoRow
        title="Hello World"
        views="8.9B Views"
        timestamp="2 hours ago"
        subs="210"
        channel="Mr.Robot"
        image="https://i.pinimg.com/originals/e7/08/e1/e708e12a9ee340378218573f12c50bd4.jpg"
        description="Welcome to the most advanced coding class on the planet; I hope you're prepared!"
      />
      <VideoRow
        title="Taking Down The Mainframe"
        views="1M Views"
        timestamp="1 hour ago"
        subs="210"
        channel="Mr.Robot"
        image="https://i.stack.imgur.com/7nY4T.jpg"
        description="Hello class, if you missed the hello world video it's okay you didn't miss much; now I would like to hear your oral presentation, put away..."
      />
      <VideoRow
        title="Hello World"
        views="8.9B Views"
        timestamp="2 hours ago"
        subs="210"
        channel="Mr.Robot"
        image="https://i.pinimg.com/originals/e7/08/e1/e708e12a9ee340378218573f12c50bd4.jpg"
        description="Welcome to the most advanced coding class on the planet; I hope you're prepared!"
      />
      <VideoRow
        title="Taking Down The Mainframe"
        views="1M Views"
        timestamp="1 hour ago"
        subs="210"
        channel="Mr.Robot"
        image="https://i.stack.imgur.com/7nY4T.jpg"
        description="Hello class, if you missed the hello world video it's okay you didn't miss much; now I would like to hear your oral presentation, put away..."
      />
      <VideoRow
        title="Hello World"
        views="8.9B Views"
        timestamp="2 hours ago"
        subs="210"
        channel="Mr.Robot"
        image="https://i.pinimg.com/originals/e7/08/e1/e708e12a9ee340378218573f12c50bd4.jpg"
        description="Welcome to the most advanced coding class on the planet; I hope you're prepared!"
      />
      <VideoRow
        title="Taking Down The Mainframe"
        views="1M Views"
        timestamp="1 hour ago"
        subs="210"
        channel="Mr.Robot"
        image="https://i.stack.imgur.com/7nY4T.jpg"
        description="Hello class, if you missed the hello world video it's okay you didn't miss much; now I would like to hear your oral presentation, put away..."
      />
      <VideoRow
        title="Hello World"
        views="8.9B Views"
        timestamp="2 hours ago"
        subs="210"
        channel="Mr.Robot"
        image="https://i.pinimg.com/originals/e7/08/e1/e708e12a9ee340378218573f12c50bd4.jpg"
        description="Welcome to the most advanced coding class on the planet; I hope you're prepared!"
      />
      <VideoRow
        title="Taking Down The Mainframe"
        views="1M Views"
        timestamp="1 hour ago"
        subs="210"
        channel="Mr.Robot"
        image="https://i.stack.imgur.com/7nY4T.jpg"
        description="Hello class, if you missed the hello world video it's okay you didn't miss much; now I would like to hear your oral presentation, put away..."
      />
    </div>
  );
}

export default SearchPage;
