import { useTranslation } from "next-i18next"

import style from "./LoginHome.module.scss"
import FeriazText from "@/components/svg/feriaz-text";
import Typography from "@/components/text/typography";
import FormGroup from "@/components/form/group";
import InputField from "@/components/input/text";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import ButtonPrimary from "@/components/button/primary-button";
import ButtonStyle, { ButtonStyleIconEnum } from "@/components/button/style-buton";



export default function LoginHome() {
  const common = useTranslation('common')
  const field = useTranslation('field')
  const btn = useTranslation('button')
  

  const handleAccessConfirm = (dataForm:any) => {  
  }

  return (
    <>      
      <section className={style.body}>
        <div className={style['body-feriaz']}><FeriazText/></div>
        <div className={style['body-welcome']}>
          <Typography fontSize="H2" color="white" weight="extrabold">{common.t('welcome.traveler')}</Typography>
        </div>
        <div className={style['body-welcome-login-caption']}>
          <Typography fontSize="caption1" color="white">{common.t('login.caption')}</Typography>
        </div>

        <div className={style['body-form-login']}>
          <FormGroup applyOnValidForm={handleAccessConfirm}>
              <InputField  type={FieldTypeEnum.Email} placeholder={field.t('email.placehold')} roundType={FieldRoundEnum.Top}/>
              <InputField  type={FieldTypeEnum.Password} placeholder={field.t('password.placehold')} roundType={FieldRoundEnum.Button}/>              
          </FormGroup>          
          <div className={style['body-form-login-forgot-password']}>
            <Typography fontSize="caption2" color="white">{common.t('login.forgot.caption')}</Typography>
          </div>
          <div className={style['body-form-login-button']}>
            <ButtonPrimary>
              {btn.t('login.button')}
            </ButtonPrimary>
          </div>
        </div>
          <div className={style['body-or-login-social-caption']}>
            <Typography fontSize="caption2" color="white">{common.t('login.or-login-social.caption')}</Typography>
          </div>
          <div className={style['body-button-login-google']}>
            <ButtonStyle icon={ButtonStyleIconEnum.Google}>              
              {btn.t('login.goole.button')}
            </ButtonStyle>
          </div>

          <div className={style['body-button-login-facebook']}>
            <ButtonStyle icon={ButtonStyleIconEnum.Facebook}>              
              {btn.t('login.facebook.button')}
            </ButtonStyle>
          </div>

          <div className={style['body-invite-signin']}>
            <Typography fontSize="caption1" color="white">{common.t('user.without.account.caption')}</Typography>
            <Typography fontSize="caption2" color="white">{common.t('user.should-create.account.caption')}</Typography>
          </div>
        
      </section>
    </>
  )
}
