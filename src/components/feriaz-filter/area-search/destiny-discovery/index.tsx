
import ButtonPrimary from '@/components/button/primary-button';
import style from './DestinyDiscovery.module.scss'
import Typography from '@/components/text/typography';
import { useTranslation } from 'next-i18next';
import FormGroup from '@/components/form/group';
import InputField from '@/components/input/text';
import { FieldTypeEnum } from '@/types/enums/FieldTypeEnum';
import { FieldIconEnum } from '@/types/enums/FieldIconEnum';
import CalendarField from '@/components/input/calendar';
import TripPeopleDetail from '@/components/input/trip/people-detail';
import SimpleDropdow from '@/components/input/dropdow/simple';
import dropdownVeiculosItems from '@/types/date/TripeVehicleSelect';

interface Props{

}

function DestinyDiscovery(props:Props) {
    const common = useTranslation('common');

    const handleAccessConfirm = () =>{

    }


    return (
            <div className={style['destinyDiscovery']} >
                <div className={style['destinyDiscovery-title']}>
                    <Typography fontSize="caption2" color="white">{common.t('message.destiny-discovery.title')}</Typography>
                </div>
                <FormGroup applyOnValidForm={handleAccessConfirm}>
                    <div className={style['destinyDiscovery-fields']} >
                        
                            <div className={style['destinyDiscovery-fields-group-place']} >
                            
                                <div className={style['destinyDiscovery-fields-group']} >
                                    <InputField  
                                        id='city_origin'
                                        type={FieldTypeEnum.Text}                                      
                                        placeholder={common.t('city-origin.placeholder')}   
                                        caption={common.t('city-origin.caption')}   
                                        iconLeft={FieldIconEnum.Circle}
                                        width='30vw'
                                        
                                    />
                                </div>
                                <div className={style['destinyDiscovery-fields-group']} >
                                    <InputField  
                                        id='budget'
                                        type={FieldTypeEnum.Text}                                      
                                        placeholder={common.t('budget-preview.placeholder')}   
                                        caption={common.t('budget-preview.caption')}   
                                        iconLeft={FieldIconEnum.Money}
                                        width='15vw'
                                    />
                            
                                    <TripPeopleDetail 
                                        id='people_detail' 
                                        type={FieldTypeEnum.Text}                                  
                                        placeholder={common.t('trip-people-detail.component.placeholder')}   
                                        caption={common.t('trip-people-detail.component.caption')}     
                                        iconLeft={FieldIconEnum.User}                                    
                                        width='15vw'
                                    />
                                </div>
                            </div>
                            <div className={style['destinyDiscovery-fields-group-place']} >
                                <div className={style['destinyDiscovery-fields-group']} >
                                    <CalendarField  
                                            id='calendar_when'
                                            type={FieldTypeEnum.Text}  
                                            placeholder={common.t('calendar.when.placeholder')}   
                                            caption={common.t('calendar.go.caption')}   
                                            iconLeft={FieldIconEnum.Calendar}
                                            hasFlexibleDate={true}
                                            monthsShow={2}
                                            permitPeriodChoice={true}
                                            width='13vw'
                                        />
                                
                                    <CalendarField  
                                        id='calendar_back'
                                        type={FieldTypeEnum.Text}                                      
                                        placeholder={common.t('calendar.when.placeholder')}   
                                        caption={common.t('calendar.back.caption')}   
                                        iconLeft={FieldIconEnum.Calendar}
                                        hasFlexibleDate={true}
                                        monthsShow={2}
                                        permitPeriodChoice={true}
                                        width='13vw'
                                    />
                                </div>
                        
                                <div className={style['destinyDiscovery-fields-group']} >
                                    <SimpleDropdow   
                                        id='type_room'                             
                                        caption={common.t('simpledropdow.type-room.caption')}                                        
                                        itens={dropdownVeiculosItems}
                                        width='13vw'/>
                                    <SimpleDropdow
                                        id='vehicles'                                
                                        caption={common.t('simpledropdow.howtogo.caption')}                                        
                                        itens={dropdownVeiculosItems}
                                        width='13vw'/>
                                </div>                            
                            
                            </div>
                            
                       
                    </div>
                </FormGroup>
                
                <div className={style['destinyDiscovery-button-next']} >
                    <ButtonPrimary >
                        <Typography fontSize="button-primary" color="white">{common.t('button.next-process.caption')} </Typography>
                    </ButtonPrimary>
                </div>

            </div>
    )
}

export default DestinyDiscovery;
