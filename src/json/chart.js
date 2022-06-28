

import dayjs from 'dayjs'

export const chart = (expenses_array,incomes_array) => {

    let incomes = []
    let expenses = []

    incomes_array.map((item2, index) => {             

        if (typeof(incomes[index]) == "undefined") {
            incomes[index] = []
        }
        
        
        const n = Math.ceil(Number(item2._data.amount))

        incomes[index].push({date:item2._data.date,amount:n})

    })

    expenses_array.map((item2, index) => {          

        if (typeof(expenses[index]) == "undefined") {
            expenses[index] = []
        }
        
        const n = Math.ceil(Number(item2._data.amount))

        expenses[index].push({date:item2._data.date,amount:n})

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

    incomes.map((item, index) => {              

        item.map((item2,index2) => {

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

        item.map((item2,index2) => {

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

