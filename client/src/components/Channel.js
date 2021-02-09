import React, {useState} from 'react';

export default function Channel({ channel, channelSelect }) {
    var [isActive, setisActive] = React.useState(false);
    function channelClick(id) {
        channelSelect(id)
        setisActive(true)
    }
    return (
        <div className={isActive ? "channelList--listItem channelList--listItem--active" : "channelList--listItem" } onClick={() => {channelClick(channel.id)}}>
            {channel.channelName.toUpperCase()}
        </div>
    )
}