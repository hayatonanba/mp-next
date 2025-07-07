"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { Slider } from "../ui/slider";

interface MusicPlayerProps {
  musicUrl: string;
  autoPlay?: boolean;
}

export default function MusicPlayer({
  musicUrl,
  autoPlay = true,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([0.3]);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume[0];
    audio.loop = true;

    if (autoPlay && !isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [autoPlay, isPlaying, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume[0];
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="flex items-center space-x-3 rounded-full bg-black/40 p-4 text-white shadow-2xl backdrop-blur-md">
        <Button
          onClick={togglePlay}
          size="icon"
          aria-label="Toggle Play/Pause"
          className="cursor-pointer rounded-full bg-white/20 hover:bg-white/30"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>

        <Button
          onClick={toggleMute}
          size="icon"
          aria-label="Toggle Mute/Unmute"
          className="cursor-pointer rounded-full bg-white/20 hover:bg-white/30"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>

        <div className="w-20">
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={1}
            min={0}
            step={0.1}
            className="w-full"
          />
        </div>
      </div>
    
      {/** biome-ignore lint/a11y/useMediaCaption: <explanation> */}
    <audio
        ref={audioRef}
        aria-describedby="audio-desc"
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={musicUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
