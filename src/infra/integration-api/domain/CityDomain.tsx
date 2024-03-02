import { connectServiceHttp, headerJson } from "@/infra/protocol/http/CallAPI";

const cityDomain = {
    
    async searchesBy(city : string): Promise<IAPIReturn> {        

        
        let apiAddress = process.env.NEXT_PUBLIC_API_DOMAIN_CITY_SEARCH_PHONETIC;

        if (!apiAddress){
            throw new Error("API_TOKEN_REQUEST not found to use");
        }
        apiAddress = apiAddress.replace(/{{city}}/g, city)
        
        let api = connectServiceHttp.toAPI.asApp();
        
        return await await api.get<IAPIReturn>(apiAddress,headerJson)
        .then((response) => {                      
            let dataReturn: IAPIReturn =  {
                status:  response.status,
                statusText:   response.statusText,
                data:  response.data
            };
            return dataReturn;
          })
          .catch((error) => {

            if (error?.data?.code){
                return {
                    status: error?.data?.code,
                    statusText: error?.data?.message,
                    data: error?.data              
                }

            }else {
                return {
                    status: error?.response?.status,
                    statusText: error?.response?.statusText,
                    data: error.response?.data 
                }
    
            }
          }); 
    }
}

export default cityDomain;