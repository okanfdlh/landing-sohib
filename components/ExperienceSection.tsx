"use client";
import React, { useEffect, useState } from "react";
import { Code, Smartphone, Building } from "lucide-react";
import { Slide, Bounce } from "react-awesome-reveal";
import { motion } from "framer-motion";

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
      className="w-full flex items-center justify-center bg-gray-50 px-6 md:px-12 lg:px-24 py-16"
      style={{ minHeight: "80px" }}
    >
      <div className="flex flex-wrap gap-16 max-w-screen-xl w-full justify-center">
        {/* Stat 1 */}
        <Slide direction="up" duration={800} delay={100}>
          <Bounce duration={1200}>
            <motion.div
              className="flex items-center gap-6 flex-1 min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <Code className="h-10 w-10 text-blue-100" />
              </div>
              <div>
                <div className="font-extrabold text-primary text-4xl">
                  <AnimatedNumber target={10} suffix="+" />
                </div>
                <div className="text-base text-primary">Proyek Selesai</div>
              </div>
            </motion.div>
          </Bounce>
        </Slide>

        {/* Stat 2 */}
        <Slide direction="up" duration={800} delay={200}>
          <Bounce duration={1200}>
            <motion.div
              className="flex items-center gap-6 flex-1 min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <Smartphone className="h-10 w-10 text-blue-100" />
              </div>
              <div>
                <div className="font-extrabold text-primary text-4xl">
                  <AnimatedNumber target={100} suffix="%" />
                </div>
                <div className="text-base text-primary">Kepuasan Klien</div>
              </div>
            </motion.div>
          </Bounce>
        </Slide>

        {/* Stat 3 */}
        <Slide direction="up" duration={800} delay={300}>
          <Bounce duration={1200}>
            <motion.div
              className="flex items-center gap-6 flex-1 min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                <Building className="h-10 w-10 text-blue-100" />
              </div>
              <div>
                <div className="font-extrabold text-primary text-4xl">
                  <AnimatedNumber target={2022} />
                </div>
                <div className="text-base text-primary">Berdiri</div>
              </div>
            </motion.div>
          </Bounce>
        </Slide>
      </div>
    </div>
  );
}
