
import ButtonPrimary from '@/components/button/primary-button';
import style from './RentCar.module.scss'
import Typography from '@/components/text/typography';
import FormGroup from '@/components/form/group';
import IconClick from '@/components/button/icon-click';
import InputField from '@/components/input/text';
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import SimpleDropdow from '@/components/input/dropdow/simple';
import SwitchLight from '@/components/input/switch';
import CalendarField from '@/components/input/calendar';
import { useTranslation } from 'next-i18next';

interface Props{

}

function RentCar(props:Props) {
    const common = useTranslation('common');

    const handleAccessConfirm = () =>{

    }

    return (
            <div className={style['RentCar']} >
                <div className={style['RentCar-title']}>
                    <Typography fontSize="caption2" color="white">{common.t('message.rentcar.title')}</Typography>
                </div>
                
                <FormGroup applyOnValidForm={handleAccessConfirm}>
                    <div className={style['RentCar-fields']} >
                        <div className={style['RentCar-fields-move-data']} >
                            <IconClick path={FieldIconPath.moveside} 
                                       widthSize={25}
                                       heightSize={25}/>
                            <div className={style['RentCar-fields-group']} >
                                <InputField  
                                    type={FieldTypeEnum.Text}  
                                    roundType={FieldRoundEnum.Left}
                                    placeholder={common.t('city-origin.placeholder')}   
                                    caption={common.t('city-origin.caption')}   
                                    iconLeft={FieldIconEnum.Circle}
                                />
                                <InputField  
                                    type={FieldTypeEnum.Text}  
                                    roundType={FieldRoundEnum.Right}
                                    placeholder={common.t('city-destiny.placeholder')}   
                                    caption={common.t('city-destiny.caption')}   
                                    iconLeft={FieldIconEnum.Location}
                                />
                            </div>                        
                        </div>
                        
                        <div className={style['RentCar-fields-group']} >
                            <CalendarField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Left}
                                placeholder={common.t('calendar.when.placeholder')}   
                                caption={common.t('calendar.go.caption')}   
                                iconLeft={FieldIconEnum.Calendar}
                                width="8vh"
                            />
                            <InputField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Right}
                                placeholder={common.t('input.time-pickup.placeholder')}   
                                caption={common.t('input.time-pickup.caption')}   
                                iconLeft={FieldIconEnum.Timer}
                                width="8vh"
                            />
                        </div>

                        <div className={style['RentCar-fields-group']} >
                            <CalendarField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Left}
                                placeholder={common.t('calendar.when.placeholder')}   
                                caption={common.t('calendar.go.caption')}   
                                iconLeft={FieldIconEnum.Calendar}
                                width="8vh"
                            />
                            <InputField  
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Right}
                                placeholder={common.t('input.time-pickup.placeholder')}   
                                caption={common.t('input.time-pickup.caption')}   
                                iconLeft={FieldIconEnum.Timer}
                                width="8vh"
                            />
                        </div>
                        
                    </div>
                    <div className={style['RentCar-fields']} >
                            <SwitchLight caption={common.t('switch-light.rent-a-car.caption')} />
                        </div>
                </FormGroup>
                
                <div className={style['RentCar-button-next']} >
                    <ButtonPrimary >
                        <Typography fontSize="button-primary" color="white">{common.t('button.next-process.caption')} </Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}

export default RentCar;
