import data from '../../assets/data.json';

import dayjs from 'dayjs'

export const chart = (userselected) => {

    let incomes = []
    let expenses = []



        data[userselected].incomes.map((item2, index) => {             
  
            if (typeof(incomes[index]) == "undefined") {
                incomes[index] = []
            }
            
            
            const n = Math.ceil(Number(item2.amount.replace("€","").replace(",","")))

            incomes[index].push({date:item2.date,amount:n})
  
        })

        data[userselected].expenses.map((item2, index) => {          
  
            if (typeof(expenses[index]) == "undefined") {
                expenses[index] = []
            }
            
            
            const n = Math.ceil(Number(item2.amount.replace("€","").replace(",","")))

            expenses[index].push({date:item2.date,amount:n})
  
        })



    let line = {
        labels: ['01','02',"03","04","05","06","07","08","09","10","11","12","13"],
        datasets: [
          {
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0],
            strokeWidth: 1, // optional
          },
        ],
      };

      let line2 = {
        labels: ['01','02',"03","04","05","06","07","08","09","10","11","12","13"],
        datasets: [
          {
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0],
            strokeWidth: 1, // optional
          },
        ],
      };

      console.log("DATA = ",line.datasets[0].data)

    incomes.map((item, index) => {              

        //console.log(item)

        item.map((item2,index2) => {

            //console.log(dayjs(item2.date).locale('fr-FR').format('MM'),Math.ceil(item2.amount))

            let indexor = String(dayjs(item2.date).locale('fr-FR').format('MM'))

            if (indexor.charAt(0) == "0") {
                indexor.replace(indexor.charAt(0),"")
            }

            indexor = Number(indexor)-1

            if (typeof(line.datasets[0].data[indexor]) == "undefined") {
                line.datasets[0].data[indexor] = 0
            }

            line.datasets[0].data[indexor] = Math.ceil(line.datasets[0].data[indexor] + Math.ceil(item2.amount))

        })

    })

    expenses.map((item, index) => {              

        //console.log(item)

        item.map((item2,index2) => {

            //console.log(dayjs(item2.date).locale('fr-FR').format('MM'),Math.ceil(item2.amount))

            let indexor = String(dayjs(item2.date).locale('fr-FR').format('MM'))

            if (indexor.charAt(0) == "0") {
                indexor.replace(indexor.charAt(0),"")
            }

            indexor = Number(indexor)-1

            if (typeof(line2.datasets[0].data[indexor]) == "undefined") {
                line2.datasets[0].data[indexor] = 0
            }

            line2.datasets[0].data[indexor] = Math.ceil(line2.datasets[0].data[indexor] + Math.ceil(item2.amount))

        })

    })  

    return {line,line2}
}

