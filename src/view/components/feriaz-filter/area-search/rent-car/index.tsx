
import ButtonPrimary from '@/view/components/button/primary-button';
import style from './RentCar.module.scss'
import Typography from '@/view/components/text-container/typography';
import FormGroup from '@/view/components/form/group';
import IconClick from '@/view/components/button/icon-click';
import InputField from '@/view/components/input/text';
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import SwitchLight from '@/view/components/input/switch';
import CalendarField from '@/view/components/input/calendar';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import FormManagerType from '@/types/structure/FormManageType';
import { UseTranslationResponse } from 'react-i18next';
import FormDiv from '@/view/components/form/div-container';

interface Props{

}

function RentCar(props:Props) {
    const common = useTranslation('common');
    const [quantityPoint, setQuantityPoint] = useState<number>(1);
    const [removedPoints, setRemovedPoints] = useState<number[]>([]);
    const [periods, setPeriods] = useState<{[key: string]: string[]}>({});

    
    let formManager: FormManagerType;
    
    const handleAccessConfirm = () =>{

        console.log('Valores', formManager.dataSource);
    }

    const addRemovedPoint = (indexPoint:number) =>{
        console.log('indice ', indexPoint);
        setRemovedPoints((element)=> [...element, indexPoint]);
    }


    const getPeriod = (key:string, index:number) : string => {
        if (key in periods){
            let period = periods[key];
            if (index >= period.length) return '';
            return period[index];
        }
        return '';
    }


    const updateDates = (key:string, dates:string[]) : void => {
        if (key in periods){
            let period = periods[key];
            period.length = 0;
            period.push(...dates);
        }else{
            const newPeriods = { ...periods, [key]: dates };            
            setPeriods(newPeriods);
        }
    }


    const addQuantityPoint = (value:number) =>{

        setQuantityPoint(quantityPoint+value)

    }

    const onValidForm = (formMng: FormManagerType):void=>{
        formManager = formMng;
    }


    return (
            <div className={style['rentCar']} >
                <div className={style['rentCar-title']}>
                    <Typography fontSize="caption2" color="white">{common.t('message.rentcar.title')}</Typography>
                </div>
                
                <FormGroup applyOnValidForm={onValidForm}>
                    {createAreaForm(quantityPoint,common,addQuantityPoint,updateDates, getPeriod, removedPoints, addRemovedPoint)}
                </FormGroup>    
                
                <div className={style['rentCar-button-next']} >
                    <ButtonPrimary onClick={handleAccessConfirm}>
                        <Typography fontSize="button-primary" color="white">{common.t('button.next-process.caption')} </Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}

export default RentCar;


const createAreaForm = (quantity:number,
    common:UseTranslationResponse<'common',undefined>,
    add: (value:number)=>void,
    updateDates : (key:string, dates:string[]) => void,
    getPeriod : (key:string, index:number) => string,
    removedPoint: number[],
    addRemovedPoint: (index:number) => void ) => {
    return ( 
    <FormDiv>
       {Array.from({ length: quantity }, (_, index) => !removedPoint.includes(index) && (                

        <FormDiv key={`form_${index}`}>
        <FormDiv key={`fields_${index}`} className={style['rentCar-fields']} >
        <FormDiv key={`fields-group1_${index}`} className={style['rentCar-broke-resolution']} >
            <FormDiv key={`resolution_${index}`} className={style['rentCar-fields-group']} >
                <FormDiv key={`fields-move-data1_${index}`} className={style['rentCar-fields-move-data']} >
                    <div key={`move-data-image1_${index}`} className={style['rentCar-fields-move-data-image']} />
                        
                    <FormDiv key={`field-location1_${index}`} className={style['rentCar-field-location']} >
                        <InputField
                            key={`city_origem_${index}`}
                            id={`city_origem_${index}`}
                            type={FieldTypeEnum.Text}  
                            roundType={FieldRoundEnum.Left}
                            placeholder={common.t('city-origin.placeholder')}   
                            caption={common.t('city-origin.caption')}   
                            iconLeft={FieldIconEnum.Circle}
                            
                        />
    
                    </FormDiv>
                    <FormDiv key={`field-location2_${index}`} className={style['rentCar-field-location']} >
                        <InputField
                            key={`city_destiny_${index}`}
                            id={`city_destiny_${index}`}
                            type={FieldTypeEnum.Text}  
                            roundType={FieldRoundEnum.Right}
                            placeholder={common.t('city-destiny.placeholder')}   
                            caption={common.t('city-destiny.caption')}   
                            iconLeft={FieldIconEnum.Location}
                        />
    
                    </FormDiv>
                </FormDiv>
            
            </FormDiv>
        </FormDiv>
        
    
        <FormDiv key={`resolution2_${index}`} className={style['rentCar-broke-resolution']} >
    
            <FormDiv key={`fields-group2_${index}`} className={style['rentCar-fields-group']} >
                
                <FormDiv key={`field-period1_${index}`} className={style['rentCar-field-period']} >
                    <CalendarField 
                        key={`calendar_when_${index}`}                            
                        id={`calendar_when_${index}`}                            
                        roundType={FieldRoundEnum.Left}
                        placeholder={common.t('calendar.when.placeholder')}   
                        caption={common.t('calendar.go.caption')}   
                        iconLeft={FieldIconEnum.Calendar}
                        hasFlexibleDate={true}
                        monthsShow={2}                                
                        permitPeriodChoice={true}
                        linkTo={`calendar_back_${index}`} 
                        indexSelect={0}
                        updateDates={updateDates}
                        idPeriodShared={`period_${index}`}
                        dateValue={getPeriod(`period_${index}`,0)}

                    />
    
                </FormDiv>
                
                <FormDiv key={`field-period2_${index}`} className={style['rentCar-field-time-pickup']} >
                        <InputField 
                                key={`time_pickup_start_${index}`}                            
                                id={`time_pickup_start_${index}`}                            
                                type={FieldTypeEnum.Text}  
                                roundType={FieldRoundEnum.Right}
                                placeholder={common.t('input.time-pickup.placeholder')}   
                                caption={common.t('input.time-pickup.caption')}   
                                iconLeft={FieldIconEnum.Timer}                                            
                            />
    
                </FormDiv>
            </FormDiv>
        </FormDiv>
    
        <FormDiv key={`resolution3_${index}`} className={style['rentCar-broke-resolution']} >
    
            <FormDiv key={`fields-group3_${index}`} className={style['rentCar-fields-group']} >
                
                <FormDiv key={`field-period3_${index}`} className={style['rentCar-field-period']} >
                    <CalendarField 
                            key={`calendar_back_${index}`}                                         
                            id={`calendar_back_${index}`}                                         
                            roundType={FieldRoundEnum.Left}
                            placeholder={common.t('calendar.when.placeholder')}   
                            caption={common.t('calendar.back.caption')}   
                            iconLeft={FieldIconEnum.Calendar}
                            hasFlexibleDate={true}
                            monthsShow={2}
                            permitPeriodChoice={true}
                            linkTo={`calendar_when_${index}`} 
                            indexSelect={1}
                            updateDates={updateDates}
                            idPeriodShared={`period_${index}`}
                            dateValue={getPeriod(`period_${index}`,1)}
                        /> 
    
                </FormDiv>
                
                <FormDiv key={`field-period4_${index}`} className={style['rentCar-field-time-pickup']} >
                        <InputField 
                            key={`time_pickup_finish_${index}`}                            
                            id={`time_pickup_finish_${index}`}                            
                            type={FieldTypeEnum.Text}  
                            roundType={FieldRoundEnum.Right}
                            placeholder={common.t('input.time-pickup.placeholder')}   
                            caption={common.t('input.time-pickup.caption')}   
                            iconLeft={FieldIconEnum.Timer}                                        
                        />
    
                </FormDiv>
            </FormDiv>
        </FormDiv>
    </FormDiv>
    <FormDiv key={`rentCar-fields_${index}`} className={style['rentCar-fields']} >
            <SwitchLight 
                key={`place_toback_${index}`}                            
                id={`place_toback_${index}`}                            
                caption={common.t('switch-light.rent-a-car.caption')} />
    </FormDiv>
    </FormDiv> ))} 
    </FormDiv>)
    
}

