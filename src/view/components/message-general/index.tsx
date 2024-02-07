import { closeMessage } from '@/manager-state/reducers/message/MessageState';
import { RouteModuleHandleContext } from 'next/dist/server/future/route-modules/route-module';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './MessageContainer.module.scss'
import Typography from '../text-container/typography';
import { IMessageWindow } from '@/types/structure/IMessageWindow';



const MessageContainer = () => {
  const messagemWindow:IMessageWindow = useSelector((state:any) => state.messageContainerState);  
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId : any = 0;
    

    if (messagemWindow.open) {
      timeoutId = setTimeout(() => {
        dispatch(closeMessage());
      }, 4000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [messagemWindow.open, dispatch]);

  return (
    <div className={style['message-container']} style={{ display: messagemWindow.open ? 'block' : 'none' }} data-message-type={messagemWindow.type}>
      <div className={style['message-container-message']} >
        <div>
          <Typography fontSize="H3" color="white" weight='bold' >{messagemWindow.title?messagemWindow.title:'Sem título'}</Typography>
        </div>
        <div>
          <Typography fontSize="H5" color="white">{messagemWindow.message?messagemWindow.message:'Sem messagem'}</Typography>      
        </div>
        

      </div>
    </div>
  );
};

export default MessageContainer;