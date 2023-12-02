import { useTranslation } from "next-i18next"

 


export default function PrincipalHome() {
  const { t } = useTranslation('common')

  return (
    <>      
      <span>{t('welcome')}</span>
    </>
  )
}
