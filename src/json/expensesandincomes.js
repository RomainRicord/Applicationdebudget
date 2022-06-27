

export const expensesandincomes = () => {

    let two = []

    data.map((item, index) => {

        item.incomes.map((item2, index2) => {              
  
            if (typeof(two[index]) == "undefined") {
                two[index] = []
            }
            
            two[index].push(item2)
  
        })

        item.expenses.map((item2, index2) => {              
  
            //if (Number(item2.amount.replace("€","").replace(",","")) > 0) {
    
                if (typeof(two[index]) == "undefined") {
                    two[index] = []
                }
                
                two[index].push(item2)
            //}
    
          })
    })

    two.sort((a,b) => (new Date(b.date) - new Date(a.date)))

    return {two}
}

