import React from 'react';

export default function PostMessage({message, handleFormEdits, handleFormPost}) {
    var [isEmpty, setIsEmpty] = React.useState(true);
    function updateFormEdits(e) {
        handleFormEdits(e)
        if (e.target.value !== '') {
            setIsEmpty(false)
        } else {
            setIsEmpty(true)
        }
    }

    function postFormUpdate(e) {
        e.preventDefault();
        handleFormPost();
        setIsEmpty(true)
    }
    return(
        <div className="postMessage">
            <form className="postMessage--form" onSubmit={postFormUpdate}>
                <input
                    className="postMessage--input"
                    name="messageText"
                    value={message.messageText}
                    onChange={updateFormEdits}
                    placeholder="Enter Message Here"  
                />
                <input 
                    className="postMessage--submit"
                    type="submit"
                    value="Submit"
                    disabled={isEmpty}
                />
            </form>
        </div>
    )
}