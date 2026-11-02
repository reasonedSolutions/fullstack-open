const mongoose = require('mongoose')

const password = process.argv[2]

const url = `mongodb+srv://wongkami:${password}@cluster0.dfvzkgp.mongodb.net/phonebook`

mongoose.set('strictQuery', false)

mongoose.connect(url, { family: 4 })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

// save new document
if (process.argv.length === 5){
    const newPerson = new Person ({
        name: process.argv[3],
        number: process.argv[4]
    })
    newPerson.save().then( response => {
        console.log(`${response.name} was added to the phonebook with ph# ${response.number}`)
        mongoose.connection.close()
    })
}

// list all documents
else if (process.argv.length === 3){
    console.log(`phonebook:`)
    Person.find({}).then( response => {
        response.forEach( person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}
