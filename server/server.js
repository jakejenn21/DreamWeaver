const express = require("express");
const cors = require('cors');
const app = express();
const MongoDBClient = require('./db/db-init');
const { ObjectId } = require('mongodb');

const uri = "mongodb+srv://jakejenn21:dInx6hs3aMdP8zp5@dreamweavercluster.6pbawnn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoDBClient(uri);

app.use(cors());
app.use(express.json());

// ROUTES
app.post('/api/dream', async (req, res) => {
  const dreamCollection = await client.getDreamCollection();  
  await dreamCollection.insertOne(req.body);
  res.status(200).end();
});

app.get('/api/dream', async(req, res) => {
  const dreamCollection = await client.getDreamCollection();  
  const dreams = await dreamCollection.find({}).toArray();
  res.json({dreams});
});

app.delete('/api/dream/:id', async(req, res) => {
  console.log('DELETE')
  const { id } = req.params;
  const dreamCollection = await client.getDreamCollection();  
  await dreamCollection.deleteOne({ '_id': new ObjectId(id) });
  res.status(200).end();
});

app.listen(4700, () => {
  console.log("Server started on port 4700");
});
