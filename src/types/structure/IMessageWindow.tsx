import { MessageStyle } from "../enums/MessageStyles"

export interface IMessageWindow{
    open?: boolean,
    title?: string,
    message?: string
    type: MessageStyle
}