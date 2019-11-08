const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const url = "mongodb://vered1999:vered1999@cluster0-shard-00-00-dpm0t.gcp.mongodb.net:27017,cluster0-shard-00-01-dpm0t.gcp.mongodb.net:27017,cluster0-shard-00-02-dpm0t.gcp.mongodb.net:27017/vereddb?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin";
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('we are connected!');
});

const Schema = mongoose.Schema;
const schema = new Schema({
    name: String,
    last: String,
    number: Number
});


const contModel = mongoose.model('contacts', schema);

const cont = new contModel.find({ name: 'rose', number:"" });

cont.save().then(doc=>{
    console.log(doc);
}).catch(err=>{
    console.log(err)
})




