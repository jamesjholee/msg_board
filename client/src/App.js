import React, {useState} from "react";
import axios from 'axios';
import PostMessage from './components/PostMessage';
import MessageList from './components/MessageList';
import ChannelsList from './components/ChannelsList';
import './style.css'

function App() {
  var [messages, setMessages] = useState([])
  var [channels, setChannels] = useState([])
  var [currentChannel, setCurrentChannel] = useState('')
  var [isLoaded, setIsLoaded] = React.useState(false);
  var [message, setMessage] = useState({
    messageText: ""
  })

  React.useEffect( () => {
    axios.get('http://localhost:4000/channel/')
      .then(res => {
        setChannels(res.data)
      })
  })

  function channelSelect(id) {
    axios.get(`http://localhost:4000/channel/${id}`)
      .then(res => {
        setCurrentChannel(id)
        setMessages(res.data.messages)
        setMessage(prevState => ({...prevState, messageText: ''}));
        setIsLoaded(true)
      })
  }

  function handleFormEdits(event) {
    const { name, value } = event.target;
    setMessage(prevState => ({...prevState, [name]: value}));
  }

  function handleFormPost() {
    let newMsg = message.messageText
    
    axios.post(`http://localhost:4000/channel/${currentChannel}`, {message: newMsg})
      .then(res => {
        setMessages(res.data.messages)
        setMessage(prevState => ({...prevState, messageText: ''}));
      })
  }

  return (
    <div className="app">
      <ChannelsList channels={channels} channelSelect={channelSelect} />
      <MessageList messages={messages} isLoaded={isLoaded} />
      <PostMessage message={message} handleFormEdits={handleFormEdits} handleFormPost={handleFormPost} />
    </div>
  );
}

export default App;
