import FieldData from "./FieldData";


export default interface FormManagerType{
    dataSource : FieldData[],
    isValidFields : () => boolean,
    applyValidation: ()  => void,

}