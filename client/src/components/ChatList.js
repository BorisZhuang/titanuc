import React from 'react';
import ChatListItem from './ChatListItem';

const ChatList = ({ users, concise, onUserSelected }) => {
  return users.map(item => (
    <ChatListItem key={item.name} {...item} concise={concise} onItemClick={onUserSelected}/>
  ));
};

export default ChatList;
