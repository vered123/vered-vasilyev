const express = require ('express');
const app = express ();
const fs = require('fs');

app.get('/', (req, res) => {
  try {
      fs.readFile('./index.html','utf8', (err,data) =>{
  if (err) throw err

    res.send(`${data}`)
}) 

} catch(err){
    console.log(err)
}


})



app.get('/foo', (req, res) => {
    res.send('<h1>hi there foo</h1')
})



let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('server listen on port', port)
})