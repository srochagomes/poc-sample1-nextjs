import { useTranslation } from "next-i18next"
import style from "./AreaLogin.module.scss"
import { useEffect, useState } from "react";
import IconSelecting from "@/view/components/button/icon-selecting";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import IconSVG from "@/view/components/icons/icon-svg";
import { Router, useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@/view/components/text-container/typography";
import userSession from "@/domain/model/session/UserSession";
import { verifyUserLogged } from "@/manager-state/reducers/logged/LoggedState";
import LinkAction from "@/view/components/link/action";
import verifyRequiredLogin from "@/infra/actions/VerifyRequireLogin";

export default function AreaLogin() {
    const [menuSelected, setMenuSelected] = useState(false);
    const router = useRouter(); // Add useRouter hook
    const loggedState = useSelector((state:any) => state.userLoggedContainerState);  
    const dispatch = useDispatch();

    const menuClicked = () : void => {
        router.push('/signIn');
    }

    let userName = loggedState.logged?loggedState.given_name : 'Anonimous';

    const menuLoggedClicked = () : void => {
        setMenuSelected(!menuSelected);
    }

    const handleProfile = () => {
        userSession.session().then(async (body)=>{         
         verifyRequiredLogin(router,body);
         
       });
   
     };

    const handleLogout = () => {
        userSession.logout().then((response)=>{      
          dispatch(verifyUserLogged());  
        });
      };
      
    const { t } = useTranslation('common')

    return (    
        <>   
            <div className={ style['AreaLogin'] }>
            {loggedState.logged?
                    <div className={menuSelected? `${style['AreaLogin-userLogged']} ${style['AreaLogin-userLogged-show']}`: `${style['AreaLogin-userLogged']}`} onClick={menuLoggedClicked}>                    
                        <div className={ style['AreaLogin-userLogged-img'] }>
                            <IconSVG path={FieldIconPath.profile_circle} alt="Como Chegar e onde ficar" isFill={true} />
                        </div>
                        <Typography fontSize="caption1" weight="bold" color="white">{userName}</Typography>
                        <nav>
                            <ul>
                                <li><LinkAction onClick={handleProfile}>Perfil</LinkAction> </li>
                                <li><LinkAction onClick={handleLogout}>Logout</LinkAction> </li>
                            </ul>
                        </nav>                            


                    </div>
                :
                <IconSelecting isSelected={menuSelected} 
                            normal={IconesEnum.BUTTON_MENU.normal} 
                            whenSelected={IconesEnum.BUTTON_MENU.selected}                      
                            onClick={menuClicked}                            
                            width={"7vw"}
                            height={"4vh"}/>
            }
            
                
            </div> 
            
        </>
    
    )
}

const IconesEnum = {
    BUTTON_MENU: { selected: (
                            <IconSVG path={FieldIconPath.profile_circle} alt="Como Chegar e onde ficar" isFill={true} />
                            ),
                     normal: (
                             <IconSVG path={FieldIconPath.profile_circle} alt="Como Chegar e onde ficar" isFill={true} />
                    )
  }}
  
