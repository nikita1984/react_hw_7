import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: {
      2: [
        {
          timeStamp: moment("1995-12-17T03:21:00").valueOf(),
          authorId: 1,
          text: "Привет",
        },
        {
          timeStamp: moment("1995-12-17T03:24:00").valueOf(),
          authorId: 2,
          text: "Тебе тоже привет Joe, Тебе тоже привет Joe, Тебе тоже привет Joe, Тебе тоже привет Joe",
        },
      ],
      3: [
        {
          timeStamp: moment("1995-12-17T03:24:00").valueOf(),
          authorId: 1,
          text: "Привет",
        },
        {
          timeStamp: moment("1995-12-17T03:28:00").valueOf(),
          authorId: 3,
          text: "Тебе тоже привет Иван",
        },
        {
          timeStamp: moment("1995-12-17T03:28:00").valueOf(),
          authorId: 3,
          text: "Тебе тоже привет Иван",
        },
        {
          timeStamp: moment("1995-12-17T03:28:00").valueOf(),
          authorId: 3,
          text: "Тебе тоже привет Иван",
        },
      ],
    },
    profiles: [
      {
        id: 2,
        name: "Joe Doe",
        avatar: "https://material-ui.com/static/images/avatar/1.jpg",
      },
      {
        id: 3,
        name: "Иван Кузнецов",
        avatar: "https://material-ui.com/static/images/avatar/2.jpg",
      },
    ],

    myId: 1,
  },
  reducers: {
    addMessage: (state, action) => {
      const { chatId, messageText, authorId } = action.payload;
      state.messages = {
        ...state.messages,
        [chatId]: [
          ...state.messages[chatId],
          {
            timeStamp: moment().valueOf(),
            authorId,
            text: messageText,
          },
        ],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
