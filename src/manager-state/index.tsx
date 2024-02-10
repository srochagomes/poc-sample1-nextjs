import { configureStore } from '@reduxjs/toolkit';
import messageSlice from '@/manager-state/reducers/message/MessageState'
import userLoggedSlice from '@/manager-state/reducers/logged/LoggedState'

const managerState = configureStore({
    reducer: {
      messageContainerState: messageSlice,
      userLoggedContainerState: userLoggedSlice,
      
    }
  });
  
export default managerState;