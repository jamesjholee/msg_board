import React from 'react';
import Channel from './Channel.js'

export default function ChannelsList({ channels, channelSelect }) {
    return (
        <div className="channelList">
            {channels.map((channel, idx) => {
                return <Channel key={idx} channel={channel} channelSelect={channelSelect} />
            })}
        </div>
    )
}