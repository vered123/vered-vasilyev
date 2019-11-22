import mongoose from 'mongoose';

// Connect to the database
connectToDB();

// Define the Contact schema
const Contact = new mongoose.Schema({
    name: String,
    last: String,
    number: Number
});

// Create a mongoose model for contacts<Contact>
const ContModel = mongoose.model('contacts', Contact);

// Export public functions for using our DB in our app"

export let findContactsByName = name => ContModel.find({ name: { $regex: '^'+name, $options: "i" }});

export let writeContact = data => {
    const contact = new ContModel(data)
    return contact.save()
}

export let deleteContact = id => {
    return ContModel.findByIdAndRemove(id)
}


// Utils:
function connectToDB(){
    const url = "mongodb://vered1999:vered1999@cluster0-shard-00-00-dpm0t.gcp.mongodb.net:27017,cluster0-shard-00-01-dpm0t.gcp.mongodb.net:27017,cluster0-shard-00-02-dpm0t.gcp.mongodb.net:27017/vereddb?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin";
    mongoose.connect(url, { useNewUrlParser: true });
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', () => {
        console.log('we are connected!');
    });
}