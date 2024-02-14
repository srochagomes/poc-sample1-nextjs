import React, { useEffect } from "react";
import InputField from "@/view/components/input/text";
import FieldData from "@/types/structure/FieldData";
import CalendarField from "@/view/components/input/calendar";


interface FormProps {    
  dataSource?: FieldData[],
  children?: React.ReactNode,
  className?:string    
}



function FormDiv(props:FormProps) {
  
  const {dataSource, children} = props;
  const typesDataSources = [CalendarField,InputField,FormDiv];

  const isDataSourcesComponents = (element:React.ReactNode):boolean => {
    // Verifica se o elemento é um elemento React válido
    if (React.isValidElement(element)) { 
      return typesDataSources.some((typeComponent) => element.type === typeComponent);  
    }
    return false;
  }; 

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
    <div className={props.className}>
      {modifiedChildren}
    </div>
  );
}

export default FormDiv;