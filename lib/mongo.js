// lib/mongodb.js
import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://verceloct7:oCU29yUvRR60YDVv@cluster0.ryg2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

export async function connectToDatabase() {
        await client.connect();
    return client.db("oct7");
}
