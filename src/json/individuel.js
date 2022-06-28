

export const individuel = () => {

    let expenses = []
    let incomes = []

    data.map((item, index) => {
        item.incomes.map((item2, index2) => {              
  
            if (typeof(incomes[index]) == "undefined") { 
                incomes[index] = 0
            }

            incomes[index] = Number(incomes[index]) + Number(item2.amount.replace("€","").replace(",",""))
  
        })

        item.expenses.map((item2, index2) => {              
  
            if (typeof(expenses[index]) == "undefined") {
                expenses[index] = 0
            }

            expenses[index] = Number(expenses[index]) + Number(item2.amount.replace("€","").replace(",",""))
  
        })
    })

    return {expenses,incomes}
}
