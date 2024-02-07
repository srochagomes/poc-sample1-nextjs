import { configureStore } from '@reduxjs/toolkit';
import messageSlice from '@/manager-state/reducers/message/MessageState'

const managerState = configureStore({
    reducer: {
      messageContainerState: messageSlice,
      
    }
  });
  
export default managerState;