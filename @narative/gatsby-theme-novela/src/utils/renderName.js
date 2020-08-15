export default function renderName(param){
  switch (param) {
   case "Andrey Varfolomeev":
     return "Андрей Варфоломеев"

    case "Reb Yesod":
     return "Реб Йесод"

    case "Valentin Erokhin":
      return "Валентин Ерохин"
    
    case "Eshu Marabo":
      return "Эшу Марабо"
  
    case "Petr Kromskih":
      return "Пётр Кромских"
      
    
    case "Alexey Flaviy":
      return "Алексей Флавий"

   default:
     return param
 }};
