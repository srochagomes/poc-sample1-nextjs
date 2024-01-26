import React from "react";
import style from "./GroupForm.module.scss"


interface FormProps {    
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
  }



function FormGroup(props:FormProps) {
    
    const {children } = props;

    

    return (
      <section className={style.formGroup}>
        {children}
      </section>
    );
}

export default FormGroup;