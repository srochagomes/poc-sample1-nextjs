
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
import { useState } from 'react';
import FormManagerType from '@/types/structure/FormManageType';
import { UseTranslationResponse } from 'react-i18next';
import FormDiv from '@/view/components/form/div-container';

interface Props{

}

function DestinyDiscovery(props:Props) {
    const common = useTranslation('common');
    const [quantityPoint, setQuantityPoint] = useState<number>(1);
    const [removedPoints, setRemovedPoints] = useState<number[]>([]);
    const [periods, setPeriods] = useState<string[]>([]);

    
    let formManager: FormManagerType;
    
    const handleAccessConfirm = () =>{
        console.log('Valores', formManager.dataSource);
    }

    const addRemovedPoint = (indexPoint:number) =>{
        console.log('indice ', indexPoint);
        setRemovedPoints((element)=> [...element, indexPoint]);
    }


    const getPeriod = (index:number) : string => {
        if (index >= periods.length) return '';
        return periods[index];
    }


    const updateDates = (dates:string[]) : void => {
        setPeriods(dates);
    }


    const addQuantityPoint = (value:number) =>{
        setQuantityPoint(quantityPoint+value);
    }

    const onValidForm = (formMng: FormManagerType):void=>{
        formManager = formMng;
    }




    return (
            <div className={style['destinyDiscovery']} >
                <div className={style['destinyDiscovery-title']}>
                    <Typography fontSize="caption2" color="white">{common.t('message.destiny-discovery.title')}</Typography>
                </div>
                <FormGroup applyOnValidForm={onValidForm}>
                    {createAreaForm(quantityPoint,common,addQuantityPoint,updateDates, getPeriod, removedPoints, addRemovedPoint)}
                </FormGroup>    
                
                <div className={style['destinyDiscovery-button-next']} >
                    <ButtonPrimary onClick={handleAccessConfirm}>
                        <Typography fontSize="button-primary" color="white">{common.t('button.next-process.caption')} </Typography>
                    </ButtonPrimary>
                </div>

            </div>
    )
}

export default DestinyDiscovery;


const createAreaForm = (quantity:number,
    common:UseTranslationResponse<'common',undefined>,
    add: (value:number)=>void,
    updateDates : (dates:string[]) => void,
    getPeriod : (index:number) => string,
    removedPoint: number[],
    addRemovedPoint: (index:number) => void ) => {
    return ( 
    <FormDiv>
       {Array.from({ length: quantity }, (_, index) => !removedPoint.includes(index) && (                
        
        <FormDiv key={`fields_${index}`} className={style['destinyDiscovery-fields']} >
                        
            <FormDiv key={`fields_group_place1_${index}`} className={style['destinyDiscovery-fields-group-place']} >
            
                <FormDiv key={`fields_group1_${index}`} className={style['destinyDiscovery-fields-group']} >
                    <FormDiv key={`field1_${index}`} className={style['destinyDiscovery-field-location']} >
                        <InputField  
                            key={`city_origem_${index}`}
                            id={`city_origem_${index}`}
                            type={FieldTypeEnum.Text}                                      
                            placeholder={common.t('city-origin.placeholder')}   
                            caption={common.t('city-origin.caption')}   
                            iconLeft={FieldIconEnum.Circle}
                        />
                    </FormDiv>
                </FormDiv>
                <FormDiv key={`fields_group2_${index}`} className={style['destinyDiscovery-fields-group']} >
                    <FormDiv key={`field2_${index}`} className={style['destinyDiscovery-field-budget']} >
                        <InputField  
                            key={`budget_${index}`}
                            id={`budget_${index}`}
                            type={FieldTypeEnum.Money}                                      
                            placeholder={common.t('budget-preview.placeholder')}   
                            caption={common.t('budget-preview.caption')}   
                            iconLeft={FieldIconEnum.Money}                                            
                        />
                    </FormDiv>
            
                    <FormDiv key={`field3_${index}`} className={style['destinyDiscovery-field-room']} >
                        <TripPeopleDetail 
                            key={`people_detail_${index}`}
                            id={`people_detail_${index}`}
                            type={FieldTypeEnum.Text}                                  
                            placeholder={common.t('trip-people-detail.component.placeholder')}   
                            caption={common.t('trip-people-detail.component.caption')}     
                            iconLeft={FieldIconEnum.User}                                                                                
                        />

                    </FormDiv>
                </FormDiv>
            </FormDiv>
            <FormDiv key={`fields_group_place2_${index}`} className={style['destinyDiscovery-fields-group-place']} >
                <FormDiv key={`fields_group3_${index}`} className={style['destinyDiscovery-fields-group']} >
                    <FormDiv key={`field4_${index}`} className={style['destinyDiscovery-field-period']} >
                        <CalendarField  
                                key={`calendar_when_${index}`}                            
                                id={`calendar_when_${index}`}                            
                                placeholder={common.t('calendar.when.placeholder')}   
                                caption={common.t('calendar.go.caption')}   
                                iconLeft={FieldIconEnum.Calendar}
                                hasFlexibleDate={true}
                                monthsShow={2}
                                permitPeriodChoice={true}    
                                linkTo={`calendar_back_${index}`} 
                                indexSelect={0}
                                updateDates={updateDates}
                                dateValue={getPeriod(0)}
        
                            />
                    </FormDiv>

                    <FormDiv key={`field5_${index}`} className={style['destinyDiscovery-field-period']} >
                        <CalendarField  
                            key={`calendar_back_${index}`}                                         
                            id={`calendar_back_${index}`}                                         
                            placeholder={common.t('calendar.when.placeholder')}   
                            caption={common.t('calendar.back.caption')}   
                            iconLeft={FieldIconEnum.Calendar}
                            hasFlexibleDate={true}
                            monthsShow={2}
                            permitPeriodChoice={true}    
                            linkTo={`calendar_when_${index}`} 
                            indexSelect={1}
                            updateDates={updateDates}
                            dateValue={getPeriod(1)}

                        />                                    
                    </FormDiv>                                
                </FormDiv>
        
                <FormDiv key={`fields_group4_${index}`} className={style['destinyDiscovery-fields-group']} >
                    <FormDiv key={`field6_${index}`} className={style['destinyDiscovery-field-room']} >
                        <MultipleCheckDropdow   
                            key={`type_room_${index}`}                                         
                            id={`type_room_${index}`}                                         
                            iconLeftPath={FieldIconPath[FieldIconEnum.TypeRoom]}                            
                            caption={common.t('simpledropdow.type-room.caption')}                                        
                            itens={typeRoomsItems}/>
                    </FormDiv>
                    
                    <FormDiv key={`field7_${index}`} className={style['destinyDiscovery-field-vehicle']} >
                        <SimpleDropdow
                            key={`vehicle_${index}`}
                            id={`vehicle_${index}`}
                            caption={common.t('simpledropdow.howtogo.caption')}                                        
                            itens={dropdownVeiculosItems}/>

                    </FormDiv>
                </FormDiv>                            
            
            </FormDiv>
        </FormDiv>))} 
    </FormDiv>)
    
}
