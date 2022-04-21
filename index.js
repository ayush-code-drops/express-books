const express = require('express');
const app = express();


app.get('/books', (req, res, next) => {
    console.log('fetching all the books');
    res.send('Books Page')
})
app.get('/', (req, res, next) => {
   // console.log('fetching all the books');
    res.send('This is Home page')
})

app.get('/books/:booksName', (req, res, next) => {
    let booksName = req.params
    console.log(`${req.params.booksName} is the current book`)
    res.json(req.params)
})
app.listen(8000)