const express = require("express");
const cors = require('cors');
const app = express();
const MongoDBClient = require('./db/db-init');
const { ObjectId } = require('mongodb');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: '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',
});

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
  const { id } = req.params;
  const dreamCollection = await client.getDreamCollection();  
  await dreamCollection.deleteOne({ '_id': new ObjectId(id) });
  res.status(200).end();
});

app.get('/api/dream/weave', async(req, res) => {
  const { id } = req.params;
  const dreamCollection = await client.getDreamCollection();  
  const dreams = await dreamCollection.find({}).sort({"date": -1}).limit(10).toArray();
  let dreamString = dreams.map(d => d.summary).join('\n\n');

  dreamString = 'Can you analyze these dreams and summarize in one paragraph what they might mean as a whole?\n\n' + dreamString; 
  console.log(dreamString);

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {role: "user", content: dreamString},
    ],
    model: "gpt-3.5-turbo-16k",
  });
  res.json({ message: completion.choices[0].message.content });
});

app.listen(4700, () => {
  console.log("Server started on port 4700");
});
