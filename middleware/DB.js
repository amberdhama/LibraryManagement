const mongoose = require('mongoose');

const user1 = "amber";
const pass1 = "amberdhama";
const dbName = "Library";
const uri = `mongodb+srv://${user1}:${pass1}@notcluster.1hqnl07.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=notCluster`;

async function connectDB() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}

module.exports = connectDB;










// const { MongoClient, ServerApiVersion } = require('mongodb');

// const user1 = "amber";
// const pass1 = "amberdhama";
// const uri = `mongodb+srv://${user1}:${pass1}@notcluster.1hqnl07.mongodb.net/G16?retryWrites=true&w=majority&appName=notCluster`;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//   } finally {
//     await client.close();
//   }
// }

// module.exports = run;
