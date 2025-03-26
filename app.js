//installato express, procedo con la creazione del server
const express = require('express');

//importo l'array creato nell'altro file js
const blogList = require('./data/list-posts');
const app = express();
const port = 3000;

//creo la route della homepage usando / 
app.get('/', (req, res) =>{

    //mando la risposta con un messaggio per il client
    res.send('Server del mio blog');
})

//creo la route per la bacheca del blog
app.get('/bacheca', (req, res) =>{

    //mando la risposta convertendo in mio dato (in questo caso l'array di oggetti contenente la lista per il blog) in json
    res.json(blogList);
   
})

app.listen(port, () =>{
    console.log(`Il server è in ascolto alla porta: ${port}.`)
})

