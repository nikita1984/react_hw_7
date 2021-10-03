import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import { addMessage } from "./Chat/chatSlice";

function* addBotMessageWithSaga(action) {
    const myId = 1;
    yield put(addMessage(action.payload));
    if (action.payload.authorId === myId) {
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
  