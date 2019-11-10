import {findContactsByName, writeContact, deleteContact} from './db';
import express from 'express';

const app = express();

app.use(express.static('src/public'))

app.get('/api/read', (req, res) => {
    findContactsByName(req.query.q)
        .then(results => res.send(results));
})

app.get('/api/create', (req, res) => {
    let newContact = JSON.parse(req.query.obj);
    writeContact(newContact).then(() => res.send('cool story bruh'))
})

app.get('/api/delete', (req, res) => {
    console.log(req.query.id)
    deleteContact(req.query.id).then(() => res.send('Done')).catch(console.log)
})

app.listen(8080, err => {
    console.log('Listening on 8080!')
})