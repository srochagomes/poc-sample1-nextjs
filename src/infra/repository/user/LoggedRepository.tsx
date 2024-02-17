

const loggedRepository = {
    save(key:string, user: IUserLogged){
        globalThis?.localStorage?.setItem(key, JSON.stringify(user));
    },
    get(key:string): IUserLogged | null{                

        const jsonData: string | null = globalThis?.localStorage?.getItem(key);
        if (jsonData){
            const data: IUserLogged = JSON.parse(jsonData);
            return data;                
        }    

        return null;
        
    },
    remove(key:string){
        globalThis?.localStorage?.removeItem(key);
    },
}

export default loggedRepository;