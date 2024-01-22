
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
            <div className={style['rentCar']} >
                <div className={style['rentCar-title']}>
                    <Typography fontSize="caption2" color="white">{common.t('message.rentcar.title')}</Typography>
                </div>
                
                <FormGroup applyOnValidForm={handleAccessConfirm}>
                    <div className={style['rentCar-fields']} >
                        <div className={style['rentCar-broke-resolution']} >
                            <div className={style['rentCar-fields-group']} >
                                <div className={style['rentCar-fields-move-data']} >
                                     <div className={style['rentCar-fields-move-data-image']} />
                                        
                                    <div className={style['rentCar-field-location']} >
                                        <InputField  
                                            id='city_origem'
                                            type={FieldTypeEnum.Text}  
                                            roundType={FieldRoundEnum.Left}
                                            placeholder={common.t('city-origin.placeholder')}   
                                            caption={common.t('city-origin.caption')}   
                                            iconLeft={FieldIconEnum.Circle}
                                            
                                        />

                                    </div>
                                    <div className={style['rentCar-field-location']} >
                                        <InputField  
                                            id='city_destiny'
                                            type={FieldTypeEnum.Text}  
                                            roundType={FieldRoundEnum.Right}
                                            placeholder={common.t('city-destiny.placeholder')}   
                                            caption={common.t('city-destiny.caption')}   
                                            iconLeft={FieldIconEnum.Location}
                                        />

                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        

                        <div className={style['rentCar-broke-resolution']} >

                            <div className={style['rentCar-fields-group']} >
                                
                                <div className={style['rentCar-field-period']} >
                                    <CalendarField 
                                        id='calendar_when' 
                                        type={FieldTypeEnum.Text}  
                                        roundType={FieldRoundEnum.Left}
                                        placeholder={common.t('calendar.when.placeholder')}   
                                        caption={common.t('calendar.go.caption')}   
                                        iconLeft={FieldIconEnum.Calendar}
                                        hasFlexibleDate={true}
                                        monthsShow={2}                                
                                        permitPeriodChoice={true}
                                        
                                        
                                    />

                                </div>
                                
                                <div className={style['rentCar-field-time-pickup']} >
                                    <InputField 
                                            id='time_pickup_start' 
                                            type={FieldTypeEnum.Text}  
                                            roundType={FieldRoundEnum.Right}
                                            placeholder={common.t('input.time-pickup.placeholder')}   
                                            caption={common.t('input.time-pickup.caption')}   
                                            iconLeft={FieldIconEnum.Timer}                                            
                                        />

                                </div>
                            </div>
                        </div>

                        <div className={style['rentCar-broke-resolution']} >

                            <div className={style['rentCar-fields-group']} >
                                <div className={style['rentCar-field-period']} >
                                    <CalendarField 
                                            id='calendar_back' 
                                            type={FieldTypeEnum.Text}  
                                            roundType={FieldRoundEnum.Right}
                                            placeholder={common.t('calendar.when.placeholder')}   
                                            caption={common.t('calendar.back.caption')}   
                                            iconLeft={FieldIconEnum.Calendar}
                                            hasFlexibleDate={true}
                                            monthsShow={2}
                                            permitPeriodChoice={true}
                                            
                                        /> 
                                </div>
                            </div>

                            
                            <div className={style['rentCar-fields-group']} >
                                <div className={style['rentCar-field-time-pickup']} >
                                    <InputField 
                                        id='time_pickup_finish' 
                                        type={FieldTypeEnum.Text}  
                                        roundType={FieldRoundEnum.Right}
                                        placeholder={common.t('input.time-pickup.placeholder')}   
                                        caption={common.t('input.time-pickup.caption')}   
                                        iconLeft={FieldIconEnum.Timer}                                        
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                            
                    <div className={style['rentCar-fields']} >
                            <SwitchLight caption={common.t('switch-light.rent-a-car.caption')} />
                    </div>
                </FormGroup>
                
                <div className={style['rentCar-button-next']} >
                    <ButtonPrimary >
                        <Typography fontSize="button-primary" color="white">{common.t('button.next-process.caption')} </Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}

export default RentCar;
