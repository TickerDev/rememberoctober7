import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "data", "candles.json");

// Helper function to read the candle count
const getCandleCount = () => {
    try {
        const data = fs.readFileSync(FILE_PATH, "utf-8");
        return JSON.parse(data).candleCount || 0;
    } catch (error) {
        return 0;
    }
};

// Helper function to update the candle count
const updateCandleCount = (count) => {
    const data = { candleCount: count };
    fs.writeFileSync(FILE_PATH, JSON.stringify(data));
};

// GET: Fetch the current candle count
export async function GET() {
    const candleCount = getCandleCount();
    return NextResponse.json({ candleCount });
}

// POST: Increment the candle count
export async function POST() {
    let candleCount = getCandleCount();
    candleCount++;
    updateCandleCount(candleCount);
    return NextResponse.json({ candleCount });
}
