import accountManager from "@/infra/integration-api/account/AccountManager";
import accessManager from "@/infra/integration-api/auth/AccessManager";


const account = {
     create(newAccount:INewAccount){
        return accountManager.createNew(newAccount)
            .then((response)=> {

                return response;
            }).catch((response)=> {
                return response;
            })

    },
    confirmAccess(confirmAccess:IAccessConfirm){
        return accessManager.confirmAccess(confirmAccess)
            .then((response)=> {
                return response;
            })
    }


}


export default account;