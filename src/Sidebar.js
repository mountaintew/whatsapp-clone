import React from 'react'
import './Sidebar.css'
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Avatar, IconButton } from '@material-ui/core';
import SideBarChat from './SideBarChat'
function Sidebar() {
    return (
        <div className="sidebar">
            {/* Header */}
            <div className="sidebar__header">

                <Avatar src="https://avatars.githubusercontent.com/u/32102302?s=60&v=4">

                </Avatar>

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <ChatRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon />
                    </IconButton>
                </div>


            </div>

            {/* SearchBar */}
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchRoundedIcon />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            {/* Chatlist */}
            <div className="sidebar__chats">
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
                <SideBarChat/>
            </div>
        </div>
    )
}

export default Sidebar
