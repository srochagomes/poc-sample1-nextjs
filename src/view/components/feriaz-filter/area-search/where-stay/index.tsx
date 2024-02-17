
import ButtonPrimary from '@/view/components/button/primary-button';
import style from './whereStay.module.scss'
import Typography from '@/view/components/text-container/typography';
import FormGroup from '@/view/components/form/group';
import IconClick from '@/view/components/button/icon-click';
import InputField from '@/view/components/input/text';
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";

import CalendarField from '@/view/components/input/calendar';
import TripPeopleDetail from '@/view/components/input/trip/people-detail';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import FormManagerType from '@/types/structure/FormManageType';
import FormDiv from '@/view/components/form/div-container';
import { UseTranslationResponse } from 'react-i18next';

interface Props{

}

function WhereStay(props:Props) {
    const common = useTranslation('common');
    const [quantityPoint, setQuantityPoint] = useState<number>(1);
    const [removedPoints, setRemovedPoints] = useState<number[]>([]);
    const [periods, setPeriods] = useState<string[]>([]);
    let formManager: FormManagerType;

    const addQuantityPoint = (value:number) =>{

        setQuantityPoint(quantityPoint+value)

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

    const onValidForm = (formMng: FormManagerType):void=>{
        formManager = formMng;
    }

    const handleAccessConfirm = () =>{
        console.log('Valores', formManager.dataSource);
    }

    return (
            <div className={style['whereStay']} >
                <div className={style['whereStay-title']}>
                    <Typography fontSize="caption2" color="white">{common.t('message.wherestay.title')}</Typography>
                </div>
                
                <FormGroup applyOnValidForm={onValidForm}>
                    {createAreaForm(quantityPoint,common,addQuantityPoint,updateDates, getPeriod, removedPoints, addRemovedPoint)}
                </FormGroup>                    
                <div className={style['whereStay-button-next']} >
                    <ButtonPrimary onClick={handleAccessConfirm}>
                        <Typography fontSize="button-primary" color="white">{common.t('button.next-process.caption')} </Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}

export default WhereStay;


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
        
        <FormDiv key={`fields_${index}`} className={style['whereStay-fields']} >
            <FormDiv key={`fields-group1_${index}`} className={style['whereStay-broke-resolution']} >
                <FormDiv key={`resolution_${index}`} className={style['whereStay-fields-group']} >
                    <FormDiv key={`field-location2_${index}`} className={style['whereStay-field-location']} >
                        <InputField
                            key={`city_destiny_${index}`}
                            id={`city_destiny_${index}`}
                            type={FieldTypeEnum.Text}  
                            roundType={FieldRoundEnum.All}
                            placeholder={common.t('city-destiny.placeholder')}   
                            caption={common.t('city-destiny.caption')}   
                            iconLeft={FieldIconEnum.Location}
                        />

                    </FormDiv>
            
                </FormDiv>
            </FormDiv>
            
        
            <FormDiv key={`resolution2_${index}`} className={style['whereStay-broke-resolution']} >
        
                <FormDiv key={`fields-group2_${index}`} className={style['whereStay-fields-group']} >
                    
                    <FormDiv key={`field-period1_${index}`} className={style['whereStay-field-period']} >
                        <CalendarField 
                            key={`calendar_when_${index}`}                            
                            id={`calendar_when_${index}`}
                            linkTo={`calendar_back_${index}`} 
                            indexSelect={0}
                            roundType={FieldRoundEnum.Left}
                            placeholder={common.t('calendar.when.placeholder')}   
                            caption={common.t('calendar.go.caption')}   
                            iconLeft={FieldIconEnum.Calendar}
                            hasFlexibleDate={true}
                            monthsShow={2}       
                            updateDates={updateDates}                         
                            permitPeriodChoice={true}
                            dateValue={getPeriod(0)}
                            
                            
                        />
        
                    </FormDiv>
                    
                    <FormDiv key={`field-period2_${index}`} className={style['whereStay-field-period']} >
                        <CalendarField 
                            key={`calendar_back_${index}`}                                         
                            id={`calendar_back_${index}`}  
                            linkTo={`calendar_when_${index}`} 
                            indexSelect={1}
                            roundType={FieldRoundEnum.Right}
                            placeholder={common.t('calendar.when.placeholder')}   
                            caption={common.t('calendar.back.caption')}   
                            iconLeft={FieldIconEnum.Calendar}
                            hasFlexibleDate={true}
                            monthsShow={2}
                            updateDates={updateDates}
                            permitPeriodChoice={true}
                            dateValue={getPeriod(1)}
                        /> 
        
                    </FormDiv>
                </FormDiv>
            </FormDiv>
        
            <FormDiv key={`resolution3_${index}`} className={style['whereStay-broke-resolution']} >
        
                <FormDiv key={`fields-group2_${index}`} className={style['whereStay-fields-group']} >
                    <FormDiv key={`field-room_${index}`} className={style['whereStay-field-room']} >
                        <TripPeopleDetail  
                                key={`people_detail_${index}`}
                                id={`people_detail_${index}`}
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.All}
                                placeholder={common.t('trip-people-detail.component.placeholder')}   
                                caption={common.t('trip-people-detail.component.caption')}     
                                iconLeft={FieldIconEnum.User}
                                
                            />
        
                    </FormDiv>
                </FormDiv>
        
            </FormDiv>
            <div key={`button-plus_${index}`} className={style['whereStay-button-plus']} >
                <IconClick 
                            key={`button_plus_${index}`}
                        path={index==0?FieldIconPath.plus:FieldIconPath.minus} 
                        widthSize={30}
                        heightSize={30}
                        caption={index==0?common.t('button.patchs.caption'):''}  
                        captionColor="white"
                        onClick={()=> index ==0? add(1):addRemovedPoint(index)} // se for indice 0 adiciona, senão remove
                
                />
            </div> 
    </FormDiv>))} 
    </FormDiv>)
    
}
