import applicationSession from "@/domain/model/session/ApplicationSession";

const applicationAdapter:IAPIManager = {
    getToken() {
        return applicationSession.accessToken();
    },
    processRefreshToken: () => {
        return applicationSession.refresh()
          .then((dado) => {
            
            return dado;
          })
          .catch((error) => {
            return error;
          });
      }
  }


export default applicationAdapter;