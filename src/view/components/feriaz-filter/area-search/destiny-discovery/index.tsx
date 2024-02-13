
import ButtonPrimary from '@/view/components/button/primary-button';
import style from './DestinyDiscovery.module.scss'
import Typography from '@/view/components/text-container/typography';
import { useTranslation } from 'next-i18next';
import FormGroup from '@/view/components/form/group';
import InputField from '@/view/components/input/text';
import { FieldTypeEnum } from '@/types/enums/FieldTypeEnum';
import { FieldIconEnum } from '@/types/enums/FieldIconEnum';
import CalendarField from '@/view/components/input/calendar';
import TripPeopleDetail from '@/view/components/input/trip/people-detail';
import SimpleDropdow from '@/view/components/input/dropdown/simple';

import MultipleCheckDropdow from '@/view/components/input/dropdown/multiple-check';
import dropdownVeiculosItems from '@/types/sets/TripeVehicleSelect';
import { FieldIconPath } from '@/types/enums/FieldIconPath';
import typeRoomsItems from '@/types/sets/TypeRoomsSelect';

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
                <FormGroup >
                    <div className={style['destinyDiscovery-fields']} >
                        
                            <div className={style['destinyDiscovery-fields-group-place']} >
                            
                                <div className={style['destinyDiscovery-fields-group']} >
                                    <div className={style['destinyDiscovery-field-location']} >
                                        <InputField  
                                            id='city_origin'
                                            type={FieldTypeEnum.Text}                                      
                                            placeholder={common.t('city-origin.placeholder')}   
                                            caption={common.t('city-origin.caption')}   
                                            iconLeft={FieldIconEnum.Circle}
                                        />
                                    </div>
                                </div>
                                <div className={style['destinyDiscovery-fields-group']} >
                                    <div className={style['destinyDiscovery-field-budget']} >
                                        <InputField  
                                            id='budget'
                                            type={FieldTypeEnum.Text}                                      
                                            placeholder={common.t('budget-preview.placeholder')}   
                                            caption={common.t('budget-preview.caption')}   
                                            iconLeft={FieldIconEnum.Money}                                            
                                        />
                                    </div>
                            
                                    <div className={style['destinyDiscovery-field-room']} >
                                        <TripPeopleDetail 
                                            id='people_detail' 
                                            type={FieldTypeEnum.Text}                                  
                                            placeholder={common.t('trip-people-detail.component.placeholder')}   
                                            caption={common.t('trip-people-detail.component.caption')}     
                                            iconLeft={FieldIconEnum.User}                                                                                
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className={style['destinyDiscovery-fields-group-place']} >
                                <div className={style['destinyDiscovery-fields-group']} >
                                    <div className={style['destinyDiscovery-field-period']} >
                                        <CalendarField  
                                                id='calendar_when'                                               
                                                placeholder={common.t('calendar.when.placeholder')}   
                                                caption={common.t('calendar.go.caption')}   
                                                iconLeft={FieldIconEnum.Calendar}
                                                hasFlexibleDate={true}
                                                monthsShow={2}
                                                permitPeriodChoice={true}                                                
                                            />
                                    </div>

                                    <div className={style['destinyDiscovery-field-period']} >
                                        <CalendarField  
                                            id='calendar_back'                                                                    
                                            placeholder={common.t('calendar.when.placeholder')}   
                                            caption={common.t('calendar.back.caption')}   
                                            iconLeft={FieldIconEnum.Calendar}
                                            hasFlexibleDate={true}
                                            monthsShow={2}
                                            permitPeriodChoice={true}                                          
                                        />                                    
                                    </div>                                
                                </div>
                        
                                <div className={style['destinyDiscovery-fields-group']} >
                                    <div className={style['destinyDiscovery-field-room']} >
                                        <MultipleCheckDropdow   
                                            id='type_room' 
                                            iconLeftPath={FieldIconPath[FieldIconEnum.TypeRoom]}                            
                                            caption={common.t('simpledropdow.type-room.caption')}                                        
                                            itens={typeRoomsItems}/>
                                    </div>
                                    
                                    <div className={style['destinyDiscovery-field-vehicle']} >
                                        <SimpleDropdow
                                            id='vehicles'                                
                                            caption={common.t('simpledropdow.howtogo.caption')}                                        
                                            itens={dropdownVeiculosItems}/>

                                    </div>
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
