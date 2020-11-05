import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

//es7 snippets (VSC but Atom?/Sublime)

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </div>
      <div className="header_input">
        <input type="text"/>
        <SearchIcon className="header_inputButton"/>
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon"/>
        <NotificationsIcon className="header_icon"/>
        <Avatar
          alt="Ronald Reagan"
          src="https://upload.wikimedia.org/wikipedia/commons/1/16/Official_Portrait_of_President_Reagan_1981.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
