import React from 'react';
import Message from './Message';

export default function MessageList({ messages , isLoaded }) {
    function getMessages() {
        if (isLoaded) { 
            return messages.slice(0).reverse().map((message, idx) => {
                return <Message key={idx} msg={message} />
            })
        } else {
            return <div className="messageList--loading">Select a Channel!</div>;
        }
    }

    return (
        <div className="messageList">
            {getMessages()}
        </div>
    )
}