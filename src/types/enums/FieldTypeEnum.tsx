

export enum FieldTypeEnum {
  Text = "text",
  Password = "password",
  Number = "number",
  Email = "email",
  Date = "date",
  Radio = "radio",
  Checkbox = "checkbox",
  Phone = "phone"
}

export const FieldTypeDetail = {
  text : {pattern:/./},
  password : {pattern:/./},
  number : {pattern:/./},
  email : {pattern:/./},
  date : {pattern:'00/00/0000'},
  radio : {pattern:/./},
  checkbox : {pattern:/./},
  phone : {pattern:'(00)0000-0000'},

}