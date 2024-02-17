
import ButtonPrimary from '@/view/components/button/primary-button';
import style from './whereStayHowGo.module.scss'
import Typography from '@/view/components/text-container/typography';
import InputField from '@/view/components/input/text';
import { FieldIconPath } from "@/types/enums/FieldIconPath";
import { FieldIconEnum } from "@/types/enums/FieldIconEnum";
import { FieldTypeEnum } from "@/types/enums/FieldTypeEnum";
import { FieldRoundEnum } from "@/types/enums/FieldRoundEnum";
import SimpleDropdow from '@/view/components/input/dropdown/simple';
import IconClick from '@/view/components/button/icon-click';
import CalendarField from '@/view/components/input/calendar';
import TripPeopleDetail from '@/view/components/input/trip/people-detail';
import dropdownVeiculosItems from '@/types/sets/TripeVehicleSelect';
import { useTranslation } from 'next-i18next';
import FormGroup from '@/view/components/form/group';
import FormManagerType from '@/types/structure/FormManageType';
import { UseTranslationResponse } from 'react-i18next';
import { useState } from 'react';
import FormDiv from '@/view/components/form/div-container';



interface Props{

}


function WhereStayHowGo(props:Props) {
    const common = useTranslation('common');
    const [quantityPoint, setQuantityPoint] = useState<number>(1);
    const [removedPoints, setRemovedPoints] = useState<number[]>([]);
    const [periods, setPeriods] = useState<{[key: string]: string[]}>({});
    

    
    let formManager: FormManagerType;
    
    const handleAccessConfirm = () =>{

        console.log('Valores', formManager.dataSource);

    }

    const addQuantityPoint = (value:number) =>{

        setQuantityPoint(quantityPoint+value)

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

    const onValidForm = (formMng: FormManagerType):void=>{
        formManager = formMng;
    }



    return (
            <div className={style['whereStayHowGo']} >
                <div className={style['whereStayHowGo-title']}>
                    <Typography fontSize="caption2" color="white">{common.t('message.wherestayhowtogo.title')}</Typography>
                </div>
                
                <section>
                <FormGroup applyOnValidForm={onValidForm}>
                    {createAreaForm(quantityPoint,common,addQuantityPoint,updateDates, getPeriod, removedPoints, addRemovedPoint)}
                </FormGroup>    
    
                </section>
                
                <div className={style['whereStayHowGo-button-next']} >
                    <ButtonPrimary onClick={handleAccessConfirm}>
                        <Typography fontSize="button-primary" color="white">{common.t('button.next-process.caption')} </Typography>
                    </ButtonPrimary>
                </div>
            </div>
    )
}

export default WhereStayHowGo;


const createAreaForm = (quantity:number,
    common:UseTranslationResponse<'common',undefined>,
    add: (value:number)=>void,
    updateDates : (key:string,dates:string[]) => void,
    getPeriod : (key:string,index:number) => string,
    removedPoint: number[],
    addRemovedPoint: (index:number) => void ) => {
    return ( 
    <FormDiv>
       {Array.from({ length: quantity }, (_, index) => !removedPoint.includes(index) && (                
        
        <FormDiv key={`fields_${index}`} className={style['whereStayHowGo-fields']} >
        <FormDiv key={`fields-group1_${index}`} className={style['whereStayHowGo-broke-resolution']} >
            <FormDiv key={`resolution_${index}`} className={style['whereStayHowGo-fields-group']} >
                <FormDiv key={`fields-move-data1_${index}`} className={style['whereStayHowGo-fields-move-data']} >
                    <div key={`move-data-image1_${index}`} className={style['whereStayHowGo-fields-move-data-image']} />
                        
                    <FormDiv key={`field-location1_${index}`} className={style['whereStayHowGo-field-location']} >
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
                    <FormDiv key={`field-location2_${index}`} className={style['whereStayHowGo-field-location']} >
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
        
    
        <FormDiv key={`resolution2_${index}`} className={style['whereStayHowGo-broke-resolution']} >
    
            <FormDiv key={`fields-group2_${index}`} className={style['whereStayHowGo-fields-group']} >
                
                <FormDiv key={`field-period1_${index}`} className={style['whereStayHowGo-field-period']} >
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
                        permitPeriodChoice={true}
                        updateDates={updateDates}
                        idPeriodShared={`period_${index}`}
                        dateValue={getPeriod(`period_${index}`,0)}
                    />
    
                </FormDiv>
                
                <FormDiv key={`field-period2_${index}`} className={style['whereStayHowGo-field-period']} >
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
                        permitPeriodChoice={true}
                        updateDates={updateDates}
                        idPeriodShared={`period_${index}`}
                        dateValue={getPeriod(`period_${index}`,1)}
                    /> 
    
                </FormDiv>
            </FormDiv>
        </FormDiv>
    
        <FormDiv key={`resolution3_${index}`} className={style['whereStayHowGo-broke-resolution']} >
    
            <FormDiv key={`fields-group2_${index}`} className={style['whereStayHowGo-fields-group']} >
                <FormDiv key={`field-room_${index}`} className={style['whereStayHowGo-field-room']} >
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
    
            
            <FormDiv key={`fields-group3_${index}`} className={style['whereStayHowGo-fields-group']} >
                <FormDiv key={`resolution_${index}`} className={style['whereStayHowGo-field-vehicle']} >
                    <SimpleDropdow
                        key={`vehicle_${index}`}
                        id={`vehicle_${index}`}
                        roundType={FieldRoundEnum.All}
                        caption={common.t('simpledropdow.howtogo.caption')}                                   
                        
                        itens={dropdownVeiculosItems}/>                                
                </FormDiv>
            </FormDiv>
        </FormDiv>
        <div key={`button-plus_${index}`} className={style['whereStayHowGo-button-plus']} >
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
