const express = require('express')
const app = express();
const PORT = 5000
const models = require('../models')
app.use(express.json())
app.use(express.cors())

app.get('/', (req,res)=>{
    models.Books.findAll({
        attributes: []
    })
})
app.post('/add-book', (req,res)=>{
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageURL = req.body.imageURL

    models.Books.create({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageURL: imageURL
    })
    res.redirect('/')
})

app.post('/delete-books/:bookid', (req,res)=>{
    let bookid = req.params.bookid
    models.Books.destroy({
        where: {
            bookid:bookid
        }
    })
    res.redirect('/')
})

app.listen(PORT, ()=>{
    console.log("server is running")
})