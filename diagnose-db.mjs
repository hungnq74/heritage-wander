import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function testConnection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not found in .env.local');
    return;
  }

  console.log('Testing connection to:', uri.split('@')[1]);
  const client = new MongoClient(uri, {
    connectTimeoutMS: 5000,
    serverSelectionTimeoutMS: 5000,
  });

  try {
    await client.connect();
    console.log('Successfully connected to MongoDB Atlas!');
    const db = client.db();
    const collections = await db.listCollections().toArray();
    console.log('Found collections:', collections.map(c => c.name));
  } catch (err) {
    console.error('Connection failed with error:');
    console.error(err);
    if (err.message && err.message.includes('SSL alert number 80')) {
        console.log('\n--- DIAGNOSIS ---');
        console.log('This specific error (SSL Alert 80) is extremely common when your IP address is not whitelisted in MongoDB Atlas.');
        console.log('Action: Go to MongoDB Atlas -> Network Access -> Add IP Address -> "Allow Access from Anywhere" (0.0.0.0/0) for a quick test.');
    }
  } finally {
    await client.close();
  }
}

testConnection();
