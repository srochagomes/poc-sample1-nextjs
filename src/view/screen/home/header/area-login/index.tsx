import { useTranslation } from "next-i18next"
import style from "./AreaLogin.module.scss"
import FeriazText, { FeriazSizeEnum } from "@/components/svg/feriaz-text"
import SignInAltIcon from "@/components/icons/SignInAltIcon"
import CreateAccountIcon from "@/components/icons/CreateAccountIcon"

export default function AreaLogin() {
  const { t } = useTranslation('common')

  return (
    <>   
        <div className={style['AreaLogin-buttons']}>
              <a href="#" className={style['AreaLogin-button']}>
              <SignInAltIcon/>
                Criar Conta
              </a>

              <a href="#" className={style['AreaLogin-button']}>
              <CreateAccountIcon/>
                  Fazer Login
              </a>
          </div>    
    </>
  )
}
