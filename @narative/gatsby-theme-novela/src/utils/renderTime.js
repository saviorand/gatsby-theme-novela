export default function renderTime(param){
              switch (param) {
               case 1:
                 return param + " минуту"

                case 2:
                case 3:
                case 4:
                 return param + " минуты"
               
               default:
                 return param + " минут"
             }};