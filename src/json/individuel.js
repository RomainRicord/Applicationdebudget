const data = require('../../assets/data.json');

export const individuel = () => {

    let expenses = []
    let incomes = []

    data.map((item, index) => {
        item.incomes.map((item2, index2) => {              
  
          //if (Number(item2.amount.replace("€","").replace(",","")) > 0) {
  
            if (typeof(incomes[index]) == "undefined") { 
                incomes[index] = 0
            }

            incomes[index] = Number(incomes[index]) + Number(item2.amount.replace("€","").replace(",",""))

          //}
  
        })

        item.expenses.map((item2, index2) => {              
  
          //if (Number(item2.amount.replace("€","").replace(",","")) > 0) {
  
            if (typeof(expenses[index]) == "undefined") {
                expenses[index] = 0
            }

            //console.log("MOINS")

            expenses[index] = Number(expenses[index]) + Number(item2.amount.replace("€","").replace(",",""))

          //}
  
        })
    })

    //console.log("Test",revenuuser)

    return {expenses,incomes}
}
