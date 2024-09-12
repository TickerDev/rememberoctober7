// app/api/candle/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongo";

// Helper function to get the candle count from the database
const getCandleCount = async (db) => {
    const collection = db.collection('candles');
    const candle = await collection.findOne({});
    return candle ? candle.candleCount : 0;
};

// Helper function to update the candle count in the database
const updateCandleCount = async (db, count) => {
    const collection = db.collection('candles');
    await collection.updateOne({}, { $set: { candleCount: count } }, { upsert: true });
};

// GET: Fetch the current candle count
export async function GET() {
    const db = await connectToDatabase();
    const candleCount = await getCandleCount(db);
    return NextResponse.json({ candleCount });
}

// POST: Increment the candle count
export async function POST() {
    const db = await connectToDatabase();
    let candleCount = await getCandleCount(db);
    candleCount++;
    await updateCandleCount(db, candleCount);
    return NextResponse.json({ candleCount });
}
