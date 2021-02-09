import React from 'react';

export default function Message({ msg }) {
    return (
        <div className="messageList--msg">
            {msg}
        </div>
    )
}