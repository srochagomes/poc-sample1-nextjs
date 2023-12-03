import { useTranslation } from "next-i18next"
import style from "./PrincipalHome.module.scss"
import FeriazText, { FeriazSizeEnum } from "@/components/svg/feriaz-text"
import HeaderMenu from "./header/menu"
 


export default function PrincipalHome() {
  const { t } = useTranslation('common')

  return (
    <>      
      <section className={style.body}>
        <div className={style['body-top-area']}>
          <FeriazText sizeType={FeriazSizeEnum.BIG} />          
          <HeaderMenu/>
        </div>
        <span className={style['body-text-area']}>Férias: planeje sua viagem em minutos com inteligência artificial.</span>
        
      </section>
      
    </>
  )
}
