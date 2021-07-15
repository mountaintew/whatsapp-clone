import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import MicNoneRoundedIcon from '@material-ui/icons/MicNoneRounded';


function Chat() {
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

                <p className="chat__message">
                    <span className="chat__name">
                        TestName
                    </span>

                    This is a message

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">
                        TestName
                    </span>

                    This is a message

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">
                        TestName
                    </span>

                    This is a message

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">
                        TestName
                    </span>

                    This is a message

                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>


            </div>

            <div className="chat__footer">
                <InsertEmoticonRoundedIcon />
                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                    ></input>

                    <button
                        type="submit"
                    >Send a message</button>
                </form>
                <MicNoneRoundedIcon />
            </div>

        </div>
    )
}

export default Chat
