import { useTranslation } from "next-i18next"
import style from "./HeaderMenu.module.scss"
import FeriazText, { FeriazSizeEnum } from "@/components/svg/feriaz-text"
import SignInAltIcon from "@/components/icons/SignInAltIcon"
import CreateAccountIcon from "@/components/icons/CreateAccountIcon"

export default function HeaderMenu() {
  const { t } = useTranslation('common')

  return (
    <>   
      <div className={style.HeaderMenu}>
        <nav>
            <ul>
                <li><a href="https://www.feriaz.ai/mundo-de-feriaz">MUNDO DE FÉRIAZ</a></li>
                <li><a href="https://www.feriaz.ai/perguntas-feriaz">PERGUNTAS FREQUENTES</a></li>
                <li><a href="https://www.feriaz.ai/contato-feriaz">CONTATO</a></li>            
            </ul>
        </nav> 
        <div className={style['HeaderMenu-buttons']}>
              <a href="#" className={style['HeaderMenu-button']}>
              <SignInAltIcon/>
                Criar Conta
              </a>

              <a href="#" className={style['HeaderMenu-button']}>
              <CreateAccountIcon/>
                  Fazer Login
              </a>
          </div>    
      </div>  
      
    </>
  )
}
