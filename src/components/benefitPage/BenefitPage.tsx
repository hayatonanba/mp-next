import type { MeditationBenefit } from "@/lib/data/meditation-benefits";
import * as motion from "motion/react-client"
import { Clock, Target } from "lucide-react";
import BenefitHeader from "../Header/BenefitHeader";
import Image from "next/image";

interface BenefitPageProps {
  benefit: MeditationBenefit;
}

export default function BenefitPage({ benefit }: BenefitPageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Image
          src={benefit.backgroundImage}
          alt={benefit.title}
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${benefit.backgroundColor} opacity-70`}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <BenefitHeader title = {benefit.title} description = {benefit.description} />
        <main className="flex flex-1 items-center justify-center px-6 py-8">
          <div className="w-full max-w-4xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6 rounded-2xl bg-white/10 p-6 backdrop-blur-md">
                  <h2 className="mb-4 font-bold text-2xl text-white">
                    Session Overview
                  </h2>

                  <p className="text-white/90 leading-relaxed">
                    {benefit.content.intro}
                  </p>

                  <div className="space-y-4">
                    <h3 className="flex items-center font-semibold text-lg text-white">
                      <Target className="mr-2 h-5 w-5" />
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {benefit.content.benefits.map((benefitItem) => (
                        <motion.li
                          key={benefitItem}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center text-white/80"
                        >
                          <div className="mr-3 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                          {benefitItem}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-white/20 border-t pt-4">
                    <h4 className="mb-2 flex items-center font-medium text-white">
                      <Clock className="mr-2 h-4 w-4" />
                      Instructions
                    </h4>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {benefit.content.instructions}
                    </p>
                  </div>
                </div>
              </motion.div>
              
                {/* BreathingGuide */}               
            </div>
          </div>
        </main>
      </div>

      {/* MusicPlayer */}
    </div>
  );
}
