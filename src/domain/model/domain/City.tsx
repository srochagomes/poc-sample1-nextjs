import cityDomain from "@/infra/integration-api/domain/CityDomain";

const cityContext = {
    searchesPhonetics(city:string){
       return cityDomain.searchesBy(city)
           .then((response)=> {
               return response;
           }).catch((response)=> {
               return response;
           })
   }

}


export default cityContext;