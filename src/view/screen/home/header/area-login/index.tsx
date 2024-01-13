import { useTranslation } from "next-i18next"
import style from "./AreaLogin.module.scss"
import { useState } from "react";
import IconSelecting from "@/components/button/icon-selecting";
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import IconSVG from "@/components/icons/icon-svg";
import { Router, useRouter } from "next/router";

export default function AreaLogin() {
    const [menuSelected, setMenuSelected] = useState(false);
    const router = useRouter(); // Add useRouter hook
    
    const menuClicked = () : void => {
        router.push('/login');
    }
  
    const { t } = useTranslation('common')

    return (    
        <>   
            <div className={menuSelected? `${style['AreaLogin']} ${style['AreaLogin-show']}`: `${style['AreaLogin']}`}>
            <IconSelecting isSelected={menuSelected} 
                            normal={IconesEnum.BUTTON_MENU.normal} 
                            whenSelected={IconesEnum.BUTTON_MENU.selected}                      
                            onClick={menuClicked} />
            </div> 
            
        </>
    
    )
}

const IconesEnum = {
    BUTTON_MENU: { selected: (
                            <IconSVG path={FieldIconPath.profile_circle} alt="Como Chegar e onde ficar" height={40} width={80}/>
                            ),
                     normal: (
                             <IconSVG path={FieldIconPath.profile_circle} alt="Como Chegar e onde ficar" height={40} width={80} />
                    )
  }}
  
