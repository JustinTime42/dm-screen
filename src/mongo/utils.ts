import { MongoClient } from 'mongodb';

let client: MongoClient;

export async function connectToDb() {

  if (!client) {
    const uri = process.env.MONGODB_URI || "";
    const options = {};
    client = new MongoClient(uri, options);    
    await client.connect();
  }
  return client;
}