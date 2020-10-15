import React, {useEffect, useState} from 'react';
import "./Chat.css";
import {Avatar, IconButton} from '@material-ui/core';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {SearchOutlined} from "@material-ui/icons";
import {useParams} from "react-router";
import  db from "./firebase";

const Chat = () => {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    useEffect(() => {
        if (roomId) {
db.collection('rooms').doc(roomId).onSnapshot(snapshot => (setRoomName(snapshot.data().name)))
        }
    },[roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId]);
    const sendMessage = (e) => {
        e.preventDefault();
        setInput('');
    };
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at..</p>
                </div>











                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"} `}>
                    <span className="chat__name">Unni</span>
                    Hey
                    <span className="chat__timestamp">
                        3:15pm
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form action="">
                    <input  value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage}> Send message</button>
                </form>
                <MicIcon/>
            </div>

        </div>
    );
};
export default Chat;
