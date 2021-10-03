import { useDispatch, useSelector } from "react-redux";
import { addMessage, addBotMessageWithThunk } from "./chatSlice";
import Chat from "./Chat";
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

// const sendMessageWithThunk = (message) => (dispatch, getState) => {
//   const { chat } = getState();
//   const myId = chat.myId;
//   dispatch(addMessage(message));
//   if (message.authorId === myId) {
//     dispatch(addBotMessageWithThunk(message));
//   }
// };

function ChatContainer() {
  const urlParams = useParams();
  const chatId = Number.parseInt(urlParams.id);

  const messages = useSelector((state) => state.chat.messages[chatId]);
  const myId = useSelector((state) => state.chat.myId);
  const dispatch = useDispatch();

  const classes = useStyles();

  const onSendMessage = (messageText) => {
    // dispatch(addMessage({ chatId, messageText, authorId: myId }));
    dispatch({type: 'USER_FETCH_REQUESTED', payload: { chatId, messageText, authorId: myId }})
  };
  
  return <Chat  classes={classes} messages={messages} onSendMessage={onSendMessage} />;
}

export default ChatContainer;
