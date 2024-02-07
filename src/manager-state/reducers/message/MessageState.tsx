import { MessageStyle } from "@/types/enums/MessageStyles";
import { IMessageWindow } from "@/types/structure/IMessageWindow";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IMessageWindow = { type: MessageStyle.INFO, open: false};

const messageSlice = createSlice({
    name: 'messageContainer',
    initialState,
    reducers: {
      openMessage: (state, data) =>  {
        return { open: true, title: data.payload.title, message:data.payload.message, type:data.payload.type};
      },
      closeMessage: (state) =>  {
          return { type: MessageStyle.INFO, open: false};
      },
    }
  });
  
  export const { openMessage, closeMessage} = messageSlice.actions;
  
  export default messageSlice.reducer;