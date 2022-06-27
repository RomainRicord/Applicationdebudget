import data from '../../assets/data.json';

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

export const pieIncomesChart = (userselected) => {

    let category_incomes = []
    let category_expenses = []


    console.log("init pieIncomesChart",userselected,data[userselected])

    
    data[userselected].incomes.map((item2, index2) => {

        if (typeof (category_incomes[item2.category]) == "undefined") {
            category_incomes[item2.category] = {amount:0,category:item2.category,color:colorcategory_incomes2[item2.category]}
            //console.log("Category " + item2.category + " is undefined")
            
        }

        //console.log("Inscription", item2.date, Number(item2.amount.replace("€", "").replace(",", "")), index)

        const n = Math.ceil(Number(item2.amount.replace("€", "").replace(",", "")))

        category_incomes[item2.category] = {name:item2.category,amount:category_incomes[item2.category].amount+n,category:item2.category,color:colorcategory_incomes2[item2.category]}
        
        console.log(category_incomes[item2.category])

    })
    
    
    data[userselected].expenses.map((item2, index2) => {

        if (typeof (category_expenses[item2.category]) == "undefined") {
            category_expenses[item2.category] = {amount:0,category:item2.category,color:colorcategory[item2.category]}
            //console.log("Category " + item2.category + " is undefined")
            
        }
    
        //console.log("Inscription", item2.date, Number(item2.amount.replace("€", "").replace(",", "")), index)
    
        const n = Math.ceil(Number(item2.amount.replace("€", "").replace(",", "")))
    
        category_expenses[item2.category] = {name:item2.category,amount:category_expenses[item2.category].amount+n,category:item2.category,color:colorcategory[item2.category]}
        
        console.log(category_expenses[item2.category])
    
    })
    
    let line2 = []

    console.log("entries",userselected)


    for (const [k,v] of Object.entries(category_expenses)) {

        let t = {}

        //console.log("Inscription", item, index)

        t.name = v.category
        t.amount = v.amount
        t.color = v.color
        t.legendFontColor = "#7F7F7F"
        t.legendFontSize = 15

        console.log('push', t)
        
        line2.push(t)
    }
    
    let line = []

    console.log("entries",userselected)


    for (const [k,v] of Object.entries(category_incomes)) {

        let t = {}

        //console.log("Inscription", item, index)

        t.name = v.category
        t.amount = v.amount
        t.color = v.color
        t.legendFontColor = "#7F7F7F"
        t.legendFontSize = 15

        console.log('push', t)
        
        line.push(t)
    }
    //console.log(date)

    //console.log(category)

    return { line2, line }
}


