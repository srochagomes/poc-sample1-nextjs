import { parse, isValid } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';

const DateOperations = {
    getCurrentMonth : () => {
      const currentDate = new Date();
      return currentDate.getMonth() + 1; // Adicionamos 1 porque os meses são indexados de 0 a 11
    },

    getMonthFromDate : (date:Date) => {
      return date.getMonth() + 1;
    },
  
    getDayFromDate : (date:Date) => {
      return date.getDate();
    },
    getYearFromDate : (date:Date) => {
        return date.getFullYear();
    },
  
    getDayOfWeekFromDate : (date:Date) => {
      const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
      return daysOfWeek[date.getDay()];
    },
  
    subtractMonths : (date:Date, months:number) => {
      const newDate = new Date(date);
      newDate.setMonth(date.getMonth() - months);
      return newDate;
    },  
    addMonths: (date:Date, months:number) => {
      const newDate = new Date(date);
      newDate.setMonth(date.getMonth() + months);
      return newDate;
    },
    subtractDays: (date:Date, days:number) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - days);
        return newDate;
    },
    
    addDays: (date:Date, days:number) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
    },
    subtractYears: (date:Date, years:number) => {
        const newDate = new Date(date);
        newDate.setFullYear(date.getFullYear() - years);
        return newDate;
    },
    addYears: (date:Date, years:number) => {
        const newDate = new Date(date);
        newDate.setFullYear(date.getFullYear() + years);
        return newDate;
    },
    getCurrentYear: () => {
        const date = new Date();
        return date.getFullYear();
    },

    toDate: (date:DateFields) : Date => {
        const yearData = date.year?date.year:DateOperations.getCurrentYear(); 
        const monthData = date.month?date.month:DateOperations.getCurrentMonth();
        const dayData = date.day?date.day:1;
        
        return new Date(yearData, monthData-1, dayData);
    },
    
    formatDate: (valorLong: number, codigoIdioma:string) :string|null => {    
      const data = new Date(valorLong);
      if (isNaN(data.getTime())) {
        return null; // Retorna null se a data for inválida
      }
      return data.toLocaleDateString(codigoIdioma);
    },
    parseLocalizedDate: (dateString:string,formatDate:string, locale:string) :Date|null  => {
      const parsedDate = 
      locale === 'ptBR'?
          parse(dateString, formatDate, new Date(), { locale: ptBR})
          :parse(dateString, formatDate, new Date(), { locale: enUS});
      return isValid(parsedDate) ? parsedDate : null;
    }
    
  
}

export interface DateFields{
    day?:number;
    month?:number;
    year?:number;
}

export default DateOperations;


