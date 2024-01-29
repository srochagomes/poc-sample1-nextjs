import { useTranslation } from "next-i18next"

import style from "./SignUp.module.scss"
import FeriazText from "@/view/components/svg/feriaz-text";
import Typography from "@/view/components/text/typography";
import FormGroup from "@/view/components/form/group";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import ButtonPrimary from "@/view/components/button/primary-button";

import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import CalendarField from "@/view/components/input/calendar";
import InputField from "@/view/components/input/text";



export default function SignUp() {
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
          <Typography fontSize="caption1" color="white">{common.t('sign-up.caption')}</Typography>
        </div>

        <div className={style['body-form-login']}>
          <FormGroup>
              <InputField
                      id="traveler_name"
                      iconLeft={FieldIconEnum.FingerPrint}
                      type={FieldTypeEnum.Text} 
                      caption={field.t('signup.name.caption')} 
                      placeholder={field.t('signup.name.placehold')} 
                      roundType={FieldRoundEnum.Top}/>
              <InputField  
                      id="traveler_email"
                      iconLeft={FieldIconEnum.Email}
                      type={FieldTypeEnum.Email} 
                      caption={field.t('email.caption')} 
                      placeholder={field.t('email.placehold')} />
              <div className={style['body-form-login-group-row-two']}>
                  <InputField  
                          id="traveler_phone"
                          iconLeft={FieldIconEnum.PhoneCall}
                          type={FieldTypeEnum.Text} 
                          caption={field.t('signup.phone.caption')} 
                          placeholder={field.t('signup.phone.placehold')}                           
                          />

                    <CalendarField
                                id="traveler_born"                                
                                placeholder={field.t('signup.born.placehold')}   
                                caption={field.t('signup.born.caption')}   
                                iconLeft={FieldIconEnum.Calendar}
                                
                                
                            />
              </div>
              <InputField  
                id="traveler_password"
                iconLeft={FieldIconEnum.Password}
                type={FieldTypeEnum.Password} 
                caption={field.t('signup.password.caption')} 
                placeholder={field.t('signup.password.placehold')}/>  
              <InputField  
                id="traveler_password_confirm"
                iconLeft={FieldIconEnum.Password}
                type={FieldTypeEnum.Password} 
                caption={field.t('signup.password-confirm.caption')} 
                placeholder={field.t('signup.password-confirm.placehold')} 
                roundType={FieldRoundEnum.Button}                />
                <div className={style['body-form-login-field-required']}>
                  <Typography fontSize="caption3-a" color="white">{field.t('field.required.caption')}</Typography>
                </div>
          </FormGroup>          
          
          <div className={style['body-form-login-button']}>
            <ButtonPrimary>
              {btn.t('confirm.button')}
            </ButtonPrimary>
          </div>
        </div>
          
        
      </section>
    </>
  )
}
