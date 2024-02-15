import React, { useEffect } from "react";
import style from "./GroupForm.module.scss"
import InputField, { FieldsProps } from "@/view/components/input/text";
import FieldData from "@/types/structure/FieldData";
import CalendarField from "@/view/components/input/calendar";
import FormDiv from "@/view/components/form/div-container";

import FormManagerType from "@/types/structure/FormManageType";
import SwitchLight from "../../input/switch";
import StepperControl from "../../input/stepper";
import RadioButtonList from "../../input/radiobutton/common";
import SimpleDropdow from "../../input/dropdown/simple";
import MultipleCheckDropdow from "../../input/dropdown/multiple-check";
import CheckboxList from "../../input/checkbox/common";
import TripPeopleDetail from "../../input/trip/people-detail";

interface FormProps {    
    children?: React.ReactNode;    
    applyOnValidForm?: (data:FormManagerType)=>void;
  }



function FormGroup(props:FormProps) {
    const {applyOnValidForm} = props;
    const dataSource : FieldData[] = [];
    const typesDataSources = [CalendarField,InputField,FormDiv, TripPeopleDetail, CheckboxList, MultipleCheckDropdow, SimpleDropdow, RadioButtonList, StepperControl, SwitchLight];

    const isDataSourcesComponents = (element:React.ReactNode):boolean => {
      // Verifica se o elemento é um elemento React válido
      if (React.isValidElement(element)) { 
        return typesDataSources.some((typeComponent) => element.type === typeComponent);  
      }
      return false;
    };

    const isValidFields = () : boolean => {
      const errorsValid = dataSource.filter((item) => !item.isValid());
          
      if (errorsValid.length===0){
          return true;
      }
      
      return false;
    }

    const applyValidation = () : void  => {  
      const errorsValid = dataSource.filter((item) => !item.isValid());
      errorsValid.forEach(item=>item.applyValidation());
    }

    const formManager : FormManagerType = {
      dataSource,
      isValidFields,
      applyValidation  
    }

    useEffect(() => {            
      if (applyOnValidForm){      
        applyOnValidForm(formManager);
      }      
    }, [dataSource]);
  
  
    const {children } = props;

    const propsChanged = {dataSource, children}
    
      
    const modifiedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
          if (isDataSourcesComponents(child)){
            return React.cloneElement(child, {...propsChanged,...child.props});
          }
      }
      return child;
    });

  
  

    return (
      <section className={style.formGroup}>
        {modifiedChildren}
      </section>
    );
}

export default FormGroup;