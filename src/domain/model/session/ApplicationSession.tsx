import accessTokenRepository from "@/infra/repository/cookies/AccessTokenRepository"
import identity from "@/infra/integration-api/server/IdentityConnect"
import { HttpStatusCode } from "axios";
import jwt, { JwtPayload } from 'jsonwebtoken'
import dataRepository from "@/infra/repository/cookies/DataRepository";
import DateOperations from "@/types/date/DateOperations";


const writeTokenData = (authAPIData: IAPIReturn): void =>{    
  let access_token_id = process.env.NEXT_PUBLIC_ACCESS_TOKEN_APP;      
  if (!access_token_id){
    throw new Error('Access token id not found');
  }

  let date_access =  process.env.NEXT_PUBLIC_DATETIME_ACCESS;
  if (!date_access){
    throw new Error('Date access not configured.');
  }

  accessTokenRepository.save(access_token_id, authAPIData.data.access_token);    
  dataRepository.save(date_access, authAPIData.data.date_ref_exp);

}


const decodeIdTokenData = () : JwtPayload|null => {
  let access_token_id = process.env.NEXT_PUBLIC_ACCESS_TOKEN_APP;          
  if (!access_token_id){
    throw new Error('Access token should be informed.');
  }
  let token:string|null = accessTokenRepository.get(access_token_id);
  if (token){
    let decodedIdTokenData: JwtPayload = jwt.decode(token) as JwtPayload;  
    return decodedIdTokenData;
  }
  return null;

}

const applicationSession = {

    getData(){

      let access_token_id = process.env.NEXT_PUBLIC_ACCESS_TOKEN_APP;          
      if (!access_token_id){
        throw new Error('Access token should be informed.');
      }
      let token:JwtPayload|null = decodeIdTokenData();
      
      if (!token){
        return this.register().then((body:IAPIReturn)=>{
          token = decodeIdTokenData();
          return token
        }); 
        
      }
      return token;   
        
    },
    register(){
      let date_access =  process.env.NEXT_PUBLIC_DATETIME_ACCESS;
      if (!date_access){
        throw new Error('Date access not configured.');
      }

      return identity.getTokenApp()
      .then((appDataAPI:IAPIReturn)=> {
        if (appDataAPI.status === HttpStatusCode.Ok){          
          writeTokenData(appDataAPI);
        }
        return appDataAPI;
      });  
    },
    accessToken(){

      let access_token_id = process.env.NEXT_PUBLIC_ACCESS_TOKEN_APP;          
      if (!access_token_id){
        throw new Error('Access token should be informed.');
      }
      return accessTokenRepository.get(access_token_id);
    },
    refresh(){
      return identity.getRefreshTokenApp()
      .then(async (userDataAPI:IAPIReturn)=>{
          if (userDataAPI.status === HttpStatusCode.Ok){
              writeTokenData(userDataAPI);              
          }
          return await userDataAPI;;
      });     

    },


}

export default applicationSession;