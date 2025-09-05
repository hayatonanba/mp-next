"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MeditationBenefit } from "@/lib/data/meditation-benefits";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface BenefitsCarouselProps {
  benefits: MeditationBenefit[];
}

export default function BenefitsCarousel({ benefits }: BenefitsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="w-full flex-none px-4 sm:w-1/2 lg:w-1/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={550}
                      height={700}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute right-0 bottom-0 left-0 p-6">
                      <motion.h3
                        className="mb-2 font-bold text-2xl text-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {benefit.title}
                      </motion.h3>
                      <motion.p
                        className="mb-4 text-gray-200 text-sm leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {benefit.description}
                      </motion.p>

                      <Link href={`/benefit/${benefit.id}`}>
                        <Button
                          variant="secondary"
                          className="cursor-pointer border-white/30 bg-white/20 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/30"
                        >
                          Start Session
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        aria-label="Previous"
        className="-translate-y-1/2 absolute top-1/2 left-4 z-10 cursor-pointer border-white/30 bg-white/20 text-white backdrop-blur-md hover:bg-white/30 disabled:opacity-50"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        aria-label="Scroll Next"
        className="-translate-y-1/2 absolute top-1/2 right-4 z-10 cursor-pointer border-white/30 bg-white/20 text-white backdrop-blur-md hover:bg-white/30 disabled:opacity-50"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="mt-8 flex justify-center space-x-3">
        {benefits.map((_, index) => (
          <button
            type="button"
            key={benefits[index].id}
            className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "scale-125 bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex ? "true" : undefined}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
