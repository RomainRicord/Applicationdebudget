

const colorcategory = {
    "Alimentaire":"#ff0000",
    "Factures":"#00ff00",
    "Transport":"#0000ff",
    "Santé":"#db6a0d",
    "Logement":"#00ffff",
    "Divertissement":"#ffff00",
    "Vacances":"#ff00ff",
    "Shopping":"#630ddb",
    "Autre":"#11d94d",
}

const colorcategory_incomes2 = {
    "Prestations sociales":"#ff0000",
    "Revenu foncier":"#00ff00",
    "Salaire et assimilé":"#0000ff",
    "Revenu financier":"#db6a0d",
    "Pension alimentaire":"#00ffff",
    "Rente":"#ffff00",
    "Allocation chômage":"#ff00ff",
    "Revenu exceptionnel":"#630ddb",
    "Autre revenu":"#85db0d"
}

export const pieIncomesChart = (expenses_array,incomes_array) => {

    let category_incomes = []
    let category_expenses = []
    
    incomes_array.map((item2, index2) => {

        if (typeof (category_incomes[item2._data.category]) == "undefined") {
            category_incomes[item2._data.category] = {amount:0,category:item2._data.category,color:colorcategory_incomes2[item2._data.category]}
            //console.log("Category " + item2.category + " is undefined")
            
        }

        //console.log("Inscription", item2.date, Number(item2.amount.replace("€", "").replace(",", "")), index)

        const n = Math.ceil(Number(item2._data.amount.replace("€", "").replace(",", "")))

        category_incomes[item2._data.category] = {name:item2._data.category,amount:category_incomes[item2._data.category].amount+n,category:item2._data.category,color:colorcategory_incomes2[item2._data.category]}

    })
    
    
    expenses_array.map((item2, index2) => {

        if (typeof (category_expenses[item2._data.category]) == "undefined") {
            category_expenses[item2._data.category] = {amount:0,category:item2._data.category,color:colorcategory[item2._data.category]}
            //console.log("Category " + item2.category + " is undefined")
            
        }

        //console.log("Inscription", item2.date, Number(item2.amount.replace("€", "").replace(",", "")), index)

        const n = Math.ceil(Number(item2._data.amount.replace("€", "").replace(",", "")))

        category_expenses[item2._data.category] = {name:item2._data.category,amount:category_expenses[item2._data.category].amount+n,category:item2._data.category,color:colorcategory[item2._data.category]}

    })
    
    let line2 = []

    for (const [k,v] of Object.entries(category_expenses)) {

        let t = {}

        //console.log("Inscription", item, index)

        t.name = v.category
        t.amount = v.amount
        t.color = v.color
        t.legendFontColor = "#7F7F7F"
        t.legendFontSize = 15
        
        line2.push(t)
    }
    
    let line = []

    for (const [k,v] of Object.entries(category_incomes)) {

        let t = {}

        //console.log("Inscription", item, index)

        t.name = v.category
        t.amount = v.amount
        t.color = v.color
        t.legendFontColor = "#7F7F7F"
        t.legendFontSize = 15
        
        line.push(t)
    }
    //console.log(date)

    //console.log(category)
    return { line2, line }
}


