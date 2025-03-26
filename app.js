//installato express, procedo con la creazione del server
const express = require('express');
const app = express();
const port = 3000;

//creo la route della homepage usando / 
app.get('/', (req, res) =>{

    //mando la risposta con un messaggio per il client
    res.send('Server del mio blog');
})

//creo la route per la bacheca del blog
app.get('/bacheca', (req, res) =>{

    //mando la risposta con un messaggio per il client
    res.send('bacheca');
})

app.listen(port, () =>{
    console.log(`Il server è in ascolto alla porta: ${port}.`)
})

