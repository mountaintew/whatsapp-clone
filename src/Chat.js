import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import './Chat.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import MicNoneRoundedIcon from '@material-ui/icons/MicNoneRounded';
import axios from './axios';

function Chat({ messages }) {
    const [input, setInput] = useState('');



    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            message: input,
            name: "Lester",
            timestamp: "Today",
            received: true
        })
        setInput('')
    }



    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="char__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p className={message.received ? "chat__message chat__receiver" : "chat__message "}>
                        <span className="chat__name">
                            {message.name}
                        </span>

                        {message.message}

                        <span className="chat__timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}


            </div>

            <div className="chat__footer">
                <InsertEmoticonRoundedIcon />
                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    ></input>

                    <button
                        type="submit"
                        onClick={(e) => sendMessage(e)}
                    >Send a message</button>
                </form>
                <MicNoneRoundedIcon />
            </div>

        </div>
    )
}

export default Chat
