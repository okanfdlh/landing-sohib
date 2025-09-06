"use client";
import React, { useEffect, useState } from "react";
import { Code, Smartphone, Building } from "lucide-react";

type AnimatedNumberProps = {
  target: number;
  suffix?: string;
  duration?: number;
};

function AnimatedNumber({
  target,
  suffix = "",
  duration = 2000,
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number | null) => {
      if (timestamp === null) return;
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * target));
      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(target); // pastikan tepat target di akhir
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function ExperienceSection() {
  return (
    <div
      className="w-full h-[5cm] flex items-center justify-center bg-gray-50 px-6 md:px-12 lg:px-24"
      style={{ minHeight: "80px" }}
    >
      <div className="flex flex-wrap gap-16 max-w-screen-xl w-full">
        {/* Stat 1 */}
        <div className="flex items-center gap-6 flex-1 min-w-[200px]">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
            <Code className="h-10 w-10 text-blue-100" />
          </div>
          <div>
            <div className="font-extrabold text-primary text-4xl">
              <AnimatedNumber target={10} suffix="+" />
            </div>
            <div className="text-base text-primary">Proyek Selesai</div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center gap-6 flex-1 min-w-[200px]">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
            <Smartphone className="h-10 w-10 text-blue-100" />
          </div>
          <div>
            <div className="font-extrabold text-primary text-4xl">
              <AnimatedNumber target={100} suffix="%" />
            </div>
            <div className="text-base text-primary">Kepuasan Klien</div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex items-center gap-6 flex-1 min-w-[200px]">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
            <Building className="h-10 w-10 text-blue-100" />
          </div>
          <div>
            <div className="font-extrabold text-primary text-4xl">
              <AnimatedNumber target={2025} />
            </div>
            <div className="text-base text-primary">Berdiri</div>
          </div>
        </div>
      </div>
    </div>
  );
}
