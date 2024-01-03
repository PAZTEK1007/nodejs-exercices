const express = require('express');
let mongoose = require('mongoose');
require('dotenv').config();

let Schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});
module.exports = mongoose.model('Schema', Schema);

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PW = process.env.MONGO_PW;
const MONGO_DB = process.env.MONGO_DB;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PW}@${MONGO_DB}?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Use connect method to connect to the Server
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
    });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
    req.db 
});