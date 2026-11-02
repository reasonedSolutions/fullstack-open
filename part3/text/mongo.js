const mongoose = require(('mongoose'))

if (process.argv.length < 3){
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = 
    `mongodb+srv://wongkami:${password}@cluster0.dfvzkgp.mongodb.net/`

mongoose.set('strictQuery', false)

mongoose.connect(url, { family: 4 })

const noteSchema = mongoose.Schema({
    content: String,
    importance: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note ({
    content: 'HTML is easy',
    importance: false
})

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})