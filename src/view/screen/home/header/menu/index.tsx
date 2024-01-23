import { useTranslation } from "next-i18next"
import style from "./HeaderMenu.module.scss"
import IconSelecting from "@/components/button/icon-selecting"
import IconSVG from "@/components/icons/icon-svg"
import { FieldIconPath } from "@/types/enums/FieldIconPath"
import { useState } from "react"


export default function HeaderMenu() {
  const common = useTranslation('common')

  const [menuSelected, setMenuSelected] = useState(false);
  
  const menuClicked = () : void => {
    setMenuSelected(!menuSelected);
  }

  return (

    <>   
      <div className={menuSelected? `${style['HeaderMenu']} ${style['HeaderMenu-show']}`: `${style['HeaderMenu']}`}>
        <IconSelecting isSelected={menuSelected} 
                      normal={IconesEnum.BUTTON_MENU.normal} 
                      whenSelected={IconesEnum.BUTTON_MENU.selected}                      
                      onClick={menuClicked} 
                      width={"7vw"}
                      height={"3vh"}
                      />
        <nav>
            <ul>
                <li><a href="https://www.feriaz.ai/mundo-de-feriaz">{common.t('link.feriaz.world.caption')}</a></li>
                <li><a href="https://www.feriaz.ai/perguntas-feriaz">{common.t('link.feriaz.common-questions.caption')}</a></li>
                <li><a href="https://www.feriaz.ai/contato-feriaz">{common.t('link.feriaz.contact.caption')}</a></li>            
            </ul>
        </nav>
        </div> 
      
    </>
  )
}

const IconesEnum = {
  BUTTON_MENU: { selected: (
                          <IconSVG path={FieldIconPath.menu_vertical} alt="Mostrar Menu" isFill={true}/>
                          ),
                   normal: (
                           <IconSVG path={FieldIconPath.menu_horizontal} alt="Esconder Menu" isFill={true} />
                  )
}}
