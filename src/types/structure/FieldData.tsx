export default interface FieldData{
    name:string
    value:string
    isValid: ()=> boolean
    applyValidation: ()=> void
}