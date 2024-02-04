

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
  text : {pattern:/./, regex:/./},
  password : {pattern:/./, regex:/./},
  number : {pattern:/./ , regex:/./},
  email : {pattern:/./ , regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/},
  date : {pattern:'00/00/0000', regex:/^\d{2}\/\d{2}\/\d{4}$/},
  radio : {pattern:/./, regex:/./},
  checkbox : {pattern:/./, regex:/./},
  phone : {pattern:'(00)0000-0000', regex:/^\(\d{2}\)\d{4}\-\d{4}$/}

}