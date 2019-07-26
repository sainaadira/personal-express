const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://snaadira:personal@personal-express-qgwh4.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "personal";

app.listen(3000, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Connected to `" + dbName + "`!");
    });
});
 // anything with app is express
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

// render: and pass in message + result,  messages are objects
  // ejs spits out html, html sent out
  // passing an object to ejs template, messages is a property, you create word in messages
  // messages or whatever gets sent to the ejs and called by ejs

app.get('/', (req, res) => {
  //console.log(db)
  db.collection('messages').find().toArray((err, result) => {
    if (err) return console.log(err)
    console.log(result, 'these are the messages')
    res.render('index.ejs', {messages: result})
  })
})

// // when you add to the collection save these parameters below
// this is done by submitting in the form
app.post('/messages', (req, res) => {
  db.collection('messages').save({msg:req.body.msg, mood:"000"}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/yellow', (req, res) => {
  // console.log('setting the mood', req.body.mood)
  db.collection('messages')

  .findOneAndUpdate({msg:req.body.msg}, {
    $set: {
      mood:'f1c40f'
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
    // console.log('thumb up ok')
  })
})

app.put('/grey', (req, res) => {
  // console.log('setting the mood', req.body.mood)
  db.collection('messages')

  .findOneAndUpdate({msg:req.body.msg}, {
    $set: {
      mood:'515A5A'
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
    // console.log('thumb up ok')
  })
})


app.put('/blue', (req, res) => {
  // console.log('setting the mood', req.body.mood)
  db.collection('messages')

  .findOneAndUpdate({msg:req.body.msg}, {
    $set: {
      mood:'154360'
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
    // console.log('thumb up ok')
  })
})

app.put('/red', (req, res) => {
  // console.log('setting the mood', req.body.mood)
  db.collection('messages')

  .findOneAndUpdate({msg:req.body.msg}, {
    $set: {
      mood:'A93226'
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
    // console.log('thumb up ok')
  })
})


app.delete('/messages', (req, res) => {
  console.log(req.body.msg)
  db.collection('messages').findOneAndDelete({msg:req.body.msg}, (err, result) => {
    if (err) return res.send(500, err)
    res.send({message: 'Message deleted!'})
  })
})
