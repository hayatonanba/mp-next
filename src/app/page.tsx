import BenefitsCarousel from "@/components/carousel/BenefitCarousel";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { meditationBenefits } from "@/lib/data/meditation-benefits";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="relative z-10">
        <Header />
        <main className="px-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="pb-12 text-center">
              <h2 className="pb-4 font-bold text-3xl text-white md:text-4xl">
                Choose your Journey
              </h2>
              <p className="mx-auto max-w-2xl text-gray-300 text-lg">
                瞑想でも、眠る前でも。あなたのリズムに合わせて、リラックスを楽しめます。
              </p>
            </div>
            <BenefitsCarousel benefits={meditationBenefits} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
