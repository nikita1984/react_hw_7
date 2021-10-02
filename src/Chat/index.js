// import React, { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, addBotMessageWithThunk } from "./chatSlice";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  chatWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F0F0F",
  },

  componentWrapper: {
    width: "600px",
    height: "800px",
    display: "flex",
    flexDirection: "column",
  },
}));

const sendMessageWithThunk = (message) => (dispatch, getState) => {
  const { chat } = getState();
  const myId = chat.myId;
  dispatch(addMessage(message));
  if (message.authorId === myId) {
    dispatch(addBotMessageWithThunk(message));
  }
};



function ChatContainer() {
  const urlParams = useParams();
  const chatId = Number.parseInt(urlParams.id);

  const messages = useSelector((state) => state.chat.messages[chatId]);
  const myId = useSelector((state) => state.chat.myId);
  const dispatch = useDispatch();

  const classes = useStyles();

  const onSendMessage = (messageText) => {
    dispatch(sendMessageWithThunk({ chatId, messageText, authorId: myId }));
  };
  
  return <Chat  classes={classes} messages={messages} onSendMessage={onSendMessage} />;
}

function Chat(props) {
  
  return (
    <div className={props.classes.chatWrapper}>
      <div className={props.classes.componentWrapper}>
        <MessageList messagesArray={props.messages} />
        <MessageInput onSendMessage={props.onSendMessage} />
      </div>
    </div>
  );
}

export default ChatContainer;
