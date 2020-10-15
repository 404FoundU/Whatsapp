import React, {useEffect, useState} from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from "./SidebarChat";
import "./Sidebar.css"
import db from "./firebase";

const Sidebar = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const unsubscribe= db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                }
            }))
        });
        return () => unsubscribe();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar/>

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat={true}/>
                {rooms.map(room => {
                        return (
                            <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                        )
                    }
                )
                }


            </div>
        </div>
    );
};
export default Sidebar;
