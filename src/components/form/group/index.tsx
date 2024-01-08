import React from "react";
import style from "./GroupForm.module.scss"


interface FormProps {    
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
    applyOnValidForm?: (data:any)=>void;

  }



function FormGroup(props:FormProps) {
    const { styleSheet, applyOnValidForm } = props;
    const {children } = props;

    let propsChanged = { ...props}
    delete propsChanged.applyOnValidForm;
    
    const validForm = () => {  
      
      if(applyOnValidForm){
        applyOnValidForm(null)     
      }
      
  };
    const modifiedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement<FormProps>(child)) {
            return React.cloneElement<FormProps>(child, {...propsChanged,...child.props});
        }
        return child;
    });

    return (
      <section className={style.formGroup} {...propsChanged}>
        {modifiedChildren}
      </section>
    );
}

export default FormGroup;