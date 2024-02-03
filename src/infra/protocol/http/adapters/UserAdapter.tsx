
import userSession from "@/domain/model/session/UserSession";


const userAdapter:IAPIManager = {
    getToken() {
        return userSession.accessToken();
    },
    processRefreshToken: () => {
        return userSession.refresh()
          .then((dado) => {
            
            return dado;
          })
          .catch((error) => {
            return error;
          });
      },
    
}

export default userAdapter;