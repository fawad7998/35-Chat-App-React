import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const Chat = () => {
    return (
        <div className="h-screen bg-gray-100">
            <ChatEngine
                height="100%"
                projectID="70a532a1-7f32-4e4d-aaa7-093703c6cce5"
                userName="fawad"
                userSecret="abcd"
            />
        </div>
    );
}

function Chatapp() {
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blue-500 text-white py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold">My Chat App</h1>
                </div>
            </header>
            <center className="flex-grow">
                <Chat />
            </center>
        </div>
    );
}

export default Chatapp;
