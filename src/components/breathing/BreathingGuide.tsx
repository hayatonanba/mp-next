"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BreathingGuideProps {
  pattern: {
    inhale: number;
    hold: number;
    exhale: number;
  };
}

type Phase = "inhale" | "hold" | "exhale";

export default function BreathingGuide({ pattern }: BreathingGuideProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<Phase>("inhale");
  const [timeLeft, setTimeLeft] = useState(pattern.inhale);
  const [cycleCount, setCycleCount] = useState(0);

  const totalCycleTime = pattern.inhale + pattern.hold + pattern.exhale;

  const resetTimer = useCallback(() => {
    setCurrentPhase("inhale");
    setTimeLeft(pattern.inhale);
    setCycleCount(0);
  }, [pattern.inhale]);

  useEffect(() => {
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 0.1);
      }, 100);
    } else if (isActive && timeLeft <= 0) {
      // Move to next phase
      if (currentPhase === "inhale") {
        setCurrentPhase("hold");
        setTimeLeft(pattern.hold);
      } else if (currentPhase === "hold") {
        setCurrentPhase("exhale");
        setTimeLeft(pattern.exhale);
      } else if (currentPhase === "exhale") {
        setCurrentPhase("inhale");
        setTimeLeft(pattern.inhale);
        setCycleCount((prev) => prev + 1);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, currentPhase, pattern]);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const getPhaseText = () => {
    switch (currentPhase) {
      case "inhale":
        return "Breathe In";
      case "hold":
        return "Hold";
      case "exhale":
        return "Breathe Out";
    }
  };

  const getPhaseColor = () => {
    switch (currentPhase) {
      case "inhale":
        return "from-blue-400 to-cyan-400";
      case "hold":
        return "from-purple-400 to-pink-400";
      case "exhale":
        return "from-green-400 to-emerald-400";
    }
  };

  const getCircleScale = () => {
    const currentPhaseTime =
      currentPhase === "inhale"
        ? pattern.inhale
        : currentPhase === "hold"
          ? pattern.hold
          : pattern.exhale;
    const progress = (currentPhaseTime - timeLeft) / currentPhaseTime;

    switch (currentPhase) {
      case "inhale":
        return 0.5 + progress * 0.5; // Scale from 0.5 to 1
      case "hold":
        return 1; // Stay at full size
      case "exhale":
        return 1 - progress * 0.5; // Scale from 1 to 0.5
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {/* Breathing Circle */}
      <div className="relative">
        <motion.div
          className={`h-64 w-64 rounded-full bg-gradient-to-br ${getPhaseColor()} shadow-2xl`}
          animate={{
            scale: isActive ? getCircleScale() : 0.8,
          }}
          transition={{
            duration: isActive ? 0.1 : 0.5,
            ease: "easeInOut",
          }}
        />

        {/* Inner ring for progress */}
        <div className="absolute inset-4 rounded-full border-4 border-white/30">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{
              borderTopColor: "white",
              borderRightColor: "white",
            }}
            animate={{
              rotate: isActive ? 360 : 0,
            }}
            transition={{
              duration: totalCycleTime,
              repeat: isActive ? Infinity : 0,
              ease: "linear",
            }}
          />
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              <div className="mb-2 font-bold text-2xl">{getPhaseText()}</div>
              <div className="font-mono text-4xl">{Math.ceil(timeLeft)}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Cycle Counter */}
      <div className="font-medium text-lg text-white/80">
        Cycles Completed: {cycleCount}
      </div>

      {/* Controls */}
      <div className="flex space-x-4">
        <Button
          onClick={toggleActive}
          className="cursor-pointer border-white/30 bg-white/20 px-8 py-3 text-white backdrop-blur-md hover:bg-white/30"
          size="lg"
        >
          {isActive ? (
            <>
              <Pause className="mr-2 h-5 w-5" />
              Pause
            </>
          ) : (
            <>
              <Play className="mr-2 h-5 w-5" />
              Start
            </>
          )}
        </Button>

        <Button
          onClick={() => {
            setIsActive(false);
            resetTimer();
          }}
          variant="outline"
          className="cursor-pointer border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur-md hover:bg-white/20"
          size="lg"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>

      {/* Breathing Pattern Info */}
      <div className="rounded-lg bg-white/10 p-4 text-white/80 backdrop-blur-md">
        <div className="mb-2 font-medium text-sm">Breathing Pattern:</div>
        <div className="flex space-x-4 text-sm">
          <span>吸い込む: {pattern.inhale}s</span>
          <span>止める: {pattern.hold}s</span>
          <span>吐く: {pattern.exhale}s</span>
        </div>
      </div>
    </div>
  );
}
