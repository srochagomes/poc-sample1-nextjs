import DateOperations from "@/types/date/DateOperations";
import { ONE_DAY } from "@/types/utils/FrameTimer"
import { parseCookies, setCookie, destroyCookie } from 'nookies';

const dataRepository = {

    save(data_id: string, value: any) {    
        
        if (!data_id){
            throw new Error('Data_id id should be informed.');
        }
        
        
        setCookie(null, data_id, value, {            
            sameSite: 'lax',
            maxAge: ONE_DAY,
            path: '/'
          });
    
    },

    get(data_id:string){

        const cookies = parseCookies();        
        const accessToken = cookies[data_id]
        if (accessToken){
            return cookies[data_id];
        }

        return null;
        
    },
    remove(access_token_id:string){
        destroyCookie(null, access_token_id);               
    }
    
}

export default dataRepository;