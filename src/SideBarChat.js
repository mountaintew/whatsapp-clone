import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './SidebarChat.css'
function SideBarChat() {
    const [chatList, setChatList] = useState([{
    
    }])


    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SideBarChat
