// lib/mongodb.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
export async function connectToDatabase() {
    client.connect();
    return client.db("oct7");
}
