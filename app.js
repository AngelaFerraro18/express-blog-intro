//installato express, procedo con la creazione del server
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{

    //mando la risposta con un messaggio per il client
    res.send('Server del mio blog');
})

app.listen(port, () =>{
    console.log(`Il server è in ascolto alla porta: ${port}.`)
})