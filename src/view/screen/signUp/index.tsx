import { useTranslation } from "next-i18next"

import style from "./SignUp.module.scss"
import FeriazText from "@/view/components/svg/feriaz-text";
import Typography from "@/view/components/text-container/typography";
import FormGroup from "@/view/components/form/group";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import ButtonPrimary from "@/view/components/button/primary-button";

import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import CalendarField from "@/view/components/input/calendar";
import InputField from "@/view/components/input/text";
import FieldData from "@/types/structure/FieldData";
import FormDiv from "@/view/components/form/div-container";
import FormManagerType from "@/types/structure/FormManageType";



export default function SignUp() {
  const common = useTranslation('common')
  const field = useTranslation('field')
  const btn = useTranslation('button')
  const requiredSign = ' *';
  let fields : FieldData[] = [];
  let formManager: FormManagerType;
    
    
  const onValidForm = (formMng: FormManagerType):void=>{
    formManager = formMng;
    fields = formManager.dataSource;
    
  }

  const handleConfirm = () => {  
    
    formManager.applyValidation();

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
          <FormGroup applyOnValidForm={onValidForm}>
              <InputField
                      id="traveler_name"                      
                      iconLeft={FieldIconEnum.FingerPrint}                      
                      type={FieldTypeEnum.Text} 
                      required={true}
                      caption={field.t('signup.name.caption')+requiredSign} 
                      placeholder={field.t('signup.name.placehold')} 
                      roundType={FieldRoundEnum.Top}/>
              <InputField  
                      id="traveler_email"                      
                      iconLeft={FieldIconEnum.Email}
                      required={true}
                      type={FieldTypeEnum.Email} 
                      caption={field.t('email.caption')+requiredSign} 
                      placeholder={field.t('email.placehold')} />
              <FormDiv className={style['body-form-login-group-row-two']}>
                  <InputField                    
                          id="traveler_phone"                          
                          iconLeft={FieldIconEnum.PhoneCall}
                          type={FieldTypeEnum.Phone} 
                          required={true}
                          caption={field.t('signup.phone.caption')+requiredSign} 
                          placeholder={field.t('signup.phone.placehold')}
                          roundType={FieldRoundEnum.BottonLeft}               
                          />

                    <CalendarField
                                id="traveler_born"
                                caption={field.t('signup.born.caption')+requiredSign}                                
                                placeholder={field.t('signup.born.placehold')}
                                required={true} 
                                iconLeft={FieldIconEnum.Calendar}
                                roundType={FieldRoundEnum.BottonRight}
                            />
              </FormDiv>
                <div className={style['body-form-login-field-required']}>
                  <Typography fontSize="caption3-a" color="white">{field.t('field.required.caption')}</Typography>
                </div>
          </FormGroup>          
          
          <div className={style['body-form-login-button']}>
            <ButtonPrimary onClick={handleConfirm}>
              {btn.t('confirm.button')}
            </ButtonPrimary>
          </div>
        </div>
          
        
      </section>
    </>
  )
}
