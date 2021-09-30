import React, { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./chatSlice";
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
    const botMessage = {
      chatId: message.chatId,
      messageText: "I'm robot",
      authorId: message.chatId,
    };
    setTimeout(() => dispatch(addMessage(botMessage)), 1500);
  }
};

function Chat() {
  const urlParams = useParams();
  const chatId = Number.parseInt(urlParams.id);

  const messages = useSelector((state) => state.chat.messages[chatId]);
  const myId = useSelector((state) => state.chat.myId);
  const dispatch = useDispatch();

  const classes = useStyles();

  const onSendMessage = (messageText) => {
    dispatch(sendMessageWithThunk({ chatId, messageText, authorId: myId }));
  };

  return (
    <div className={classes.chatWrapper}>
      <div className={classes.componentWrapper}>
        <MessageList messagesArray={messages} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}

export default Chat;
