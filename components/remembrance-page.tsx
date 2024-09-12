"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function RemembrancePage() {
  const [candleCount, setCandleCount] = useState(0);

  // Fetch the candle count when the component mounts
  useEffect(() => {
    fetch("/api/candle")
      .then(response => response.json())
      .then(data => {
        setCandleCount(data.candleCount);
      });
  }, []);

  // Handle candle lighting and updating the count
  const handleLightCandle = () => {
    fetch("/api/candle", {
      method: "POST",
    })
      .then(response => response.json())
      .then(data => {
        setCandleCount(data.candleCount);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative text-white p-4 font-emoji">
      {/* Background image with slight blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/BBFj2qv/05-52-01-832-512-ezgif-com-webp-to-gif-converter.gif")',
          filter: "blur(10px) brightness(0.7)",
          zIndex: -1,
        }}
      ></div>
      <main className="max-w-2xl w-full text-center z-10 text-shadow-xl">
        <h1 className="text-4xl font-bold mb-6">Remembering October 7th 🇮🇱</h1>

        <h2 className="text-3xl font-semibold mb-4 text-shadow-xl">
          In Memory and Solidarity 🇮🇱
        </h2>

        <div className="space-y-6 mb-8">
          <p className="text-lg bg-opacity-50 p-4 rounded text-shadow-xl">
            We come together to remember the lives lost and affected by the
            tragic events of October 7th, 2023. Our thoughts are with the
            victims, their families, and all those impacted.
          </p>

          <p className="text-lg bg-opacity-50 p-4 rounded text-shadow-xl">
            This day serves as a solemn reminder of the fragility of peace and
            the importance of unity in the face of adversity. As we reflect on
            the events of that day, we reaffirm our commitment to fostering
            understanding, compassion, and hope in our communities and beyond.
          </p>

          <p className="text-lg bg-opacity-50 p-4 rounded text-shadow-xl">
            Let us honor the memory of those we lost by working towards a future
            where such tragedies are prevented, where dialogue replaces
            conflict, and where the sanctity of human life is universally
            respected.
          </p>
        </div>

        <div className="mb-8">
          <Button
            onClick={handleLightCandle}
            className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg py-2 px-4"
          >
            Light a Soul Candle
          </Button>
          <p className="mt-4 text-xl bg-opacity-50 p-2 rounded inline-block text-shadow-xl">
            {candleCount} {candleCount === 1 ? "candle" : "candles"} lit in
            remembrance
          </p>
        </div>

        <p className="text-xl italic text-shadow-xl">
          &#34;In the face of darkness, we stand together in the light of
          remembrance and hope.&#34;
        </p>
      </main>
      <footer className="mt-8 text-center z-10">
        <p className="text-sm bg-opacity-50 p-2 rounded text-shadow-xl">
          In loving memory of those we lost on October 7th, 2023. <br /> In
          loving memory of the brave soldiers we lost in the Iron Swords War{" "}
          {"\u{1F1EE}\u{1F1F1}"}
        </p>
      </footer>
    </div>
  );
}
