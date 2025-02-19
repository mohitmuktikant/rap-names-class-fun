const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 32,
        'birthName': 'Shéyaa Bin Abraham-Joseph', 
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 31,
        'birthName': 'Chancelor Johnathan Bennett', 
        'birthLocation': 'Chicago, Illinois, U.S.'
    },
    'dylan': {
        'age': 31,
        'birthName': 'Dylan', 
        'birthLocation': 'Dylan'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
    // response.json(rapppers)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better get catch it!`)
})