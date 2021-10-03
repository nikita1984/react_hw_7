import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { addMessage } from "./Chat/chatSlice";
import { useSelector } from "react-redux";

function* addBotMessageWithSaga(action) {
    yield put(addMessage(action.payload));
    if (action.payload.authorId === 1) {
      const botMessage = {
        chatId: action.payload.chatId,
        messageText: "I'm robot",
        authorId: action.payload.chatId,
      };
      yield delay(1000);
      yield put(addMessage(botMessage));
    }
  }
  
  function* mySaga() {
    yield takeLatest('USER_FETCH_REQUESTED', addBotMessageWithSaga);    
  }
  
  export default mySaga;
  