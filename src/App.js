import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then(response => {
      setMessages(response.data);
    })
  }, [])


  useEffect(() => {
    const pusher = new Pusher('3b96e7c57ec8713c24f0', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
      console.log(newMessage);
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe();
    }

  }, [messages])


  console.log(messages);
  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />

        {/* Chat Component */}
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
