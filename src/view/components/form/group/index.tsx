import React from "react";
import style from "./GroupForm.module.scss"
import { FieldsProps } from "../../input/text";


interface FormProps {    
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
    applyOnValidForm?: (data:any)=>void;
  }



function FormGroup(props:FormProps) {
  const [dataForm, setDataForm] = React.useState({});
  const [dataFormErrors, setDataFormErrors] =  React.useState({});
    const {children } = props;

    const propsChanged = {dataForm,  dataFormErrors, ...props}
      
    const modifiedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement<FieldsProps>(child)) {
          return React.cloneElement<FieldsProps>(child, {...propsChanged,...child.props});
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