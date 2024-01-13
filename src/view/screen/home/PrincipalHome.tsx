import { useTranslation } from "next-i18next"
import style from "./PrincipalHome.module.scss"
import FeriazText, { FeriazSizeEnum } from "@/components/svg/feriaz-text"
import HeaderMenu from "./header/menu"
import FeriazFilter from "@/components/feriaz-filter"
import AreaLogin from "./header/area-login"
 


export default function PrincipalHome() {
  const { t } = useTranslation('common')

  return (
    <>      
      <section className={style.body}>
        <div className={style['body-area-top']}>          
          <HeaderMenu/>
          <FeriazText sizeType={FeriazSizeEnum.BIG} /> 
          <AreaLogin />
        </div>
        <div className={style['body-area-search']}>
          <FeriazFilter/>
        </div>
        <div className={style['body-area-text']}>
          <span>Férias: planeje sua viagem em minutos com inteligência artificial.</span>
        </div>
      </section>
      
    </>
  )
}
